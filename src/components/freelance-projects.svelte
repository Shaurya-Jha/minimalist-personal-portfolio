<script lang="ts">
	interface FreelanceProject {
		id: number;
		name: string;
		url?: string;
		technologies?: string;
		description?: string[];
	}

	const freelanceProjects: FreelanceProject[] = [
		{
			id: 1,
			name: 'DeepCarTalk',
			url: 'https://deepcartalk.com/',
			technologies: 'Ruby, Ruby on Rails, Ember.js, Docker, AWS',
			description: [
				'Customized and extended the Discourse platform for client-specific workflows by developing custom plugins, UI enhancements, and feature integrations.'
			]
		}
	];
</script>

<div class="w-full space-y-6">
	<!-- Section Header -->
	<h2 class="tracking-wider uppercase font-medium">
		Freelance Work
	</h2>

	<!-- Projects List -->
	<div class="space-y-6">
		{#each freelanceProjects as project (project.id)}
			<div class="space-y-1.5">
				<!-- Project Name / Link -->
				<h3 class="font-medium">
					{#if project.url}
						<a href={project.url} rel="external" class="underline underline-offset-4 hover:opacity-80 transition-opacity">
							{project.name}
						</a>
					{:else}
						{project.name}
					{/if}
				</h3>

				<!-- Project Details -->
				<div class="space-y-2 mt-3 px-2">
					{#if project.technologies}
						<p><span class="opacity-80">Tech:</span> {project.technologies}</p>
					{/if}
					
					{#if project.description}
						{#each project.description as paragraph (paragraph)}
							<p>{paragraph}</p>
						{/each}
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>