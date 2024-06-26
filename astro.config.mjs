import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'http://192.168.1.246:4321',
	integrations: [mdx(), sitemap()],
        output: 'server',
        adapter: node({
        mode: "standalone"
        })
});
