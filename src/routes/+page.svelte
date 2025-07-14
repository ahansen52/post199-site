<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { cn } from '$lib/utils';
	import type { PageData } from './$types';

	import Button from '$components/ui/button/button.svelte';
	import * as Card from '$components/ui/card';
	import Post199EventCard from '$lib/components/Post199EventCard.svelte';
	import {
		Banknote,
		Bell,
		BookOpen,
		Briefcase,
		Building,
		CalendarDays,
		ChevronRight,
		Clock,
		CreditCard,
		Download,
		FileText,
		Flag,
		Folder,
		GraduationCap,
		Heart,
		Home,
		Info,
		School,
		Trophy,
		Users,
		Wallet,
		type Icon as LucideIcon
	} from 'lucide-svelte';

	// Map icon names from Sanity to imported Lucide components
	const icons: Record<string, typeof LucideIcon> = {
		FileText,
		Banknote,
		Bell,
		BookOpen,
		Briefcase,
		Building,
		CalendarDays,
		Clock,
		CreditCard,
		Flag,
		Folder,
		GraduationCap,
		Heart,
		Home,
		Info,
		School,
		Trophy,
		Users,
		Wallet
	};

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Home | American Legion Post 199 | Spring Valley, NY</title>
	<meta
		name="description"
		content="Welcome to American Legion Post 199 in Spring Valley, NY. Join our community of veterans and support our mission of service, camaraderie, and advocacy."
	/>
	<meta
		name="keywords"
		content="American Legion, Post 199, Veterans, Spring Valley, membership, events, community service, military"
	/>
	<meta property="og:title" content="American Legion Post 199 - Home" />
	<meta
		property="og:description"
		content="Serving veterans and the community since 1919. Join us to support veterans, their families, and our community."
	/>
</svelte:head>

{#snippet h2({
	text,
	className,
	Icon
}: {
	text: string;
	className?: string;
	Icon?: typeof LucideIcon;
})}
	<div class="flex flex-col items-center">
		{#if Icon}
			<div class="mb-2 grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
				<Icon class="size-6" />
			</div>
		{/if}

		<h2 class={cn('mb-2 text-4xl font-bold', className)}>{text}</h2>
	</div>
{/snippet}

{#snippet h3({ text, className }: { text: string; className?: string })}
	<h3 class={cn('mb-12 text-center text-xl text-muted-foreground', className)}>{text}</h3>
{/snippet}

{#snippet postMissionCard({
	title,
	Icon,
	description
}: {
	title: string;
	Icon: typeof BookOpen;
	description: string;
})}
	<Card.Root class="transition-all duration-300 hover:shadow-xl">
		<Card.Header>
			<div
				class="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-primary/10 text-primary"
			>
				<Icon class="size-6" />
			</div>
			<Card.Title>{title}</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="text-muted-foreground">{description}</p>
		</Card.Content>
	</Card.Root>
{/snippet}

