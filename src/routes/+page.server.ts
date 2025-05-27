import { formatEventDate, getTodayISOString } from '$lib/dateUtils';
import { sanityClient } from '$lib/sanityClient';
import type { DownloadFormType } from '$lib/types';
import type { SanityDocument } from '@sanity/client';
import type { PageServerLoad } from './$types';

// Disable prerendering for this page to ensure events are filtered with current date
export const prerender = false;

export const load = (async () => {
	// Get current date (without time) for comparison
	const todayString = getTodayISOString();

	// Fetch the hero image
	const heroImageData = await sanityClient.fetch<SanityDocument>(
		`
		*[_type == "heroImage"][0] {
			"heroImageUrl": image.asset->url
		}
	`
	);

	// Fetch events that are today or in the future
	const upcomingEvents = await sanityClient.fetch<SanityDocument[]>(
		`
		*[_type == "events" && date >= $today] | order(date asc) {
			title,
			date,
			time,
			location,
			description
		}
	`,
		{ today: todayString }
	);

	// Fetch download forms, ordered by rank
	const downloadForms = await sanityClient.fetch<DownloadFormType[]>(
		`
		*[_type == "downloadForms"] | order(orderRank) {
			_id,
			title,
			description,
			"fileUrl": file.asset->url,
			icon
		}
	`
	);

	const formattedEvents = upcomingEvents.map(({ title, date, time, location, description }) => ({
		title,
		date: formatEventDate(date),
		time,
		location,
		description
	}));

	return {
		heroImageUrl: heroImageData?.['heroImageUrl'],
		upcomingEvents: formattedEvents,
		downloadForms
	};
}) satisfies PageServerLoad;
