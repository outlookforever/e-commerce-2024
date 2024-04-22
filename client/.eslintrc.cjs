module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	settings: {
		react: { version: '18.2' }
	},
	plugins: ['react-refresh'],
	rules: {
		'react/jsx-no-target-blank': 'off',
		'eslint-disable-next-line no-unused-vars': 'true',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		'prettier/prettier': 0,
		'no-console': 1
	}
}
