<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Icon as LucideIcon } from 'lucide-svelte';
	import { Award, Calendar, Crown, Star, Trophy, Users } from 'lucide-svelte';
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
	Icon,
	gradient,
	iconColor
}: {
	date: string;
	description: string;
	Icon: typeof LucideIcon;
	gradient: string;
	iconColor: string;
})}
	<div class="group relative">
		<Card.Root
			class="h-full border-0 bg-gradient-to-br transition-all duration-300 hover:-translate-y-1 hover:shadow-xl {gradient}"
		>
			<div
				class="absolute inset-0 rounded-lg bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
			></div>
			<Card.Header class="relative">
				<div
					class="mx-auto mb-4 grid size-16 place-items-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm {iconColor} transition-transform group-hover:scale-110"
				>
					<Icon class="size-8" />
				</div>
				<Card.Title class="mb-2 text-center text-xl font-bold text-white">{date}</Card.Title>
			</Card.Header>
			<Card.Content class="relative">
				<p class="text-center leading-relaxed text-white/90">{description}</p>
			</Card.Content>
		</Card.Root>
	</div>
{/snippet}

<section
	class="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
>
	<!-- Enhanced decorative elements -->
	<div
		class="absolute -top-40 left-1/4 z-0 h-80 w-80 animate-pulse rounded-full bg-blue-500/20 blur-3xl"
	></div>
	<div
		class="absolute -bottom-40 right-1/4 z-0 h-80 w-80 animate-pulse rounded-full bg-red-500/15 blur-3xl delay-1000"
	></div>
	<div
		class="bg-white/8 absolute left-1/2 top-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"
	></div>
	<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

	<!-- Subtle pattern overlay -->
	<div
		class="absolute inset-0 opacity-5"
		style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0);background-size: 40px 40px;"
	></div>

	<div class="relative flex min-h-[80vh] items-center justify-center px-4">
		<div class="max-w-5xl text-center text-white">
			<!-- Main title with enhanced typography -->
			<div class="mb-6 space-y-2">
				<h1 class="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
					<span class="block text-2xl font-semibold md:text-3xl">Ladies Auxiliary</span>
					<span class="block text-4xl font-bold md:text-7xl lg:text-8xl">Moscarella Unit 199</span>
				</h1>
			</div>

			<p class="mb-10 text-xl font-light text-blue-100 md:text-2xl lg:text-3xl">
				Supporting veterans and their families since 1923
			</p>

			<!-- Enhanced badges with better styling -->
			<div class="mb-8 flex flex-wrap justify-center gap-4">
				<div
					class="group relative overflow-hidden rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-600/30 to-blue-500/30 px-6 py-3 backdrop-blur-sm transition-all hover:border-blue-300/50 hover:from-blue-600/40 hover:to-blue-500/40"
				>
					<div
						class="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<span class="relative flex items-center gap-2 text-sm font-semibold">
						<Calendar class="h-4 w-4" />
						Established 1923
					</span>
				</div>

				<div
					class="group relative overflow-hidden rounded-full border border-green-400/30 bg-gradient-to-r from-green-600/30 to-emerald-500/30 px-6 py-3 backdrop-blur-sm transition-all hover:border-green-300/50 hover:from-green-600/40 hover:to-emerald-500/40"
				>
					<div
						class="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<span class="relative flex items-center gap-2 text-sm font-semibold">
						<Users class="h-4 w-4" />
						Reactivated 2024
					</span>
				</div>
			</div>

			<!-- Call to action -->
			<div class="text-blue-200">
				<p class="text-lg font-light">
					Making history with the first dual member Department President from Rockland County
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Our History Timeline -->
<section class="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div class="mx-auto mb-6 flex items-center justify-center">
				<div class="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300"></div>
				<Star class="mx-4 h-8 w-8 text-blue-600" />
				<div class="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent"></div>
			</div>
			<h2
				class="mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
			>
				Our History
			</h2>
			<p class="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-slate-600">
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
				Icon: Calendar,
				gradient: 'from-blue-600 to-blue-800',
				iconColor: 'text-blue-200'
			})}

			{@render historyCard({
				date: 'March 22, 1928',
				description:
					'The Department of the American Legion Auxiliary of the State of New York officially incorporated the Anthony Moscarella Unit #199 of The American Legion.',
				Icon: Award,
				gradient: 'from-emerald-600 to-emerald-800',
				iconColor: 'text-emerald-200'
			})}

			{@render historyCard({
				date: 'January 2024',
				description:
					'Unit 199 was reactivated by Maureen Morgan, a Veteran, following 2019 National American Legion Auxiliary regulation changes allowing female Veterans to join under their own eligibility. There are now 17 members.',
				Icon: Users,
				gradient: 'from-purple-600 to-purple-800',
				iconColor: 'text-purple-200'
			})}
		</div>
	</div>
