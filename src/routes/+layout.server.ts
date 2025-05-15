import { sanityClient } from '$lib/sanityClient';
import type { LayoutServerLoad } from './$types';

/**
 * Layout Server Configuration
 *
 * - prerender = true: generate a fully static site at build time for blazing-fast performance,
 *   zero server-rendering costs, perfect CDN caching, and SEO-friendly HTML.
 *
 * - Sanity CMS webhook: on every Create/Update/Delete in Sanity Studio (footerLinks, events, history),
 *   Sanity POSTs to Vercel's deploy hook URL, triggering an automatic rebuild so the static site stays up-to-date.
 */

export const prerender = true;

export const load = (async () => {
	const footerLinks = await sanityClient.fetch<
		{ name: string; url: string; isExternal: boolean }[]
	>(
		`
		*[_type == "footerLinks"] | order(orderRank) {
			name,
			url,
			isExternal
		}
	`
	);
	return { footerLinks };
}) satisfies LayoutServerLoad;
