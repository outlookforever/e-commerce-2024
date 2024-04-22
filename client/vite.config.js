import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@components': path.resolve(__dirname, './src/components'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@scss': path.resolve(__dirname, './src/scss')
		}
	}
})
