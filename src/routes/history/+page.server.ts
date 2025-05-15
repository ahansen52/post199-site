import { HISTORY_ITEMS_PER_PAGE } from '$lib/constants';
import { fetchHistoricalMoments } from '$lib/services/historyService';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const initialHistoricalMoments = await fetchHistoricalMoments({
		limit: HISTORY_ITEMS_PER_PAGE
	});

	console.log('Fetched initial historical moments using service.');

	return {
		initialHistoricalMoments
	};
}) satisfies PageServerLoad;
