import { defineConfig } from 'astro/config'
import htmx from 'astro-htmx'
import alpinejs from '@astrojs/alpinejs'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://tkitalishlah.projects.sngrcreative.xyz',
  integrations: [htmx(), alpinejs(), tailwind()],
})
