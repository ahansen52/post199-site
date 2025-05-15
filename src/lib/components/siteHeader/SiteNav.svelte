<script module lang="ts">
	export const MAIN_NAV_ID: string = 'main_navigation_id';

	export const navigationMenuState = $state({
		isOpen: false
	});
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils';

	import { page } from '$app/state';
	import Button from '$components/ui/button/button.svelte';
	import { mainNavLinks } from '$lib/navLinks';

	type Props = {
		class?: HTMLAttributes<HTMLElement>['class'];
	};

	const { class: className }: Props = $props();
</script>

<nav
	id={MAIN_NAV_ID}
	aria-label="Main Navigation"
	class:-translate-x-full={!navigationMenuState.isOpen}
	class={cn(
		'absolute left-0 top-full z-50 h-svh w-full border-t border-accent-foreground/10 bg-secondary px-4 pt-10 transition-transform duration-300 sm:relative sm:h-full sm:w-fit sm:-translate-x-0 sm:border-t-0 sm:bg-transparent sm:p-0',
		className
	)}
>
	<ul class="grid gap-5 *:*:w-full sm:flex">
		{#each Object.values(mainNavLinks) as link}
			{@const isCurrentPage = page.url.pathname === link.href ? 'page' : undefined}

			<li>
				<Button
					class={cn(
						'p-0 text-lg text-black hover:underline hover:underline-offset-8 hover:[text-decoration-thickness:2px]',
						isCurrentPage && 'underline underline-offset-8 [text-decoration-thickness:2px]'
					)}
					href={link.href}
					variant="link"
					aria-label={link.ariaLabel}
					aria-current={isCurrentPage}
					onclick={() => (navigationMenuState.isOpen = false)}
				>
					{link.title}
				</Button>
			</li>
		{/each}
	</ul>
</nav>
