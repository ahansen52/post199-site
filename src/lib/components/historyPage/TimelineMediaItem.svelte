<script lang="ts">
	import type { SanityMediaItem } from '$lib/types';
	import { cn } from '$lib/utils';
	import MediaPreview from './MediaPreview.svelte';

	let {
		mediaItem,
		mediaIndex, // Keep index for potential future use or keys if needed outside
		isFirstItem,
		isPlusMoreItem,
		totalMediaCount,
		momentTitle,
		remainingMediaCount,
		onShowMedia,
		onOpenGallery
	}: {
		mediaItem: SanityMediaItem & { momentTitle?: string }; // Allow momentTitle to be optional if passed via spread later
		mediaIndex: number;
		isFirstItem: boolean;
		isPlusMoreItem: boolean;
		totalMediaCount: number;
		momentTitle: string;
		remainingMediaCount: number;
		onShowMedia: (item: SanityMediaItem) => void;
		onOpenGallery: () => void;
	} = $props();
</script>

<div class={cn(isFirstItem ? 'col-span-2' : 'col-span-1')}>
	<!-- Image Container (handles aspect ratio & +More overlay) -->
	<div class="relative">
		<MediaPreview
			{mediaItem}
			{mediaIndex}
			totalMedia={totalMediaCount}
			{momentTitle}
			onShowMedia={() => onShowMedia(mediaItem)}
		/>

		{#if isPlusMoreItem}
			<button
				type="button"
				onclick={onOpenGallery}
				class="absolute inset-0 grid place-items-center rounded-lg bg-black/70 font-bold text-white transition-colors hover:bg-black/50"
				aria-label={`Show all ${totalMediaCount} media items for ${momentTitle}`}
			>
				+{remainingMediaCount} more
			</button>
		{/if}
	</div>

	<!-- Text Block (conditional, follows image container) -->
	{#if !isPlusMoreItem && (mediaItem.title || mediaItem.description)}
		<div class="mt-1">
			{#if mediaItem.title}
				<h3 class="truncate text-base font-semibold">{mediaItem.title}</h3>
			{/if}
			{#if mediaItem.description}
				<p class="line-clamp-2 text-sm text-muted-foreground">{mediaItem.description}</p>
			{/if}
		</div>
	{/if}
</div>
