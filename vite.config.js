import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  build: {
    rollupOptions: {
      // Remove react-icons from external (let Vite bundle it)
      external: [] 
    }
  }
});
