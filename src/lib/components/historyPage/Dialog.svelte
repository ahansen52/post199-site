<script lang="ts">
	import { browser } from '$app/environment';
	import { X } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	let {
		open,
		onClose,
		children, // Default slot
		title = undefined, // String title prop
		description = undefined
	}: {
		open: boolean;
		onClose: () => void;
		children: Snippet;
		title?: string | undefined;
		description?: string | undefined;
	} = $props();

	let dialogElement: HTMLDialogElement | undefined;

	// Effect to synchronize the dialog's open state with the 'open' prop
	$effect(() => {
		if (browser && dialogElement) {
			if (open) {
				// Dialog should be open
				if (!dialogElement.open) {
					// If not already open, open it and add class
					dialogElement.showModal();
					document.documentElement.classList.add('overflow-hidden');
				}
			} else {
				// Dialog should be closed (open is false)
				if (dialogElement.open) {
					// If it's currently open, close it
					dialogElement.close();
				}
				// Always remove the class when open is false
				document.documentElement.classList.remove('overflow-hidden');
			}
		}

		// Teardown function to ensure cleanup on unmount
		return () => {
			if (browser) {
				// Ensure the class is removed if the component unmounts
				document.documentElement.classList.remove('overflow-hidden');
			}
		};
	});

	// Handler for the dialog's native 'close' event (ESC key, backdrop click)
	function handleDialogCloseEvent() {
		// If the dialog is supposed to be open (prop is true), but it closed due to ESC/backdrop,
		// it means the user initiated the close. Notify the parent via onClose.
		if (open) {
			onClose();
		}
	}

	// Function called by the explicit close button ONLY
	function requestCloseButtonClick() {
		// Directly call the parent's onClose handler.
		// This will set the 'open' prop to false, triggering the $effect to call dialogElement.close().
		onClose();
	}
</script>

<!--
bind:this wires the dialogElement variable to the actual DOM element.
onclose handles the native close event (ESC, backdrop click).
The classes style the dialog container itself (transparent background, no padding/border).
The ::backdrop pseudo-element is styled in the <style> block below.
-->
<dialog
	bind:this={dialogElement}
	onclose={handleDialogCloseEvent}
	class="grid h-full place-items-center bg-transparent backdrop:bg-black/90 backdrop:backdrop-blur-md"
	aria-labelledby={title ? 'dialog-title' : undefined}
>
	<!-- This inner div provides the visible container styling (background, padding, size constraints) -->
	<div
		class="max-h-[95vh] w-full max-w-7xl overflow-y-auto rounded-lg bg-card duration-300 animate-in fade-in zoom-in-95"
	>
		<!-- Render the title slot if provided -->
		<header class="sticky top-0 z-10 flex justify-between bg-card px-3 pb-4 pt-2">
			<div class="text-pretty">
				{#if title}
					<h2 id="dialog-title" class="text-xl font-semibold text-card-foreground md:text-2xl">
						{title}
					</h2>
				{/if}
				{#if description}
					<p class="text-muted-foreground">{description}</p>
				{/if}
			</div>

			<!-- Close Button -->
			<button
				onclick={requestCloseButtonClick}
				class="self-start rounded-full p-1.5 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
				aria-label="Close dialog"
			>
				<X class="size-6" />
			</button>
		</header>
		<!-- Render the default slot content -->
		<div class="px-3 pb-3">{@render children()}</div>
	</div>
</dialog>

<style>
	dialog::backdrop {
		animation: fadeIn 0.3s ease;
	}

	dialog[open] > div {
		animation: scaleIn 0.3s ease;
	}

	dialog:not([open]) {
		opacity: 0;
		transform: scale(0.95);
		transition:
			opacity 0.2s,
			transform 0.2s;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes scaleIn {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
