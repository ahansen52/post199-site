<script lang="ts">
	import { dev } from '$app/environment';
	import { SITE_URL } from '$lib/constants';

	import { inject } from '@vercel/analytics';

	import '../app.css';

	import SiteFooter from '$components/SiteFooter.svelte';
	import SiteHeader from '$components/siteHeader/SiteHeader.svelte';

	let { children, data } = $props();

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>American Legion Post 199 | Serving Veterans Since 1919</title>
	<meta
		name="description"
		content="American Legion Post 199 in Spring Valley, NY. Supporting veterans, their families, and the community since 1919 with events, resources, and programs."
	/>
	<meta
		name="keywords"
		content="American Legion, Post 199, Veterans, Spring Valley, Military, Community Service, Memorial Day, Veterans Day"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:title" content="American Legion Post 199" />
	<meta property="og:description" content="Serving veterans and the community since 1919" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<SiteHeader />

	<main class="flex-1">
		{@render children()}
	</main>

	<SiteFooter footerLinks={data.footerLinks} />
</div>
