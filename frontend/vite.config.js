import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({server: {
  // to fix hot reloading cause vite is a biatch
  watch: {
    usePolling: true,
  },
},
  plugins: [react()],
})
