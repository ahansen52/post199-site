<script lang="ts">
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

<!-- Historical Timeline -->
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
				Our Historical Timeline
			</h2>
			<p class="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-slate-600">
				From humble beginnings in 1923 to historic leadership in 2025, follow the chronological
				journey of the Ladies Auxiliary Moscarella Unit 199 through over a century of dedicated
				service to veterans and community.
			</p>
		</div>

		<!-- Historical Events -->
		<div class="mx-auto max-w-4xl space-y-12">
			<!-- 1923 - Foundation & Charter Members -->
			<div class="rounded-xl border border-slate-300 bg-white p-8 shadow-lg">
				<div class="mb-6 flex items-center gap-3">
					<div class="rounded-full border-2 border-slate-300 p-3">
						<Calendar class="h-8 w-8 text-slate-600" />
					</div>
					<div>
						<h3 class="text-2xl font-bold text-slate-900">March 15, 1923</h3>
						<h4 class="text-lg font-semibold text-slate-600">Foundation</h4>
					</div>
				</div>
				<p class="mb-6 leading-relaxed text-slate-700">
					The Ladies Auxiliary for Moscarella Unit 199 was organized at a meeting held at the Spring
					Valley Hook and Ladder facility. Mrs. Eloise May Levine was elected as the first
					president.
				</p>

				<!-- Charter Members -->
				<div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
					<h5 class="mb-4 flex items-center gap-2 font-bold text-slate-900">
						<Crown class="h-5 w-5 text-slate-600" />
						Charter Members
					</h5>
					<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<div class="rounded-lg border border-slate-300 bg-white p-3">
							<div class="flex items-center gap-2">
								<Crown class="h-4 w-4 text-slate-600" />
								<div>
									<p class="font-semibold text-slate-900">Mrs. Eloise May Levine</p>
									<p class="text-xs text-slate-600">First President</p>
								</div>
							</div>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Antonetta Moscarella</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Sayde Brill</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Marnice Sanderson</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Edna Wallace</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Grace Rosenbrock</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Clara Benjamin</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Alma Grahn</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Mary Sherwood</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Kate D. Moles</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Martha Cureton</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Anna Voorhis</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Ms. Carrie Schaefer</p>
						</div>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="text-sm font-medium text-slate-900">Mrs. Nora Moles</p>
						</div>
					</div>
				</div>
			</div>

			<!-- 1928 - Official Incorporation -->
			<div class="rounded-xl border border-slate-300 bg-white p-8 shadow-lg">
				<div class="mb-6 flex items-center gap-3">
					<div class="rounded-full border-2 border-slate-300 p-3">
						<Award class="h-8 w-8 text-slate-600" />
					</div>
					<div>
						<h3 class="text-2xl font-bold text-slate-900">March 22, 1928</h3>
						<h4 class="text-lg font-semibold text-slate-600">Official Incorporation</h4>
					</div>
				</div>
				<p class="mb-6 leading-relaxed text-slate-700">
					The Department of the American Legion Auxiliary of the State of New York officially
					incorporated the Anthony Moscarella Unit #199 of The American Legion.
				</p>

				<div class="grid gap-6 md:grid-cols-2">
					<!-- Post Leadership -->
					<div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
						<h5 class="mb-4 flex items-center gap-2 font-bold text-slate-900">
							<Users class="h-5 w-5 text-slate-600" />
							Post Leadership
						</h5>
						<div class="space-y-2">
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">James Cureton</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Raymond Silas Pitt</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Harry Ball</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">John R. Collins</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Sol Wallant</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Donald R. Sherwood</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Frank Krulish</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">R. I. Stelley</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Mackey Rackow</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">George Sanderson</p>
							</div>
						</div>
					</div>

					<!-- Certificate Signatories -->
					<div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
						<h5 class="mb-4 flex items-center gap-2 font-bold text-slate-900">
							<Award class="h-5 w-5 text-slate-600" />
							Certificate Signatories
						</h5>
						<div class="space-y-2">
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Silas Raymond Pitt</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">John R. Collins</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Sol Wallant</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Donald R. Sherwood</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Frank Krulish</p>
							</div>
							<div class="rounded border border-slate-200 bg-white p-2">
								<p class="text-sm font-medium text-slate-900">Sidney Kearsing</p>
							</div>
						</div>
						<div class="mt-4 rounded border border-slate-200 bg-white p-3">
							<p class="text-xs italic text-slate-700">
								"IN WITNESS WHEREOF, we have made, subscribed and acknowledged this certificate in
								duplicate this 22nd, day of March, 1928."
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Charter Turned In Period -->
			<div class="rounded-xl border border-slate-300 bg-white p-8 shadow-lg">
				<div class="mb-6 flex items-center gap-3">
					<div class="rounded-full border-2 border-slate-300 p-3">
						<Users class="h-8 w-8 text-slate-600" />
					</div>
					<div>
						<h3 class="text-2xl font-bold text-slate-900">Mid-20th Century</h3>
						<h4 class="text-lg font-semibold text-slate-600">Charter Turned In</h4>
					</div>
				</div>
				<p class="leading-relaxed text-slate-700">
					The unit turned the charter in as members started passing and the unit got smaller. This
					period marked a hiatus in the auxiliary's active operations due to declining membership
					over the years.
				</p>
			</div>

			<!-- 2019 - Regulation Changes -->
			<div class="rounded-xl border border-slate-300 bg-white p-8 shadow-lg">
				<div class="mb-6 flex items-center gap-3">
					<div class="rounded-full border-2 border-slate-300 p-3">
						<Award class="h-8 w-8 text-slate-600" />
					</div>
					<div>
						<h3 class="text-2xl font-bold text-slate-900">2019</h3>
						<h4 class="text-lg font-semibold text-slate-600">Membership Expansion</h4>
					</div>
				</div>
				<p class="leading-relaxed text-slate-700">
					The National American Legion Auxiliary changed regulations on membership. Female Veterans
					are now allowed to join under their own eligibility, and their male spouses are allowed to
					join under the eligibility of their wife as Veteran.
				</p>
			</div>

			<!-- 2024 - Reactivation -->
			<div class="rounded-xl border border-slate-300 bg-white p-8 shadow-lg">
				<div class="mb-6 flex items-center gap-3">
					<div class="rounded-full border-2 border-slate-300 p-3">
						<Users class="h-8 w-8 text-slate-600" />
					</div>
					<div>
						<h3 class="text-2xl font-bold text-slate-900">January 2024</h3>
						<h4 class="text-lg font-semibold text-slate-600">Unit Reactivation</h4>
					</div>
				</div>
				<p class="mb-6 leading-relaxed text-slate-700">
					Maureen Morgan, a Veteran, reactivated Unit 199 following the 2019 National American
					Legion Auxiliary regulation changes. The unit now has 17 active members.
				</p>

				<div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
					<h5 class="mb-3 flex items-center gap-2 font-bold text-slate-900">
						<Star class="h-5 w-5 text-slate-600" />
						Key Leaders
					</h5>
					<div class="space-y-2">
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="font-semibold text-slate-900">Maureen Morgan</p>
							<p class="text-sm text-slate-600">
								Veteran & Reactivation Leader - Dual member of Post 199 as Veteran and Auxiliary
								member
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- 2025 - Historic Achievement -->
			<div class="rounded-xl border border-slate-300 bg-white p-8 shadow-lg">
				<div class="mb-6 flex items-center gap-3">
					<div class="rounded-full border-2 border-slate-300 p-3">
						<Trophy class="h-8 w-8 text-slate-600" />
					</div>
					<div>
						<h3 class="text-2xl font-bold text-slate-900">July 18, 2025</h3>
						<h4 class="text-lg font-semibold text-slate-600">Historic Achievement</h4>
					</div>
				</div>
				<p class="mb-6 leading-relaxed text-slate-700">
					Maureen Morgan was sworn in as the Department of New York American Legion Auxiliary
					President - the first dual member from Rockland County to hold this position in history.
				</p>

				<div class="grid gap-6 md:grid-cols-2">
					<!-- Maureen's Achievement -->
					<div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
						<h5 class="mb-3 flex items-center gap-2 font-bold text-slate-900">
							<Crown class="h-5 w-5 text-slate-600" />
							Department President
						</h5>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="font-semibold text-slate-900">Maureen Morgan</p>
							<p class="text-sm text-slate-600">
								First dual member from Rockland County as Department President for NY State
							</p>
						</div>
						<p class="mt-3 text-xs text-slate-600">
							The last Department President from Rockland County was Mrs. Katherine Johnson
							(1962-1963) - 62 years ago.
						</p>
					</div>

					<!-- Current Unit Leadership -->
					<div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
						<h5 class="mb-3 flex items-center gap-2 font-bold text-slate-900">
							<Users class="h-5 w-5 text-slate-600" />
							Unit Leadership
						</h5>
						<div class="rounded-lg border border-slate-200 bg-white p-3">
							<p class="font-semibold text-slate-900">Mr. Ike Bosford</p>
							<p class="text-sm text-slate-600">
								Unit President - First male president in unit history
							</p>
						</div>
						<p class="mt-2 text-xs text-slate-600">
							Also serves as SAL Detachment Historian for Department of NY. Dual member through his
							wife Maureen's veteran eligibility.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
