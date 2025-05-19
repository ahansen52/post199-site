<script lang="ts">
	import * as Card from '$components/ui/card';
	import { Calendar, Clock, MapPin } from 'lucide-svelte';

	type Props = {
		title: string;
		date: string;
		time?: string;
		location?: string;
		description?: string;
	};

	let { title, date, time, location, description }: Props = $props();
</script>

<Card.Root class="transition-all duration-300 hover:shadow-lg">
	<div
		class="flex flex-col bg-accent p-3 text-lg font-medium sm:flex-row sm:items-center sm:gap-2 sm:px-4 sm:py-3"
	>
		<div class="flex items-center gap-2">
			<Calendar class="size-5 text-primary" />
			<span>{date}</span>
		</div>

		{#if time}
			<span class="hidden sm:mx-2 sm:block sm:text-muted-foreground">|</span>
			<div class="mt-1 flex items-center gap-2 sm:mt-0">
				<Clock class="size-5 text-primary" />
				<span class="uppercase">{time}</span>
			</div>
		{/if}
	</div>

	<div class="p-6">
		<Card.Title class="text-2xl">{title}</Card.Title>

		{#if location}
			<div class="mt-4 flex items-center gap-2 text-muted-foreground">
				<MapPin class="size-5 shrink-0 text-primary" />
				<span class="text-lg">{location}</span>
			</div>
		{/if}

		{#if description}
			<p class="mt-4 rounded-md bg-blue-50 p-4 text-lg font-medium text-blue-800">
				{description}
			</p>
		{/if}
	</div>
</Card.Root>
