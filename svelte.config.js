import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			trailingSlash: 'always'
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};
