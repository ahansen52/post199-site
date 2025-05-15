<script lang="ts">
	import type { PageData } from './$types';

	import Post199EventCard from '$lib/components/Post199EventCard.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Events & Activities | American Legion Post 199</title>
	<meta
		name="description"
		content="Join American Legion Post 199 for upcoming events, ceremonies, fundraisers, and community activities for veterans and families in Spring Valley, NY."
	/>
	<meta
		name="keywords"
		content="American Legion events, veteran events, Spring Valley events, Post 199 activities, military ceremonies, community service"
	/>
	<meta property="og:title" content="American Legion Post 199 - Upcoming Events" />
	<meta
		property="og:description"
		content="Check out our calendar of upcoming events and activities. Join us to honor veterans and build community."
	/>
</svelte:head>

<div class="container pb-14 pt-28 md:pt-36">
	{#if data.events && data.events.length > 0}
		<header class="text-balance text-center">
			<h1 class="mb-2 text-4xl font-bold">Post 199 Events</h1>
			<p class="text-2xl text-muted-foreground">Join us for our upcoming events and activities</p>
		</header>

		<section class="mt-14 grid gap-14">
			{#each data.events as event}
				<Post199EventCard {...event} />
			{/each}
		</section>
	{:else}
		<header class="text-balance text-center">
			<h1 class="mb-3 text-4xl font-semibold">No Upcoming Events</h1>
			<p class="text-2xl text-muted-foreground">
				There are currently no events scheduled. Please check back later for updates on upcoming
				Post 199 activities.
			</p>
		</header>
	{/if}
</div>
