<script lang="ts">
	import { browser } from '$app/environment';
	import type { PageData } from './$types';

	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	import HistoryGallery from '$components/historyPage/HistoryGallery.svelte';
	import HistoryTimeline from '$components/historyPage/HistoryTimeline.svelte';
	import HistoryHeader from '$lib/components/historyPage/HistoryHeader.svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	let { data }: { data: PageData } = $props();

	let { initialHistoricalMoments } = data;

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<svelte:head>
	<title>Our History | American Legion Post 199</title>
	<meta
		name="description"
		content="Explore the rich history of American Legion Post 199, from its founding in 1919 to the present day. View our timeline and historical photo gallery."
	/>
	<meta
		name="keywords"
		content="American Legion history, Post 199 timeline, veterans history, Spring Valley NY history, military history, historical photos"
	/>
	<meta property="og:title" content="American Legion Post 199 - Our History" />
	<meta
		property="og:description"
		content="Explore over a century of service and dedication through our historical timeline and photo gallery."
	/>
</svelte:head>

<QueryClientProvider client={queryClient}>
	<Tabs.Root value="timeline">
		<HistoryHeader>
			<Tabs.List
				class="grid grid-cols-2 rounded-lg border border-white/20 bg-white/10 p-1 shadow-lg backdrop-blur-sm"
			>
				<Tabs.Trigger class="h-8 rounded-md font-medium text-white/70" value="timeline">
					Timeline
				</Tabs.Trigger>
				<Tabs.Trigger class="h-8 rounded-md font-medium text-white/70" value="gallery">
					Gallery
				</Tabs.Trigger>
			</Tabs.List>
		</HistoryHeader>

		<div class="pb-14 pt-12">
			<div class="container">
				<Tabs.Content value="timeline">
					<HistoryTimeline {initialHistoricalMoments} />
				</Tabs.Content>
				<Tabs.Content value="gallery">
					<HistoryGallery {initialHistoricalMoments} />
				</Tabs.Content>
			</div>
		</div>
	</Tabs.Root>
</QueryClientProvider>