</section>

<!-- Charter Members Section -->
<section class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div class="mx-auto mb-6 flex items-center justify-center">
				<div class="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300"></div>
				<Crown class="mx-4 h-8 w-8 text-amber-600" />
				<div class="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent"></div>
			</div>
			<h2
				class="mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
			>
				Charter Members (1923)
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-slate-600">
				The founding women who established the Ladies Auxiliary at Post 199
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<div class="group relative">
				<div
					class="h-full rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative flex flex-col items-center text-center">
						<Crown class="mb-3 h-6 w-6 text-amber-600" />
						<h3 class="mb-2 font-bold text-slate-900">Mrs. Eloise May Levine</h3>
						<span
							class="inline-flex items-center rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white"
						>
							First President
						</span>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Antonetta Moscarella</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Sayde Brill</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Marnice Sanderson</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Edna Wallace</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Grace Rosenbrock</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Clara Benjamin</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Alma Grahn</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Mary Sherwood</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Kate D. Moles</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Martha Cureton</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Anna Voorhis</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Ms. Carrie Schaefer</h3>
					</div>
				</div>
			</div>
			<div class="group relative">
				<div
					class="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
				>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>
					<div class="relative text-center">
						<h3 class="font-semibold text-slate-900">Mrs. Nora Moles</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Modern Era & Historic Achievements -->
