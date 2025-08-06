<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Icon as LucideIcon } from 'lucide-svelte';
	import { Award, Calendar, Users } from 'lucide-svelte';
</script>

<svelte:head>
	<title>American Legion Auxiliary | Post 199</title>
	<meta
		name="description"
		content="Learn about the American Legion Auxiliary at Post 199, supporting veterans, military families, and community projects through dedicated service."
	/>
	<meta
		name="keywords"
		content="American Legion Auxiliary, Post 199 Auxiliary, women veterans, family support, veteran programs, community service, Spring Valley"
	/>
	<meta property="og:title" content="American Legion Post 199 - Auxiliary" />
	<meta
		property="og:description"
		content="The American Legion Auxiliary supports Post 199's mission through dedicated service to veterans, military families, and our community."
	/>
</svelte:head>

{#snippet historyCard({
	date,
	description,
	Icon
}: {
	date: string;
	description: string;
	Icon: typeof LucideIcon;
})}
	<Card.Root>
		<Card.Header>
			<div
				class="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-primary/10 text-primary"
			>
				<Icon class="size-6" />
			</div>
			<Card.Title class="text-center">{date}</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="text-center text-muted-foreground">{description}</p>
		</Card.Content>
	</Card.Root>
{/snippet}

<section
	class="relative overflow-hidden bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-blue-700/95"
>
	<!-- Decorative elements could also be extracted to a component -->
	<div class="absolute left-1/4 top-1/4 z-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
	<div
		class="absolute bottom-1/4 right-1/4 z-0 h-64 w-64 rounded-full bg-red-400/10 blur-3xl"
	></div>
	<div
		class="absolute left-1/2 top-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/5 blur-3xl"
	></div>

	<div class="relative pb-16 pt-40 text-center text-white">
		<h1 class="mb-6 text-4xl font-bold md:text-6xl">Ladies Auxiliary Moscarella Unit 199</h1>

		<p class="mb-8 text-xl md:text-2xl">Supporting veterans and their families since 1923</p>

		<div class="flex flex-col justify-center gap-4 text-sm font-medium text-white/90 sm:flex-row">
			<p class="rounded-full border border-white/20 bg-white/10 px-4 py-1.5">Established 1923</p>

			<p class="rounded-full border border-white/20 bg-white/10 px-4 py-1.5">Reactivated 2024</p>
		</div>
	</div>
</section>

<!-- Our History Timeline -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Our History</h2>
			<p class="mx-auto mb-12 max-w-3xl text-lg text-gray-600">
				From humble beginnings in 1923 to historic leadership in 2025, the Ladies Auxiliary
				Moscarella Unit 199 has been a cornerstone of community service and veteran support. After
				years of declining membership, the unit charter was turned in when members started passing.
				The unit was successfully reactivated in 2024 with new membership opportunities.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			{@render historyCard({
				date: 'March 15, 1923',
				description:
					'Ladies Auxiliary for Moscarella Unit 199 was organized at the Spring Valley Hook and Ladder facility with Mrs. Eloise May Levine as the first president.',
				Icon: Calendar
			})}

			{@render historyCard({
				date: 'March 22, 1928',
				description:
					'The Department of the American Legion Auxiliary of the State of New York officially incorporated the Anthony Moscarella Unit #199 of The American Legion.',
				Icon: Award
			})}

			{@render historyCard({
				date: 'January 2024',
				description:
					'Unit 199 was reactivated by Maureen Morgan, a Veteran, following 2019 National American Legion Auxiliary regulation changes allowing female Veterans to join under their own eligibility. There are now 17 members.',
				Icon: Users
			})}
		</div>
	</div>
</section>

