<script>
	let { children } = $props();
</script>

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

	<!-- Content -->
	<div class="relative z-10 pb-16 pt-40">
		<div class="container mx-auto">
			<div class="mx-auto max-w-3xl text-center">
				<div
					class="mb-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm"
				>
					<span class="text-sm font-medium tracking-wide text-white/90">Established 1919</span>
				</div>

				<h1 class="text-5xl font-bold tracking-tight text-white">Our History</h1>

				<div
					class="mx-auto mb-6 mt-4 h-0.5 w-24 rounded bg-gradient-to-r from-red-400 via-red-500 to-red-400"
				></div>

				<p class="mt-6 max-w-3xl text-center text-xl text-white/80">
					Explore the history of American Legion Post 199 through decades of service, dedication,
					and commitment to our veterans and community.
				</p>

				<!-- Tabs slot -->
				<div class="mx-auto mt-12 w-full max-w-md">
					{@render children()}
				</div>
			</div>
		</div>
	</div>
</section>
