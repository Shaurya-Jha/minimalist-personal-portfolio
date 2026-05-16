<script lang="ts">
	interface Experience {
		id: number;
		role: string;
		company: string;
		from: Date;
		to: Date | 'Current';
		responsibilities: string[];
	}

	const experiences: Experience[] = [
		{
			id: 1,
			role: 'full stack developer',
			company: 'kackersoft',
			from: new Date('2025-01-01'),
			to: 'Current',
			responsibilities: [
				'Eliminated N+1 query bottlenecks by strategically applying Django ORM techniques (select_related and prefetch_related), resulting in a 2x to 4x improvement in API response times for critical endpoints.',
				'Shipped type-safe, performant web applications using React, Next.js, and TypeScript with a focus on modular architecture.',
				'Engineered custom Github Actions to automate CI/CD pipelines and software development workflows, reducing manual overhead and ensuring code quality.',
				'Built and managed robust backend systems using Node.js, Express and Bun, demonstrating adaptability across different runtimes and environments.',
				'Supervised software engineering interns, managing onboarding, conducting code reviews, and guiding technical project contributions.'
			]
		},
		{
			id: 2,
			role: 'django developer intern',
			company: 'writeroo',
			from: new Date('2024-07-01'),
			to: new Date('2024-12-31'),
			responsibilities: [
				'Built, maintained and developed required RESTful APIs using Django and Django Rest Framework (DRF) for communication between front-end and back-end systems.',
				"Implemented comprehensive unit and integration testing using DRF's APITestCase suites to ensure high code quality and system operability for core application features.",
				'Worked with Django ORM to manage database operations, including migrations, queries, and relationship handling.',
				'Participated in the full software development lifecycle (SDLC), contributing to feature planning and collaborating with senior developers to resolve production issues.'
			]
		},
		{
			id: 3,
			role: 'full stack developer intern',
			company: 'trevita infotech',
			from: new Date('2023-12-01'),
			to: new Date('2024-04-1'), // Fixed standard date format safely
			responsibilities: [
				"Collaborated on the development of RESTful APIs using Node.js and Express.js, assisting in schema design and data management across MongoDB and MySQL databases.",
				'Built and maintained dynamic, responsive user interfaces using React.js, focusing on creating reusable UI components and managing application state efficiently via Hooks and Context API.',
				'Connected front-end components with backend services by implementing asynchronous API data fetching (Axios/Fetch), ensuring smooth UI updates and handling edge-case errors.'
			]
		}
	];

	function formatDateShort(data: Date | string) {
		if (data instanceof Date) {
			const formatter = new Intl.DateTimeFormat('en-US', {
				month: 'short',
				year: 'numeric'
			});
			return formatter.format(data);
		}
		return data; // Returns 'Present' safely
	}
</script>

<div class="w-full space-y-6">
	<!-- Section Header -->
	<h2 class="tracking-wider uppercase font-medium">
		Work Experience
	</h2>

	<!-- Experience List -->
	<div class="space-y-8">
		{#each experiences as experience (experience.id)}
			<div class="space-y-2">
				<!-- Role & Company Layout -->
				<div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
					<h3 class="font-medium capitalize">
						{experience.role} 
						<span class="text-sm font-normal lowercase px-0.5">at</span> 
						<span class="capitalize">{experience.company}</span>
					</h3>
					
					<!-- Timeline Duration -->
					<p class="text-sm opacity-80 font-normal">
						{formatDateShort(experience.from)} - {formatDateShort(experience.to)}
					</p>
				</div>

				<!-- Responsibilities Bullet Points -->
				<ul class="text-md space-y-1.5 opacity-80 list-disc pl-4 marker:opacity-40">
					{#each experience.responsibilities as resp, i (i)}
						<li class="leading-relaxed">{resp}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>