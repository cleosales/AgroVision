import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sobre: resolve(__dirname, 'sobre.html'),
        monitoramento: resolve(__dirname, 'monitoramento.html'),
        alertas: resolve(__dirname, 'alertas.html'),
        solucao: resolve(__dirname, 'solucao.html'),
        faq: resolve(__dirname, 'faq.html'),
        contato: resolve(__dirname, 'contato.html'),
        integrantes: resolve(__dirname, 'integrantes.html'),
      },
    },
  },
})