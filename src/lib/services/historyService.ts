import { HISTORY_ITEMS_PER_PAGE } from '$lib/constants';
import { sanityClient } from '$lib/sanityClient';
import type { HistoricalMomentType } from '$lib/types';

interface FetchHistoryParams {
	start?: number;
	limit?: number;
}

export async function fetchHistoricalMoments({
	start = 0,
	limit = HISTORY_ITEMS_PER_PAGE
}: FetchHistoryParams = {}): Promise<HistoricalMomentType[]> {
	const end = start + limit;

	const query = `
        *[_type == "historicalMoments"] | order(year desc, month desc, day desc) {
            _id,
            year,
            month,
            day,
            title,
            description,
            "media": media[]{
                _key,
                _type,
                title,
                description,
                asset->
            }
        }[${start}...${end}]
    `;

	try {
		const moments = await sanityClient.fetch<HistoricalMomentType[]>(query, { start, end });
		return moments;
	} catch (error) {
		console.error('Failed to fetch historical moments:', error);
		throw new Error('Failed to fetch historical moments');
	}
}
