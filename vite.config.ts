import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({	include: '**/*.{tsx,ts,scss}'}), tsconfigPaths()],
  resolve: {
    alias: [
      {
      find: "@",
      replacement: path.resolve(__dirname, 'src')
    },
  ]
  },
})
