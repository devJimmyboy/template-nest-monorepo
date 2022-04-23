import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.API_PORT || 3001}`,
        changeOrigin: true,
      },
      '/socket.io': {
        target: `http://localhost:${process.env.API_PORT || 3001}`,
        changeOrigin: true,
        ws: true,
      },
    },
  },
})
