<script lang="ts">
	import Button from './ui/button/button.svelte';

	type FooterLink = {
		name: string;
		url: string;
		isExternal: boolean;
	};

	let { footerLinks = [] }: { footerLinks?: FooterLink[] } = $props();

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-slate-900 py-4 text-white">
	<div class="container space-y-4">
		{#if footerLinks.length > 0}
			<ul class="flex flex-wrap justify-center">
				{#each footerLinks as { name, url, isExternal }, i}
					<li class="flex items-center">
						<Button
							href={url}
							variant="link"
							class="px-2 py-0 text-lg text-white"
							target={isExternal ? '_blank' : '_self'}
							rel={isExternal ? 'noopener noreferrer' : undefined}
							title={name}
						>
							{name}
						</Button>
						{#if i < footerLinks.length - 1}
							<span class="mx-2 select-none text-slate-600">|</span>
						{/if}
					</li>
				{/each}
			</ul>

			<hr class="w-full border-slate-800" />
		{/if}

		<p class="text-center tracking-wide text-muted-foreground">
			&copy; {currentYear} American Legion Post 199. All rights reserved.
		</p>
	</div>
</footer>
