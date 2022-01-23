import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({})],
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
                alias: {
                    '$lib': path.resolve('./src/lib'),
				}
			}
		},
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*'],
		},
	}
};

export default config;
