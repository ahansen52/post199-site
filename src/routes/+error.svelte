<script>
	import { page } from '$app/state';
	import Button from '$components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>Page Not Found - American Legion Post 199</title>
</svelte:head>

<div class="grid min-h-screen place-items-center">
	<div class="max-w-md rounded border p-8 text-center shadow-sm">
		{#if page.status === 404}
			<h1 class="mb-6 text-2xl font-semibold text-gray-800">Page Not Found</h1>
			<p class="mb-6 text-gray-600">We couldn't find the page you were looking for.</p>
		{:else}
			<h1 class="mb-4 text-2xl font-semibold text-gray-800">
				Oops! An Error Occurred ({page.status})
			</h1>
			{#if page.error?.message}
				<p class="mb-6 text-gray-600">{page.error.message}</p>
			{:else}
				<p class="mb-6 text-gray-600">Something went wrong while trying to load this page.</p>
			{/if}
		{/if}

		<Button href="/">Return to Homepage</Button>
	</div>
</div>