<!-- Charter Members Section -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">Charter Members (1923)</h2>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<div class="flex items-center gap-2">
					<h3 class="font-semibold text-gray-900">Mrs. Eloise May Levine</h3>
					<span class="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800"
						>First President</span
					>
				</div>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Antonetta Moscarella</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Sayde Brill</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Marnice Sanderson</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Edna Wallace</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Grace Rosenbrock</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Clara Benjamin</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Alma Grahn</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Mary Sherwood</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Kate D. Moles</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Martha Cureton</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Anna Voorhis</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Ms. Carrie Schaefer</h3>
			</div>
			<div class="rounded-lg bg-white p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">Mrs. Nora Moles</h3>
			</div>
		</div>
	</div>
</section>

<!-- Modern Era & Historic Achievements -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
				Modern Era & Historic Achievements
			</h2>
		</div>

		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Department President -->
			<div class="rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 p-8">
				<div class="mb-4 flex items-center gap-2">
					<svg
						class="h-6 w-6 text-yellow-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
						/>
					</svg>
					<h3 class="text-xl font-bold text-gray-900">Department President</h3>
				</div>

				<div class="mb-4">
					<h4 class="text-lg font-semibold text-gray-900">Maureen Morgan</h4>
					<p class="text-gray-700">
						Sworn in as Department of New York American Legion Auxiliary President on July 18, 2025
						- the first dual member from Rockland County to hold this position.
					</p>
				</div>

				<div class="rounded-lg bg-white/50 p-4">
					<h5 class="mb-2 font-semibold text-gray-900">Historic Achievement:</h5>
					<p class="text-sm text-gray-700">
						First dual member from Rockland County in history to be named Department President for
						the State of New York. The last Department President from Rockland County was Mrs.
						Katherine Johnson, 1962-1963 - it has been 62 years.
					</p>
					<p class="mt-2 text-sm text-gray-700">
						Maureen is a dual member of both Post 199 as a Veteran and Auxiliary member. Post/Unit
						199 is on the map with the first dual member to be a Department President from Rockland
						County.
					</p>
				</div>
			</div>

			<!-- Current Leadership -->
			<div class="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
				<div class="mb-4 flex items-center gap-2">
					<svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
					<h3 class="text-xl font-bold text-gray-900">Current Leadership</h3>
				</div>

				<div class="mb-4">
					<h4 class="text-lg font-semibold text-gray-900">Mr. Ike Bosford</h4>
					<p class="text-gray-700">
						Unit President for Unit 199 - the first male president in the unit's history. Also
						serves as SAL Detachment Historian for the Department of New York.
					</p>
				</div>

				<div class="rounded-lg bg-white/50 p-4">
					<p class="text-sm text-gray-700">
						As a dual member as Son of the American Legion and an Auxiliary member through the
						eligibility of his wife Maureen (Veteran).
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 1928 Incorporation Leadership -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
				1928 Incorporation Leadership
			</h2>
		</div>

		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Post Leadership -->
			<div>
				<h3 class="mb-6 text-xl font-semibold text-gray-900">Post Leadership</h3>
				<div class="space-y-3">
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">James Cureton</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Raymond Silas Pitt</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Harry Ball</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">John R. Collins</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Sol Wallant</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Donald R. Sherwood</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Frank Krulish</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">R. I. Stelley</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Mackey Rackow</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">George Sanderson</h4>
					</div>
				</div>
			</div>

			<!-- Certificate Signatories -->
			<div>
				<h3 class="mb-6 text-xl font-semibold text-gray-900">Certificate Signatories</h3>
				<div class="space-y-3">
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Silas Raymond Pitt</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">John R. Collins</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Sol Wallant</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Donald R. Sherwood</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Frank Krulish</h4>
					</div>
					<div class="rounded-lg bg-white p-4 shadow-sm">
						<h4 class="font-medium text-gray-900">Sidney Kearsing</h4>
					</div>
				</div>

				<div class="mt-6 rounded-lg bg-blue-50 p-4">
					<p class="text-xs italic text-gray-600">
						"IN WITNESS WHEREOF, we have made, subscribed and acknowledged this certificate in
						duplicate this 22nd, day of March, 1928."
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
