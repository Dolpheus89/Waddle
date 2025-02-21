import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
	base: "/Waddle/",
	build: {
		cssCodeSplit: false,
		lib: {
			entry: "./src/lib/index.ts",
			name: "Waddle",
			fileName: (format) => `waddle.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				manualChunks: {
					vendor: ["react", "react-dom"],
				},
			},
		},
	},
	optimizeDeps: {
		include: ["@ducklabs/waddle"],
		force: true,
	},
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "/src"),
			"@style": path.resolve(__dirname, "/src/lib/styles/global.scss"),
		},
	},
});
