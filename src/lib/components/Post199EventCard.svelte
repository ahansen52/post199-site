<script lang="ts">
	import * as Card from '$components/ui/card';
	import { cn } from '$lib/utils';
	import { Calendar, Clock, MapPin } from 'lucide-svelte';

	type Props = {
		title: string;
		date: string;
		time?: string;
		location?: string;
		description?: string;
	};

	let { title, date, time, location, description }: Props = $props();

	// Determine if the event is past or upcoming
	const eventDate = new Date(date);
	const currentDate = new Date();
	const isPastEvent = eventDate < currentDate;

	// Set the badge text and style based on event timing
	const badgeText = isPastEvent ? 'Past Event' : 'Upcoming Event';
	const badgeClass = isPastEvent ? 'bg-gray-200 text-gray-700' : 'bg-primary/10 text-primary';
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
		<div class="flex flex-wrap items-center justify-between gap-2">
			<Card.Title class="text-2xl">{title}</Card.Title>
			<div class={cn('rounded-full px-4 py-1 font-medium', badgeClass)}>
				{badgeText}
			</div>
		</div>

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
