// src/lib/queries/history.svelte.ts
import { HISTORY_ITEMS_PER_PAGE } from '$lib/constants';
import type { HistoricalMomentType } from '$lib/types';
import {
	createInfiniteQuery,
	type InfiniteData,
	type QueryFunctionContext
} from '@tanstack/svelte-query';

// Define the shape of the data returned by the fetch function
export type FetchHistoryResponse = {
	data: HistoricalMomentType[];
	nextCursor: number | undefined;
};

// Define the shape of the error (can be refined if needed)
type FetchHistoryError = Error;

// Define QueryKey type
type HistoryQueryKey = readonly ['historicalMoments'];

// Define PageParam type
type HistoryPageParam = number;

// The structure TanStack Query uses internally for infinite query data
type HistoryInfiniteData = InfiniteData<FetchHistoryResponse, HistoryPageParam>;

// Shared fetch function
// Note: We adapt this signature slightly when passing to queryFn below
async function fetchHistoricalMoments(
	context: QueryFunctionContext<HistoryQueryKey, HistoryPageParam>
): Promise<FetchHistoryResponse> {
	const { pageParam = 0 } = context; // Destructure pageParam from context
	// Fetch from the API route instead of directly calling Sanity on the client
	// Ensures consistent data fetching logic (SSR vs client-side)
	const response = await fetch(`/api/history?start=${pageParam}&limit=${HISTORY_ITEMS_PER_PAGE}`);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	const data = (await response.json()) as HistoricalMomentType[];

	// Add a slight delay in development to simulate network latency
	if (import.meta.env.DEV) {
		await new Promise((resolve) => setTimeout(resolve, 500));
	}

	return {
		data,
		nextCursor:
			data.length === HISTORY_ITEMS_PER_PAGE ? pageParam + HISTORY_ITEMS_PER_PAGE : undefined
	};
}

// Reusable query hook
export function createHistoryQuery(initialDataInput?: HistoryInfiniteData) {
	const options = {
		queryKey: ['historicalMoments'] as const, // Ensure precise key type
		queryFn: fetchHistoricalMoments, // Pass the function matching the context signature
		initialPageParam: 0 satisfies HistoryPageParam,
		getNextPageParam: (lastPage: FetchHistoryResponse) => lastPage.nextCursor,
		staleTime: 1000 * 60 * 5, // 5 minutes stale time
		// Conditionally spread initialData from server load
		...(initialDataInput && { initialData: initialDataInput })
	};

	// Return the original query object directly
	return createInfiniteQuery<
		FetchHistoryResponse, // TQueryFnData
		FetchHistoryError, // TError
		HistoryInfiniteData, // TData
		HistoryQueryKey, // TQueryKey
		HistoryPageParam // TPageParam
	>(options);
}

// Type helper reflecting the enhanced return type
export type HistoryQueryType = ReturnType<typeof createHistoryQuery>;
