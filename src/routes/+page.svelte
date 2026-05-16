<script>
	import Certifications from '../components/certifications.svelte';
	import Experience from '../components/experience.svelte';
	import FreelanceProjects from '../components/freelance-projects.svelte';
	// import Header from '../components/header.svelte';
	import Introduction from '../components/introduction.svelte';
	// import RecentLearning from '../components/recent-learning.svelte';
</script>

<div class="flex h-full w-full justify-center px-2 py-10">
	<div class="flex h-full w-2xl flex-col items-center gap-16">
		<!-- header -->
		<!-- <Header /> -->

		<div class="flex w-full flex-col items-center">
			<!-- <span class="font-medium">My Core Philosophy</span> -->
			<p class="text-md italic">
				"Keep it minimal, stay intellectually curious, and never stop optimizing."
			</p>
		</div>

		<!-- brief introduction -->
		<Introduction />

		<!-- currently learning -->
		<!-- <RecentLearning /> -->

		<!-- work experience -->
		<Experience />

		<!-- freelance projects -->
		<FreelanceProjects />

		<!-- certifications -->
		<Certifications />

		<!-- qualification -->
	</div>
</div>
