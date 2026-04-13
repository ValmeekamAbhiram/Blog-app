import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/user-api": "http://localhost:5000",
      "/author-api": "http://localhost:5000",
      "/admin-api": "http://localhost:5000",
      "/auth": "http://localhost:5000",
    },
  },
})
