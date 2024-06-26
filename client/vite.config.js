import path from 'path'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@components': path.resolve(__dirname, './src/components'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@helpers': path.resolve(__dirname, './src/helpers'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@scss': path.resolve(__dirname, './src/scss')
		}
	}
})
