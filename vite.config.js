import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Borderline-Briefs",
  server: {
    host: true,  // Allows the server to be accessible from any IP address
    allowedHosts: [
      '8d5e-2409-40d1-10c5-c55f-8c30-9d26-d5d0-4700.ngrok-free.app', // Add your ngrok URL here
    ]
  }
})
