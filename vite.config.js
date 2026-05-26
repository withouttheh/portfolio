import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VITE_BASE_URL ?? '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        churn: 'churn.html',
        spaceX: 'spaceX.html',
      },
    },
  },
})
