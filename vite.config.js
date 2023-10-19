import { resolve } from 'path';
import { defineConfig } from 'vite';
import * as pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
