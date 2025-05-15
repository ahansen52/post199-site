import { formatEventDate } from '$lib/dateUtils';
import { sanityClient } from '$lib/sanityClient';
import type { SanityDocument } from '@sanity/client';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const events = await sanityClient.fetch<SanityDocument[]>(`
		*[_type == "events"] | order(date asc) {
			title,
			date,
			time,
			location,
			description
		}
	`);

	const formattedEvents = events.map(({ title, date, time, location, description }) => ({
		title,
		date: formatEventDate(date),
		time,
		location,
		description
	}));

	return {
		events: formattedEvents
	};
}) satisfies PageServerLoad;
