import adapter from '@sveltejs/adapter-vercel';
import {mdsvex} from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions:['.svelte','.md'],
	preprocess:
	[
		mdsvex(
			{
				extensions:['.md']
			})
	],
};

export default config;