<section class="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div class="mx-auto mb-6 flex items-center justify-center">
				<div class="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300"></div>
				<Trophy class="mx-4 h-8 w-8 text-yellow-600" />
				<div class="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent"></div>
			</div>
			<h2
				class="mb-6 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
			>
				Modern Era & Historic Achievements
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-slate-600">
				Making history with groundbreaking leadership in the 21st century
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Department President -->
			<div class="group relative">
				<div
					class="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-amber-500/20 blur-xl transition-all group-hover:blur-2xl"
				></div>
				<div
					class="relative rounded-2xl border border-yellow-200/50 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
				>
					<div
						class="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-100/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>

					<div class="relative">
						<div class="mb-6 flex items-center gap-3">
							<div class="rounded-full bg-yellow-600/20 p-3">
								<Star class="h-8 w-8 text-yellow-600" />
							</div>
							<h3 class="text-2xl font-bold text-slate-900">Department President</h3>
						</div>

						<div class="mb-6">
							<h4 class="mb-2 text-xl font-bold text-slate-900">Maureen Morgan</h4>
							<p class="leading-relaxed text-slate-700">
								Sworn in as Department of New York American Legion Auxiliary President on July 18,
								2025 - the first dual member from Rockland County to hold this position.
							</p>
						</div>

						<div class="rounded-xl border border-white/50 bg-white/70 p-6 backdrop-blur-sm">
							<h5 class="mb-3 flex items-center gap-2 font-bold text-slate-900">
								<Trophy class="h-5 w-5 text-yellow-600" />
								Historic Achievement
							</h5>
							<p class="mb-3 text-sm text-slate-700">
								First dual member from Rockland County in history to be named Department President
								for the State of New York. The last Department President from Rockland County was
								Mrs. Katherine Johnson, 1962-1963 - it has been 62 years.
							</p>
							<p class="text-sm text-slate-700">
								Maureen is a dual member of both Post 199 as a Veteran and Auxiliary member.
								Post/Unit 199 is on the map with the first dual member to be a Department President
								from Rockland County.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Current Leadership -->
			<div class="group relative">
				<div
					class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blur-xl transition-all group-hover:blur-2xl"
				></div>
				<div
					class="relative rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
				>
					<div
						class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
					></div>

					<div class="relative">
						<div class="mb-6 flex items-center gap-3">
							<div class="rounded-full bg-blue-600/20 p-3">
								<Users class="h-8 w-8 text-blue-600" />
							</div>
							<h3 class="text-2xl font-bold text-slate-900">Current Leadership</h3>
						</div>

						<div class="mb-6">
							<h4 class="mb-2 text-xl font-bold text-slate-900">Mr. Ike Bosford</h4>
							<p class="leading-relaxed text-slate-700">
								Unit President for Unit 199 - the first male president in the unit's history. Also
								serves as SAL Detachment Historian for the Department of New York.
							</p>
						</div>

						<div class="rounded-xl border border-white/50 bg-white/70 p-6 backdrop-blur-sm">
							<p class="text-sm text-slate-700">
								As a dual member as Son of the American Legion and an Auxiliary member through the
								eligibility of his wife Maureen (Veteran).
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 1928 Incorporation Leadership -->
<section class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div class="mx-auto mb-6 flex items-center justify-center">
				<div class="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300"></div>
				<Award class="mx-4 h-8 w-8 text-indigo-600" />
				<div class="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent"></div>
			</div>
			<h2
				class="mb-6 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
			>
				1928 Incorporation Leadership
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-slate-600">
				The distinguished men who led the official incorporation process
			</p>
		</div>

		<div class="grid gap-12 lg:grid-cols-2">
			<!-- Post Leadership -->
			<div class="relative">
				<div class="mb-8 text-center">
					<h3 class="mb-2 text-2xl font-bold text-slate-900">Post Leadership</h3>
					<p class="text-slate-600">The founding leadership team</p>
				</div>
				<div class="space-y-4">
					<div
						class="group rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-blue-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">James Cureton</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Raymond Silas Pitt</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Harry Ball</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">John R. Collins</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Sol Wallant</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Donald R. Sherwood</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Frank Krulish</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">R. I. Stelley</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Mackey Rackow</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">George Sanderson</h4>
					</div>
				</div>
			</div>

			<!-- Certificate Signatories -->
			<div class="relative">
				<div class="mb-8 text-center">
					<h3 class="mb-2 text-2xl font-bold text-slate-900">Certificate Signatories</h3>
					<p class="text-slate-600">Those who signed the official documents</p>
				</div>
				<div class="space-y-4">
					<div
						class="group rounded-xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Silas Raymond Pitt</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">John R. Collins</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Sol Wallant</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Donald R. Sherwood</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Frank Krulish</h4>
					</div>
					<div
						class="group rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-gray-50 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
					>
						<h4 class="font-semibold text-slate-900">Sidney Kearsing</h4>
					</div>
				</div>

				<div class="relative mt-8">
					<div
						class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-indigo-500/10 blur-xl"
					></div>
					<div
						class="relative rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 p-6 shadow-lg"
					>
						<div
							class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/30 to-transparent opacity-50"
						></div>
						<div class="relative">
							<div class="mb-3 flex items-center gap-2">
								<Award class="h-5 w-5 text-blue-600" />
								<h4 class="font-semibold text-slate-900">Official Certification</h4>
							</div>
							<p class="text-sm italic leading-relaxed text-slate-700">
								"IN WITNESS WHEREOF, we have made, subscribed and acknowledged this certificate in
								duplicate this 22nd, day of March, 1928."
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
