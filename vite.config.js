import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tr/', // replace with your repository name
  build: {
    outDir: 'build' // specify the output directory as 'build'
  },
  plugins: [react()],
})
