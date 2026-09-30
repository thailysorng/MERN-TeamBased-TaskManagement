import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  server: {
    port: 5173,
    // this proxy is only used if ur VITE_API_URL in .env is empty
    proxy: {
      "/api": {
        target: "http://merntest-server-container:8800",
        changeOrigin: true
      },
    }
  }
})
