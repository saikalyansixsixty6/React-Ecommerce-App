import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/react-Ecommerce-App",
  build: {
    chunkSizeWarningLimit: 800, // Set your preferred limit here
  },
})
