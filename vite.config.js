import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], server: {
    host: true,  // Allows the server to be accessible from any IP address
    allowedHosts: [
      '329c-2409-40d1-10c5-c55f-74a1-7feb-625e-8dd8.ngrok-free.app', // Add your ngrok URL here
    ]
  }
})
