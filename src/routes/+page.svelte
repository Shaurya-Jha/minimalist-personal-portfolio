<script>
	import Certifications from '../components/certifications.svelte';
	import Divider from '../components/divider.svelte';
	import Experience from '../components/experience.svelte';
	import FreelanceProjects from '../components/freelance-projects.svelte';
	import Introduction from '../components/introduction.svelte';

	// Import base to keep your GitHub Pages path safe
	import { base } from '$app/paths';

	// 1. Fetch routes eagerly
	const routes = import.meta.glob('./blog/*/*.svx', { eager: true });

	// 2. Build the links array cleanly without breaking string compilation
	const links = Object.entries(routes).map(([filepath, module]) => {
		// Example filepath: "./blog/my-first-post/+page.svx"
		// We split by folders, grab the specific folder name, and construct a clean URL path
		const pathSegments = filepath.split('/');
		const postFolder = pathSegments[pathSegments.length - 2]; // Gets 'my-first-post'

		return {
			href: `${base}/blog/${postFolder}`,
			title: module.metadata?.title || 'Untitled Post'
		};
	});
</script>

<div class="flex h-full w-full justify-center px-4 py-10">
	<!-- Changed w-2xl to w-full max-w-2xl -->
	<div class="flex h-full w-full max-w-2xl flex-col items-center gap-16">
		<Introduction />
		<Divider />
		<Experience />
		<Divider />
		<FreelanceProjects />
		<Divider />
		<Certifications />
		<Divider />

		<!-- blogs -->
		<div class="flex w-full flex-col gap-4">
			<h2 class="font-medium tracking-wider uppercase">articles</h2>
			<ul class="ml-2 space-y-1">
				{#each links as { href, title } (href)}
					<li class="underline-offset-2 hover:underline"><a {href}>{title}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</div>
