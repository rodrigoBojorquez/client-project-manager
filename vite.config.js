import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import config from './config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: "C:/Users/rbojo/OneDrive/Escritorio/certificados/cert.key",
      cert: "C:/Users/rbojo/OneDrive/Escritorio/certificados/cert.crt"
    }
  }
})
