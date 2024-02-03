import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import config from './config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: config.KEY_LOCATION,
      cert: config.CERT_LOCATION
    }
  }
})
