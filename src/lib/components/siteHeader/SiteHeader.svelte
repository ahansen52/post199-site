<script>
	import Button from '$components/ui/button/button.svelte';
	import SiteMainNav from './SiteNav.svelte';
	import SiteMainNavMenuToggleBtn from './SiteNavMenuToggleBtn.svelte';

	import logo270x79 from '$lib/assets/logo-270x79.png?enhanced';
	import logo307x90 from '$lib/assets/logo-307x90.png?enhanced';
</script>

<header class="fixed top-0 z-50 w-full border-b border-accent-foreground/10 bg-background">
	<div class="container flex items-center justify-between px-1 py-7 md:px-8">
		<Button href="/" variant="link" class="p-0">
			<enhanced:img
				src={logo307x90}
				alt="American Legion Post 199 Logo"
				width="307"
				height="90"
				class="hidden md:block"
			/>

			<enhanced:img
				src={logo270x79}
				alt="American Legion Post 199 Logo"
				width="270"
				height="79"
				class="block md:hidden"
			/>
		</Button>

		<div>
			<SiteMainNav />
			<SiteMainNavMenuToggleBtn />
		</div>
	</div>
</header>
