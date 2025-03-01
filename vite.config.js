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
        about: resolve(__dirname, 'about.html'),
        websiteDesign: resolve(__dirname, 'website-deisgn.html'),
        services: resolve(__dirname, 'services.html'),
        wordpressDevelopment: resolve(__dirname, 'wordpress-development.html'),
        articles: resolve(__dirname, 'articles.html'),
        contact: resolve(__dirname, 'contact.html'),
        singlePosts: resolve(__dirname, 'single-posts.html'),
        individualSectors: resolve(__dirname, 'individual-sectors.html'),
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

