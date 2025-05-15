<script lang="ts">
	import type { SanityMediaItem } from '$lib/types';

	let { mediaItem }: { mediaItem: SanityMediaItem } = $props();
</script>

{#if mediaItem._type === 'image'}
	<img
		src={mediaItem.asset.url}
		alt={`History image ${mediaItem._key}`}
		class="w-full rounded-lg border border-border object-cover shadow-md"
	/>
{:else if mediaItem._type === 'file'}
	<video
		src={mediaItem.asset.url}
		controls
		autoplay
		class="w-full rounded-lg border border-border shadow-md"
	>
		<track kind="captions" />
		<!-- Consider adding proper captions if available -->
	</video>
{:else}
	<p class="text-destructive">Unknown media type</p>
{/if}
