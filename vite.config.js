import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ConsultARme/',
  build: {
    chunkSizeWarningLimit: 1000, // Ajustar el límite de advertencia de tamaño de fragmento
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Agrupar módulos de node_modules en un fragmento separado
          }
        },
      },
    },
  },
})
