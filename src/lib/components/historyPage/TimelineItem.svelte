<script lang="ts">
	import { formatHistoricalMomentDate } from '$lib/dateUtils';
	import type { HistoricalMomentType, SanityMediaItem } from '$lib/types';
	import { cn } from '$lib/utils';

	import Dialog from '$components/historyPage/Dialog.svelte';
	import { Calendar } from 'lucide-svelte';
	import MediaAssetView from './MediaAssetView.svelte';
	import MediaPreview from './MediaPreview.svelte';
	import TimelineMediaItem from './TimelineMediaItem.svelte';

	let {
		moment,
		index
	}: {
		moment: HistoricalMomentType;
		index: number;
	} = $props();

	// State for dialog visibility
	let isGalleryDialogOpen = $state(false);
	let selectedMediaForDialog: SanityMediaItem | null = $state(null);

	// Format date based on available fields using the utility function
	const formattedDate = $derived(() =>
		formatHistoricalMomentDate(moment.year, moment.month, moment.day)
	);

	// Helper for alternating layout
	const isReversed = index % 2 === 0;

	// Media grid calculations
	const visibleMediaAssets = $derived(moment.media.slice(0, 5));
	const totalMediaCount = $derived(moment.media.length);
	const hasMoreThanMedia5 = $derived(totalMediaCount > 5);
	const remainingMediaCount = $derived(totalMediaCount - 4);

	// Function to open the gallery dialog
	function openGallery() {
		selectedMediaForDialog = null; // Ensure single view is closed
		isGalleryDialogOpen = true;
	}

	// Function to show a single media item in its own dialog
	// Keep gallery open if it was already open
	function showSingleMedia(mediaItem: SanityMediaItem) {
		selectedMediaForDialog = mediaItem;
	}

	// Function to close the single media dialog
	function closeSingleMediaDialog() {
		selectedMediaForDialog = null;
	}

	// Function to close the gallery dialog (and implicitly the single view if open)
	function closeGalleryDialog() {
		isGalleryDialogOpen = false;
		selectedMediaForDialog = null; // Ensure single view closes too
	}
</script>

<article class="grid gap-4 md:grid-cols-2">
	<!-- Timeline header with date -->
	<div class="flex gap-2">
		<div
			class="z-10 grid size-10 flex-shrink-0 place-items-center rounded-full border bg-background"
		>
			<Calendar class="size-5" />
		</div>

		<div class="space-y-2 pt-1">
			<header class="flex items-center gap-2">
				<h3 class="text-balance text-lg font-medium leading-none">
					{moment.title}
				</h3>

				<time class="whitespace-nowrap rounded-lg border px-2.5 py-0.5 font-semibold">
					{formattedDate()}
				</time>
			</header>

			<p class="text-muted-foreground">{moment.description}</p>
		</div>
	</div>

	<!-- Media Grid Previews -->
	<div
		class={cn(
			'ml-14 grid grid-cols-2 gap-4 md:ml-0',
			isReversed ? 'md:col-start-1 md:row-start-1' : ''
		)}
	>
		{#each visibleMediaAssets as mediaItem, mediaIndex (mediaItem._key ?? mediaIndex)}
			{@const isPlusMoreItem = hasMoreThanMedia5 && mediaIndex === 4}
			{@const isFirstItem = mediaIndex === 0}

			<TimelineMediaItem
				{mediaItem}
				{mediaIndex}
				{isFirstItem}
				{isPlusMoreItem}
				{totalMediaCount}
				momentTitle={moment.title}
				{remainingMediaCount}
				onShowMedia={showSingleMedia}
				onOpenGallery={openGallery}
			/>
		{/each}
	</div>
</article>

<!-- Gallery Dialog -->
{#if isGalleryDialogOpen}
	<Dialog open={isGalleryDialogOpen} onClose={closeGalleryDialog} title={moment.title}>
		<!-- Gallery Grid Content -->
		{#if moment.media.length > 0}
			<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{#each moment.media as mediaItem, index (index)}
					<div class="aspect-square">
						<MediaPreview
							{mediaItem}
							mediaIndex={index}
							totalMedia={totalMediaCount}
							momentTitle={moment.title}
							onShowMedia={showSingleMedia}
							useUniformSize={true}
							enableLazyLoad={false}
						/>

						{#if mediaItem.title || mediaItem.description}
							<div class="mt-1">
								{#if mediaItem.title}
									<h3 class="truncate text-base font-semibold">{mediaItem.title}</h3>
								{/if}
								{#if mediaItem.description}
									<p class="line-clamp-2 text-sm text-muted-foreground">
										{mediaItem.description}
									</p>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{:else}
			<p class="text-muted-foreground">No media items available.</p>
		{/if}
	</Dialog>
{/if}

<!-- Single Media Asset Dialog -->
{#if selectedMediaForDialog}
	<Dialog
		open={true}
		onClose={closeSingleMediaDialog}
		title={selectedMediaForDialog?.title}
		description={selectedMediaForDialog?.description ?? undefined}
	>
		{#if selectedMediaForDialog}
			<MediaAssetView mediaItem={selectedMediaForDialog} />
		{/if}
	</Dialog>
{/if}
