import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', 
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'; // Importe o módulo 'path'
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: './',
//   resolve: {
//     alias: {
//       '@/': path.resolve(__dirname, './src'), // Alias para a pasta 'src'
//     },
//   },
// });