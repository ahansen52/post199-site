import { HISTORY_ITEMS_PER_PAGE } from '$lib/constants';
import { fetchHistoricalMoments } from '$lib/services/historyService';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const start = parseInt(url.searchParams.get('start') ?? '0');
	const limit = parseInt(url.searchParams.get('limit') ?? String(HISTORY_ITEMS_PER_PAGE));

	try {
		const historicalMoments = await fetchHistoricalMoments({ start, limit });

		console.log(`Fetched historical moments from ${start} with limit ${limit} using service.`);

		return json(historicalMoments);
	} catch (error) {
		console.error('Failed to fetch historical moments via API:', error);
		return json({ error: 'Failed to fetch data' }, { status: 500 });
	}
};
