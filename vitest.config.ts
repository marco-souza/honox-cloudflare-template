import { defineConfig } from "vite";

export default defineConfig({
  test: {
    exclude: ["dist", "node_modules", ".wrangler", "e2e"],
  },
});
