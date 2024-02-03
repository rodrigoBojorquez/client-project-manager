import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  server: {
    https: {
      key: "C:/Windows/System32/cert.key",
      cert: "C:/Windows/System32/cert.crt"
    }
  }
})
