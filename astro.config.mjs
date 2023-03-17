import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import alpine from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true,
	},
	build: {
		format: 'file',
	},
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: true,
			},
		}),
		alpine(),
		compress(),
		mdx(),
		sitemap(),
	],
	vite: {
		build: {
			rollupOptions: {
				output: {
					/* entryFileNames: 'entry.[hash].js',
               chunkFileNames: 'chunks/chunk.[hash].js', */
					chunkFileNames: 'js/entry.[hash].js',
					entryFileNames: 'chunks/chunk.[hash].js',
					assetFileNames: (assetInfo) => {
						console.log(assetInfo);
						return '[name]-[hash][extname]';
					},
				},
			},
		},
	},
});
