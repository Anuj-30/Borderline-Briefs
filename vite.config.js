import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], server: {
    host: true,  // Allows the server to be accessible from any IP address
    allowedHosts: [
      '7c25-2409-40d1-ad-610c-5c5c-fd81-928d-e8bd.ngrok-free.app', // Add your ngrok URL here
    ]
  }
})
