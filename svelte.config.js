import adapter from '@sveltejs/adapter-auto';
import { preprocess_style } from './scripts/postcss.preprocessors.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: { style: preprocess_style },
};

export default config;
