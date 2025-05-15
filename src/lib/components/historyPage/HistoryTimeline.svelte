<script lang="ts">
	import { InfiniteLoader, LoaderState } from 'svelte-infinite';

	import {
		createHistoryQuery,
		type FetchHistoryResponse,
		type HistoryQueryType
	} from '$lib/queries/history.svelte';

	import { HISTORY_ITEMS_PER_PAGE } from '$lib/constants';
	import type { HistoricalMomentType } from '$lib/types';

	import LoadingIndicator from '$components/historyPage/LoadingIndicator.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import TimelineItem from './TimelineItem.svelte';

	const { initialHistoricalMoments }: { initialHistoricalMoments: HistoricalMomentType[] } =
		$props();

	// Simplified initial data setup for TanStack Query
	const initialQueryData = (() => {
		if (initialHistoricalMoments.length === 0) {
			return undefined;
		}
		return {
			pages: [
				{
					data: initialHistoricalMoments,
					// Set nextCursor only if the initial data filled a whole page
					nextCursor:
						initialHistoricalMoments.length === HISTORY_ITEMS_PER_PAGE
							? HISTORY_ITEMS_PER_PAGE
							: undefined
				}
			],
			pageParams: [0] // We start with page 0
		};
	})();

	// Initialize the query, leveraging the initial data
	const query: HistoryQueryType = createHistoryQuery(initialQueryData);

	// Derive the flat list of all loaded moments from the query data
	const allMoments = $derived(
		// Flatten the pages array, or fall back to initial data if query data isn't ready
		$query.data?.pages.flatMap((page: FetchHistoryResponse) => page.data) ??
			initialHistoricalMoments
	);

	// State manager for the InfiniteLoader component
	const loaderState = new LoaderState();

	// Function to trigger loading the next page of data
	async function loadMore() {
		// Check if there is a next page and we aren't already fetching it
		if ($query.hasNextPage && !$query.isFetchingNextPage) {
			// fetchNextPage updates the query state, triggering the $effect below
			await $query.fetchNextPage();
		}
	}

	// Effect to synchronize TanStack Query state with InfiniteLoader state
	$effect(() => {
		// Only react after a fetch attempt (next page or initial) completes or errors
		if ($query.isFetching || $query.isFetchingNextPage) return;

		if ($query.isError) {
			// If there's an error (initial or subsequent fetch)
			loaderState.error();
		} else if (!$query.hasNextPage && $query.isSuccess) {
			// If fetching succeeded and there are no more pages, it's complete.
			loaderState.complete();
		} else if ($query.isSuccess) {
			// If fetching succeeded and there might be more pages (or initial load okay)
			loaderState.loaded(); // Reset to loaded, ready for the next scroll trigger
		}
		// No specific cleanup needed for this effect
	});
</script>

<!-- Initial Loading Skeleton: Shown only during the very first data fetch -->
{#if $query.isPending}
	<section class="relative space-y-10" aria-label="Loading History Timeline">
		<!-- Show a fixed number of skeleton loaders for consistency -->
		{#each Array(3) as _, i}
			<div class="grid gap-4 md:grid-cols-2">
				<div class="flex gap-4">
					<Skeleton class="size-10 flex-shrink-0 rounded-full" />
					<div class="w-full space-y-2 pt-1">
						<Skeleton class="h-5 w-3/4" />
						<Skeleton class="h-4 w-1/2 rounded-lg" />
						<Skeleton class="h-12 w-full" />
					</div>
				</div>
				<div
					class="ml-14 grid grid-cols-2 gap-2 md:ml-0 {i % 2 === 0
						? 'md:col-start-1 md:row-start-1'
						: ''}"
				>
					<Skeleton
						class="aspect-video w-full rounded-md {i === 0 ? 'col-span-2' : 'aspect-square'}"
					/>
					{#if i > 0}
						<Skeleton class="aspect-square w-full rounded-md" />
					{/if}
				</div>
			</div>
			{#if i < 2}
				<hr aria-hidden="true" />
			{/if}
		{/each}
	</section>
	<!-- Initial Error State: Shown only if the very first fetch fails -->
{:else if $query.isError && allMoments.length === 0}
	<p class="text-center text-destructive">Error loading history: {$query.error?.message}</p>
	<!-- Data Loaded State: Render the actual timeline -->
{:else if allMoments.length > 0}
	<section aria-label="Post199 History Timeline">
		<InfiniteLoader {loaderState} triggerLoad={loadMore}>
			<div class="timeline-items-wrapper relative space-y-4">
				{#each allMoments as moment, index (moment._id)}
					<TimelineItem {moment} {index} />

					{#if index < allMoments.length - 1 || $query.hasNextPage}
						<hr aria-hidden="true" />
					{/if}
				{/each}
			</div>

			{#snippet loading()}
				<!-- Loading Indicator (Subsequent Loads) -->
				<LoadingIndicator text="Loading more history..." />
			{/snippet}

			{#snippet error(retryLoad)}
				<!-- Error Indicator (Subsequent Loads) -->
				<div class="mt-10 text-center">
					<p class="text-destructive">Error loading more history.</p>
					<button
						onclick={retryLoad}
						class="mt-2 rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
					>
						Retry
					</button>
				</div>
			{/snippet}

			{#snippet noData()}
				<!-- End of Timeline -->
				<p class="mt-10 text-center text-2xl text-muted-foreground">
					You've reached the end of the timeline.
				</p>
			{/snippet}
		</InfiniteLoader>
	</section>

	<!-- No Results State: Shown only if the first fetch succeeded but returned nothing -->
{:else if $query.isSuccess && allMoments.length === 0}
	<p class="mt-10 text-center text-muted-foreground">No historical moments found.</p>
{/if}

<style>
	.timeline-items-wrapper::before {
		content: '';
		position: absolute;
		inset-block-start: 0;
		inset-block-end: 0;
		inset-inline-start: 1.25rem;
		inline-size: 1px;
		background-color: hsl(var(--border));
	}

	@media (min-width: 768px) {
		.timeline-items-wrapper::before {
			inset-inline-start: 50%;
			transform: translateX(-1px);
		}
	}
</style>
