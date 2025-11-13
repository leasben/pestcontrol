import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', 
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), 
        team: resolve(__dirname, 'our-team.html'),
        responsibleInvesting: resolve(__dirname, 'responsible-investing.html'),
        about: resolve(__dirname, 'about-us.html'),
        funds: resolve(__dirname, 'funds.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

