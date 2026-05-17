<script lang="ts">
	interface Certificate {
		id: number;
		name: string;
		issuedBy: string;
		url?: string;
		responsibilities?: string[];
	}

	const certifications: Certificate[] = [
		{
			id: 1,
			name: 'docker basics unleashed',
			issuedBy: 'udemy',
			url: 'https://www.udemy.com/certificate/UC-7bf91a8a-01e7-4491-818f-6b231b9f0e7f/'
		},
		{
			id: 2,
			name: 'Complete Node.js Bootcamp: From Basics to Advance',
			issuedBy: 'udemy',
			url: 'https://www.udemy.com/certificate/UC-4a102aca-8901-4865-bde0-836c92d2de9f/'
		},
		{
			id: 3,
			name: 'JavaScript Fundamentals to Advanced: Full-Stack Development',
			issuedBy: 'udemy',
			url: 'https://www.udemy.com/certificate/UC-55e76d7b-70d5-41a4-88d8-10ec1744c6a5/'
		},
		{
			id: 4,
			name: 'The Complete PyTest Automation Course',
			issuedBy: 'udemy',
			url: 'https://www.udemy.com/certificate/UC-655635e7-ed19-4643-8b27-2bc293c94d6c/'
		},
		{
			id: 5,
			name: 'TypeScript >> Fast Forward',
			issuedBy: 'udemy',
			url: 'https://www.udemy.com/certificate/UC-b588d4e6-3b44-4d9e-b21b-465a5a057858/'
		},
	];
</script>

<div class="w-full space-y-6">
	<!-- Section Header -->
	<h2 class="tracking-wider uppercase font-medium">
		Certifications
	</h2>

	<!-- Certifications List -->
	<div class="space-y-3 ml-2">
		{#each certifications as certificate (certificate.id)}
			<div class="leading-relaxed">
				<!-- Certificate Name with conditional link formatting -->
				<span class="font-medium capitalize text-base-content">
					{#if certificate.url && certificate.url !== '/' && certificate.url !== ''}
						<!-- <a href={certificate.url} rel="external" class="underline underline-offset-4 hover:opacity-80 transition-opacity">
							{certificate.name}
						</a> -->
						<a href={certificate.url} rel="external" class="hover:opacity-80 transition-opacity">
							{certificate.name}
						</a>
					{:else}
						{certificate.name}
					{/if}
				</span>

				<!-- Issuing Body -->
				<!-- <span class="opacity-70 lowercase text-sm px-1">via</span>
				<span class="opacity-80 capitalize">{certificate.issuedBy}</span> -->
			</div>
		{/each}
	</div>
</div>