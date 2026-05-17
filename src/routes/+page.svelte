<script>
	import Certifications from '../components/certifications.svelte';
	import Divider from '../components/divider.svelte';
	import Experience from '../components/experience.svelte';
	import FreelanceProjects from '../components/freelance-projects.svelte';
	import Introduction from '../components/introduction.svelte';

	// 1. Fetch your markdown/svx routes
	const routes = import.meta.glob('./blog/*/*.svx', { eager: true });

	// 2. Clean up the paths so they map to clean URLs
	const links = Object.entries(routes).map(([name, { metadata }]) => {
		// This removes the leading '.' and trailing '/+page.svx'
		const cleanHref = name
			.replace(/^\./, '') // Removes the starting dot if it exists
			.replace(/\/\+page\.svx$/, ''); // Removes '/+page.svx' from the end

		return {
			href: cleanHref,
			title: metadata?.title || 'Untitled Post'
		};
	});

	// console.log('Fixed links: ', links);
</script>

<div class="flex h-full w-full justify-center py-10">
	<div class="flex h-full w-2xl flex-col items-center gap-16">
		<!-- header -->
		<!-- <Header /> -->

		<!-- <div class="flex w-full flex-col items-center">
			<p class="text-md italic">
				"Keep it minimal, stay intellectually curious, and never stop optimizing."
			</p>
		</div> -->

		<!-- brief introduction -->
		<Introduction />

		<Divider />

		<!-- currently learning -->
		<!-- <RecentLearning /> -->

		<!-- work experience -->
		<Experience />

		<Divider />

		<!-- freelance projects -->
		<FreelanceProjects />

		<Divider />

		<!-- certifications -->
		<Certifications />

		<Divider />

		<!-- blogs -->
		<div class="flex w-full flex-col gap-4">
			<!-- Section Header -->
			<h2 class="font-medium tracking-wider uppercase">articles</h2>
			
			<ul class="ml-2 space-y-1">
				{#each links as { href, title } (href)}
					<li class="hover:underline underline-offset-2"><a {href} rel="external">{title}</a></li>
				{/each}
			</ul>
		</div>

		<!-- qualification -->
	</div>
</div>
