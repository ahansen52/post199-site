// Import public env variables
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import { createClient, type SanityClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// --- Server-Side Client ---
// This client might use private tokens or specific server settings (like useCdn: false)
// **NEVER import this client directly into client-side (.svelte) code.**
export const sanityClient: SanityClient = createClient({
	// Use private variables here if needed for write access or preview drafts
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: '2025-04-12', // Use a recent API version
	useCdn: false
});

// --- urlFor Function (Client-Safe) ---
// Uses the main sanityClient
const builder = ImageUrlBuilder(sanityClient);

export function urlFor(source: unknown): ReturnType<typeof builder.image> | string {
	// Input validation: Check if the source is usable by the builder
	if (!source) {
		console.warn('Invalid source passed to urlFor (null or undefined):', source);
		return '';
	}

	try {
		// builder.image() can handle various source types (asset objects, references, strings with asset IDs)
		// It will throw an error if the source is fundamentally unusable.
		const imageBuilderInstance = builder.image(source as SanityImageSource);

		// Perform a simple check to increase confidence it returned a builder object
		if (imageBuilderInstance && typeof imageBuilderInstance.width === 'function') {
			return imageBuilderInstance;
		} else {
			// This case should ideally not be hit if builder.image() didn't throw,
			// but added as a safeguard.
			console.warn('builder.image() did not return a valid builder instance for source:', source);
			return '';
		}
	} catch (error) {
		// Catch errors from builder.image() if the source format is completely wrong
		console.error('Error creating image builder in urlFor:', error, 'Source:', source);
		return '';
	}
}
