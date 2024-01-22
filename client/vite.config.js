import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://huanamigo.github.io/Blach-Meister-Plates-DB/',
  plugins: [react()],
});
