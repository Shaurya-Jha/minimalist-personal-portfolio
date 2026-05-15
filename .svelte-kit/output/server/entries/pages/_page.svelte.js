import { F as escape_html, P as attr, r as ensure_array_like } from "../../chunks/dev.js";
//#region src/components/certifications.svelte
function Certifications($$renderer) {
	const certifications = [
		{
			id: 1,
			name: "docker basics unleashed",
			issuedBy: "udemy",
			url: "https://www.udemy.com/certificate/UC-7bf91a8a-01e7-4491-818f-6b231b9f0e7f/"
		},
		{
			id: 2,
			name: "Complete Node.js Bootcamp: From Basics to Advance",
			issuedBy: "udemy",
			url: "https://www.udemy.com/certificate/UC-4a102aca-8901-4865-bde0-836c92d2de9f/"
		},
		{
			id: 3,
			name: "JavaScript Fundamentals to Advanced: Full-Stack Development",
			issuedBy: "udemy",
			url: "https://www.udemy.com/certificate/UC-55e76d7b-70d5-41a4-88d8-10ec1744c6a5/"
		},
		{
			id: 4,
			name: "The Complete PyTest Automation Course",
			issuedBy: "udemy",
			url: "https://www.udemy.com/certificate/UC-655635e7-ed19-4643-8b27-2bc293c94d6c/"
		},
		{
			id: 5,
			name: "TypeScript >> Fast Forward",
			issuedBy: "udemy",
			url: "https://www.udemy.com/certificate/UC-b588d4e6-3b44-4d9e-b21b-465a5a057858/"
		}
	];
	$$renderer.push(`<div class="w-full space-y-6"><h2 class="tracking-wider uppercase font-medium">Certifications</h2> <div class="space-y-3"><!--[-->`);
	const each_array = ensure_array_like(certifications);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let certificate = each_array[$$index];
		$$renderer.push(`<div class="leading-relaxed"><span class="font-medium capitalize text-base-content">`);
		if (certificate.url && certificate.url !== "/" && certificate.url !== "") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", certificate.url)} rel="external" class="underline underline-offset-4 hover:opacity-80 transition-opacity">${escape_html(certificate.name)}</a>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`${escape_html(certificate.name)}`);
		}
		$$renderer.push(`<!--]--></span> <span class="opacity-70 lowercase text-sm px-1">via</span> <span class="opacity-80 capitalize">${escape_html(certificate.issuedBy)}</span></div>`);
	}
	$$renderer.push(`<!--]--></div></div>`);
}
//#endregion
//#region src/components/experience.svelte
function Experience($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const experiences = [
			{
				id: 1,
				role: "full stack developer",
				company: "kackersoft",
				from: /* @__PURE__ */ new Date("2025-01-01"),
				to: "Present",
				responsibilities: [
					"Eliminated N+1 query bottlenecks by strategically applying Django ORM techniques (select_related and prefetch_related), resulting in a 2x to 4x improvement in API response times for critical endpoints.",
					"Shipped type-safe, performant web applications using React, Next.js, and TypeScript with a focus on modular architecture.",
					"Engineered custom Github Actions to automate CI/CD pipelines and software development workflows, reducing manual overhead and ensuring code quality.",
					"Built and managed robust backend systems using Node.js, Express and Bun, demonstrating adaptability across different runtimes and environments.",
					"Supervised software engineering interns, managing onboarding, conducting code reviews, and guiding technical project contributions."
				]
			},
			{
				id: 2,
				role: "django developer intern",
				company: "writeroo",
				from: /* @__PURE__ */ new Date("2024-07-01"),
				to: /* @__PURE__ */ new Date("2024-12-31"),
				responsibilities: [
					"Built, maintained and developed required RESTful APIs using Django and Django Rest Framework (DRF) for communication between front-end and back-end systems.",
					"Implemented comprehensive unit and integration testing using DRF’s APITestCase suites to ensure high code quality and system operability for core application features.",
					"Worked with Django ORM to manage database operations, including migrations, queries, and relationship handling.",
					"Participated in the full software development lifecycle (SDLC), contributing to feature planning and collaborating with senior developers to resolve production issues."
				]
			},
			{
				id: 3,
				role: "full stack developer intern",
				company: "trevita infotech",
				from: /* @__PURE__ */ new Date("2023-12-01"),
				to: /* @__PURE__ */ new Date("2024-04-1"),
				responsibilities: [
					"Collaborated on the development of RESTful APIs using Node.js and Express.js, assisting in schema design and data management across MongoDB and MySQL databases.",
					"Built and maintained dynamic, responsive user interfaces using React.js, focusing on creating reusable UI components and managing application state efficiently via Hooks and Context API.",
					"Connected front-end components with backend services by implementing asynchronous API data fetching (Axios/Fetch), ensuring smooth UI updates and handling edge-case errors."
				]
			}
		];
		function formatDateShort(data) {
			if (data instanceof Date) return new Intl.DateTimeFormat("en-US", {
				month: "short",
				year: "numeric"
			}).format(data);
			return data;
		}
		$$renderer.push(`<div class="w-full space-y-6"><h2 class="tracking-wider uppercase font-medium">Work Experience</h2> <div class="space-y-8"><!--[-->`);
		const each_array = ensure_array_like(experiences);
		for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
			let experience = each_array[$$index_1];
			$$renderer.push(`<div class="space-y-2"><div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"><h3 class="font-medium capitalize">${escape_html(experience.role)} <span class="text-sm font-normal lowercase px-0.5">at</span> <span class="capitalize">${escape_html(experience.company)}</span></h3> <p class="text-sm opacity-80 font-normal">${escape_html(formatDateShort(experience.from))} — ${escape_html(formatDateShort(experience.to))}</p></div> <ul class="text-md space-y-1.5 opacity-80 list-disc pl-4 marker:opacity-40"><!--[-->`);
			const each_array_1 = ensure_array_like(experience.responsibilities);
			for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
				let resp = each_array_1[i];
				$$renderer.push(`<li class="leading-relaxed">${escape_html(resp)}</li>`);
			}
			$$renderer.push(`<!--]--></ul></div>`);
		}
		$$renderer.push(`<!--]--></div></div>`);
	});
}
//#endregion
//#region src/components/freelance-projects.svelte
function Freelance_projects($$renderer) {
	const freelanceProjects = [{
		id: 1,
		name: "DeepCarTalk",
		url: "https://deepcartalk.com/",
		technologies: "Ruby, Ruby on Rails, Ember.js, Docker, AWS",
		description: ["Customized and extended the Discourse platform for client-specific workflows by developing custom plugins, UI enhancements, and feature integrations."]
	}];
	$$renderer.push(`<div class="w-full space-y-6"><h2 class="tracking-wider uppercase font-medium">Freelance Work</h2> <div class="space-y-6"><!--[-->`);
	const each_array = ensure_array_like(freelanceProjects);
	for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
		let project = each_array[$$index_1];
		$$renderer.push(`<div class="space-y-1.5"><h3 class="font-medium">`);
		if (project.url) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", project.url)} rel="external" class="underline underline-offset-4 hover:opacity-80 transition-opacity">${escape_html(project.name)}</a>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`${escape_html(project.name)}`);
		}
		$$renderer.push(`<!--]--></h3> <div class="space-y-2 mt-3 px-2">`);
		if (project.technologies) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p><span class="opacity-80">Tech:</span> ${escape_html(project.technologies)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (project.description) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<!--[-->`);
			const each_array_1 = ensure_array_like(project.description);
			for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
				let paragraph = each_array_1[$$index];
				$$renderer.push(`<p>${escape_html(paragraph)}</p>`);
			}
			$$renderer.push(`<!--]-->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div>`);
}
//#endregion
//#region src/components/introduction.svelte
function Introduction($$renderer) {
	$$renderer.push(`<div class="flex w-full flex-col items-center justify-between gap-4"><p>Full Stack Engineer with nearly 2 years of experience building scalable web applications using
		React, TypeScript, and Django. Specialized in backend performance optimization and API design,
		achieving up to 4x improvements in response times. Experienced in building end-to-end systems
		across frontend, backend, and deployment.</p> <p>I’m currently deep-diving into low-level systems - exploring software internals to build more
		performant, memory-efficient applications from the ground up.</p> <div class="flex mt-2 w-full items-center gap-2"><p>Connect with me</p> <p>-</p> <a rel="external" class="underline" href="https://www.github.com/Shaurya-Jha">github</a> <a rel="external" class="underline" href="https://www.linkedin.com/in/shaurya-jha-sj161">linkedin</a></div></div>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<div class="flex h-full w-full justify-center py-20"><div class="flex h-full w-2xl flex-col items-center gap-16"><div class="flex w-full flex-col items-center"><p class="text-md italic">"Keep it minimal, stay intellectually curious, and never stop optimizing."</p></div> `);
	Introduction($$renderer, {});
	$$renderer.push(`<!---->  `);
	Experience($$renderer, {});
	$$renderer.push(`<!----> `);
	Freelance_projects($$renderer, {});
	$$renderer.push(`<!----> `);
	Certifications($$renderer, {});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _page as default };