<section class="relative h-screen w-full overflow-hidden">
	<!-- Image with overlay in one container -->
	{#if data.heroImageUrl}
		<img
			loading="eager"
			src={data.heroImageUrl}
			alt="American Legion Post 199 Hero"
			class="absolute inset-0 size-full object-cover"
		/>
	{:else}
		<!-- Fallback or placeholder if heroImageUrl is not available -->
		<div class="absolute inset-0 size-full bg-gray-300"></div>
	{/if}

	<div class="absolute inset-0 bg-black/50"></div>

	<!-- Content directly in the section -->
	<div class="container relative flex h-full items-end justify-center pb-6">
		<div class="max-w-2xl space-y-5 text-center text-white">
			<h1 class="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
				Welcome to American Legion Post 199
			</h1>

			<p class="text-balance text-3xl">
				Serving veterans and the community in Spring Valley, NY since 1919
			</p>

			<div class="flex flex-wrap justify-center gap-4">
				<Button href="#forms-section" size="lg" class=" bg-red-700 hover:bg-red-800">
					<span class="text-lg">Become a Member</span>
					<ChevronRight class="size-4" />
				</Button>

				<Button
					href={route('/history')}
					size="lg"
					variant="outline"
					class="bg-white/10 text-lg  backdrop-blur-sm hover:bg-white/20"
				>
					Learn More
				</Button>
			</div>
		</div>
	</div>
</section>

<!-- About us -->
<section class="py-16">
	<div class="container">
		{@render h2({ text: 'About us', Icon: Users })}

		{@render h3({
			text: 'Dedicated to serving veterans and our community since 1919'
		})}

		<div class="mb-10 grid gap-8 md:grid-cols-2">
			<div>
				<h3 class="mb-6 text-2xl font-bold">Our History</h3>

				<p class="mb-6">
					American Legion Anthony Moscarella Post 199 in Spring Valley, New York, was founded in
					1919 and chartered by Congress in 1926. For over a century, we have been dedicated to
					serving veterans, their families, and our local community.
				</p>

				<p>
					Our post is named after Anthony Moscarella, a local hero who exemplified the values of
					service and sacrifice that we continue to honor today.
				</p>
			</div>

			<div>
				<h3 class="mb-6 text-2xl font-bold">Our Impact</h3>

				<ul class="mb-6 list-disc space-y-2 pl-8">
					<li>Provided support to over 10,000 veterans and their families</li>
					<li>Organized annual Memorial Day and Veterans Day ceremonies</li>
					<li>Sponsored youth programs including Boys State and Girls State</li>
					<li>Advocated for veterans' rights and benefits at local and national levels</li>
				</ul>
			</div>
		</div>

		<div class="text-center">
			<Button href={route('/history')} class="text-xl">Learn more about our History</Button>
		</div>
	</div>
</section>

<!-- Our Mission -->
<section class="bg-accent py-16">
	<div class="container">
		{@render h2({ text: 'Our Mission', Icon: Flag })}

		{@render h3({
			text: 'Honoring veterans, building community, and preserving our shared legacy of service'
		})}

		<div class="grid grid-cols-1 gap-8 text-center lg:grid-cols-3">
			{@render postMissionCard({
				title: 'Inform Veterans',
				Icon: Info,
				description:
					"We strive to inform Veterans of the benefits they are entitled to, ensuring they have access to the support and resources they've earned through their service."
			})}

			{@render postMissionCard({
				title: 'Foster Community',
				Icon: Users,
				description:
					'Create a sense of belonging and camaraderie among members, strengthening our community bonds.'
			})}

			{@render postMissionCard({
				title: 'Educate Youth',
				Icon: BookOpen,
				description:
					'Promote patriotism and civic responsibility in the next generation through engaging programs.'
			})}
		</div>
	</div>
</section>

<!-- Upcoming Events -->
<section class="py-16">
	<div class="container">
		{@render h2({ text: 'Upcoming Events', Icon: CalendarDays })}

		{#if data.upcomingEvents && data.upcomingEvents.length > 0}
			{@render h3({
				text: 'Join us for these upcoming events and activities at American Legion Post 199'
			})}
			<div class="grid gap-14">
				{#each data.upcomingEvents.slice(0, 3) as event}
					<Post199EventCard {...event} />
				{/each}
			</div>

			{#if data.upcomingEvents.length > 3}
				<div class="mt-8 text-center">
					<Button href={route('/events')} class="text-lg">View All Events</Button>
				</div>
			{/if}
		{:else}
			<div class="rounded-lg border border-muted p-8 text-center">
				<p class="text-xl text-muted-foreground">
					There are no upcoming events scheduled at this time. Please check back later.
				</p>
			</div>
		{/if}
	</div>
</section>

<!-- Download Forms -->
<section id="forms-section" class="bg-accent py-16">
	<div class="container">
		{@render h2({ text: 'Download Forms', Icon: FileText })}

		{@render h3({
			text: 'Access and download various forms related to our post'
		})}

		<div class="grid grid-cols-[repeat(auto-fill,minmax(min(390px,100%),1fr))] gap-6">
			{#each data.downloadForms as form ('form-' + form._id)}
				{@const IconComponent = icons[form.icon] ?? FileText}
				<Card.Root class="flex flex-col transition-all duration-300 hover:shadow-xl">
					<Card.Header>
						<header class="flex items-center gap-4">
							<figure
								class="grid size-12 place-items-center rounded-full bg-primary/10 text-primary"
							>
								<IconComponent class="size-6" />
							</figure>

							<Card.Title>{form.title}</Card.Title>
						</header>
					</Card.Header>

					<Card.Content class="flex flex-1 flex-col gap-6">
						<p class="text-muted-foreground">{form.description}</p>

						<Button href={form.fileUrl} download={form.title} class="mt-auto w-full">
							<Download />

							<span class="text-lg">Download PDF</span>
						</Button>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>
