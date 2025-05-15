<script lang="ts">
	import Dialog from '$components/historyPage/Dialog.svelte';
	import LoadingIndicator from '$components/historyPage/LoadingIndicator.svelte';
	import { HISTORY_ITEMS_PER_PAGE } from '$lib/constants';
	import { createHistoryQuery, type FetchHistoryResponse } from '$lib/queries/history.svelte';
	import type { HistoricalMomentType, SanityMediaItem } from '$lib/types';
	import { InfiniteLoader, LoaderState } from 'svelte-infinite';
	import MediaAssetView from './MediaAssetView.svelte';
	import MediaPreview from './MediaPreview.svelte';

	let { initialHistoricalMoments = [] }: { initialHistoricalMoments?: HistoricalMomentType[] } =
		$props();

	const initialQueryData =
		initialHistoricalMoments.length > 0
			? {
					pages: [
						{
							data: initialHistoricalMoments,
							nextCursor:
								initialHistoricalMoments.length === HISTORY_ITEMS_PER_PAGE
									? HISTORY_ITEMS_PER_PAGE
									: undefined
						}
					],
					pageParams: [0]
				}
			: undefined;

	const query = createHistoryQuery(initialQueryData);

	const allMediaItems = $derived(
		$query.data?.pages.flatMap((page: FetchHistoryResponse) =>
			page.data.flatMap((moment) =>
				moment.media.map((media) => ({
					...media,
					momentTitle: moment.title,
					momentId: moment._id,
					momentYear: moment.year,
					momentMonth: moment.month,
					momentDay: moment.day
				}))
			)
		) ?? []
	);

	let selectedMediaForDialog: (SanityMediaItem & { momentTitle: string; momentId: string }) | null =
		$state(null);

	const loaderState = new LoaderState();

	function showSingleMedia(mediaItem: SanityMediaItem & { momentTitle: string; momentId: string }) {
		selectedMediaForDialog = mediaItem;
	}

	function closeSingleMediaDialog() {
		selectedMediaForDialog = null;
	}

	async function loadMore() {
		if ($query.hasNextPage && !$query.isFetchingNextPage) {
			await $query.fetchNextPage();
		}
	}

	$effect(() => {
		if ($query.isFetching || $query.isFetchingNextPage) return;

		if ($query.isError) {
			loaderState.error();
		} else if (!$query.hasNextPage && $query.isSuccess) {
			loaderState.complete();
		} else if ($query.isSuccess) {
			loaderState.loaded();
		}
	});
</script>

{#if $query.isPending && allMediaItems.length === 0}
	<p class="text-center text-muted-foreground">Loading initial media...</p>
{:else if $query.error && allMediaItems.length === 0}
	<p class="text-center text-destructive">Error loading media: {$query.error.message}</p>
{:else if allMediaItems.length > 0}
	<InfiniteLoader {loaderState} triggerLoad={loadMore}>
		<section class="grid grid-cols-[repeat(auto-fill,minmax(min(230px,100%),1fr))] gap-3">
			{#each allMediaItems as mediaItem, index (index + '-' + (mediaItem.momentId ?? 'no-id') + '-' + mediaItem._key)}
				<div class="aspect-square">
					<MediaPreview
						{mediaItem}
						mediaIndex={index}
						totalMedia={allMediaItems.length}
						momentTitle={mediaItem.momentTitle}
						onShowMedia={() => showSingleMedia(mediaItem)}
						useUniformSize={true}
						enableLazyLoad={true}
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
		</section>

		{#snippet loading()}
			<LoadingIndicator text="Loading more media..." />
		{/snippet}

		{#snippet error(retryLoad)}
			<div class="mt-6 text-center">
				<p class="text-destructive">Error loading more media.</p>
				<button
					onclick={retryLoad}
					class="mt-2 rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
				>
					Retry
				</button>
			</div>
		{/snippet}

		{#snippet noData()}
			<p class="mt-16 text-center text-2xl text-muted-foreground">
				You've reached the end of the gallery.
			</p>
		{/snippet}

		{#snippet noResults()}
			<p class="text-center text-2xl text-muted-foreground">
				No media items found in the historical moments.
			</p>
		{/snippet}
	</InfiniteLoader>
{:else if $query.isSuccess}
	<p class="text-center text-2xl text-muted-foreground">
		No media items found in the historical moments.
	</p>
{/if}

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
