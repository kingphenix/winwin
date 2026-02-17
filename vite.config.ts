import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-i18n', 'gsap']
        }
      }
    }
  },
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.mp4', '**/*.webm'],
})
