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
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
        geyserReplacement: resolve(__dirname, 'geyser-replacement.html'),
        drainCleaning: resolve(__dirname, 'drain-cleaning.html'),
        residentialPlumbing: resolve(__dirname, 'residential-plumbing.html'),
        commercialPlumbing: resolve(__dirname, 'commercial-plumbing.html'),
        remodellingRenovations: resolve(__dirname, 'remodelling-renovations.html'),
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

