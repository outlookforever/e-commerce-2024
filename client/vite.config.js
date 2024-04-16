import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: '/src/',
			components: '/src/components',
			routes: '/src/routes',
			pages: '/src/pages',
			assets: '/src/assets',
			scss: '/src/scss'
		}
	}
})
