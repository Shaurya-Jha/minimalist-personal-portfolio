import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => {
					if (filename.split(/[/\\]/).includes('node_modules')) return undefined;
					// 👇 ADD THIS LINE: Tells Svelte 5 to use legacy mode for MDsveX files
					if (filename.endsWith('.svx') || filename.endsWith('.md')) return false; 
					return true;
				}
	},
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
					base: process.env.NODE_ENV === 'production'
						? '/minimalist-personal-portfolio'
						: ''
				}
	},
	preprocess: [mdsvex({ extensions: ['.svx', '.md'], layout: path.resolve('./src/components/blog-layout.svelte') })],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
