import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(() => {
  return {
    plugins: [react()],
    preview: {
      host: '0.0.0.0',
      port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
      strictPort: true,
      allowedHosts: [
        "pravminsk-fe.onrender.com", // Your Render domain
        "localhost", // For local development
      ],
    },
  };
});
