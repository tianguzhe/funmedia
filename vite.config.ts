import { defineConfig } from 'vite'
import { join } from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
      '@': join(__dirname, 'src'),
      '@consts': join(__dirname, 'src/consts'),
      '@routes': join(__dirname, 'src/routes'),
      '@store': join(__dirname, 'src/store')
    }
  },
  plugins: [react()],
})
