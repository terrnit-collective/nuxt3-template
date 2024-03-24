module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
	  parser: {
			ts: "@typescript-eslint/parser"
	  }
	},
	env: {
	  node: true,
	  browser: true
	},
	extends: [
	  "plugin:vue/vue3-recommended"
	],
	rules: {
	  "no-trailing-spaces": ["warn"],
	  "prefer-promise-reject-errors": "off",
	  "vue/no-v-html": "off",
	  "no-trailing-spaces": ["warn"],
	  "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
	  "vue/multi-word-component-names": ["error", {
			ignores: ["error", "Error"]
	  }]
	},
	ignorePatterns: ['dist', 'node_modules', 'build', 'coverage', 'docs', 'test'],
	overrides: [
	  {
			files: ["components/**/**/*.vue", "{js,ts,jsx}"],
			rules: { "vue/multi-word-component-names": "off" }
	  }
	]
}