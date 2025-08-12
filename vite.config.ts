import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    preview: {
      port: parseInt(env.PORT) || 3000,
      host: '0.0.0.0'
    }
  }
});
