<script lang="ts">
	import { urlFor } from '$lib/sanityClient';
	import type { SanityMediaItem } from '$lib/types';
	import { cn } from '$lib/utils';
	import { CirclePlay } from 'lucide-svelte';

	type Props = {
		mediaItem: SanityMediaItem;
		mediaIndex: number;
		totalMedia: number;
		momentTitle: string;
		onShowMedia: (mediaItem: SanityMediaItem) => void;
		useUniformSize?: boolean;
		enableLazyLoad?: boolean;
	};

	let {
		mediaItem,
		mediaIndex,
		totalMedia,
		momentTitle,
		onShowMedia,
		useUniformSize = false,
		enableLazyLoad = true
	}: Props = $props();

	// Generate optimized image properties if it's an image
	let imageProps = $derived.by(() => {
		if (mediaItem._type === 'image' && mediaItem.asset) {
			const imageBuilder = urlFor(mediaItem.asset);

			if (
				imageBuilder &&
				typeof imageBuilder !== 'string' &&
				typeof imageBuilder.width === 'function'
			) {
				return {
					src: imageBuilder.width(800).auto('format').url(),
					srcset: [
						imageBuilder.width(320).auto('format').url() + ' 320w',
						imageBuilder.width(640).auto('format').url() + ' 640w',
						imageBuilder.width(768).auto('format').url() + ' 768w',
						imageBuilder.width(1024).auto('format').url() + ' 1024w',
						imageBuilder.width(1280).auto('format').url() + ' 1280w'
					].join(', '),
					sizes: useUniformSize
						? '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw'
						: '(max-width: 768px) 50vw, 33vw'
				};
			} else {
				console.warn('urlFor did not return a valid image builder for asset:', mediaItem.asset);
				return null;
			}
		}
		return null;
	});

	// Determine figure classes based on media position and content
	const figureClasses = cn(
		'relative size-full overflow-hidden rounded-md border',
		!useUniformSize && {
			'col-span-2': mediaIndex === 0,
			'aspect-video': mediaIndex === 0 && totalMedia > 1,
			'aspect-square': mediaIndex > 0 || totalMedia === 1
		}
	);

	// Handle showing media in the dialog
	function handleMediaClick() {
		onShowMedia(mediaItem);
	}
</script>

<figure class={figureClasses}>
	{#if imageProps}
		<button
			type="button"
			class="size-full"
			onclick={handleMediaClick}
			aria-label={`View image: ${momentTitle}`}
		>
			<img
				loading={enableLazyLoad ? 'lazy' : 'eager'}
				src={imageProps.src}
				srcset={imageProps.srcset}
				sizes={imageProps.sizes}
				alt={`History moment ${momentTitle}`}
				class="size-full rounded-md border border-border/10 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
				width="800"
			/>
		</button>
	{:else if mediaItem._type === 'file'}
		<button
			class="grid size-full place-items-center bg-black/90 transition-colors duration-300 hover:bg-black/80"
			onclick={handleMediaClick}
			aria-label={`View video: ${momentTitle}`}
		>
			<CirclePlay class="size-16 text-primary md:size-24 lg:size-32" />
		</button>
	{/if}
</figure>
