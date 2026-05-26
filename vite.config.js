import { defineConfig } from 'vite'

export default defineConfig({
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
