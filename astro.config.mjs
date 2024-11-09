import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    preact({
      compat: true,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        'react': 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat', // Must be below test-utils
        'react/jsx-runtime': 'preact/jsx-runtime',
      },
    },
  },
})
