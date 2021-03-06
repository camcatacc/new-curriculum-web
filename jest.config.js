module.exports = {
	collectCoverageFrom: [
		"components/**/*.{js,jsx,ts,tsx}",
		"pages/**/*.{js,jsx,ts,tsx}",
		"!pages/_app.tsx",
		"!pages/_document.tsx",
		"redux/**/*.{js,jsx,ts,tsx}",
		"services/**/*.{js,jsx,ts,tsx}",
		"utils/**/*.{js,jsx,ts,tsx}",
		"!utils/createEmotionCache.ts",
		"!utils/hooks/**/*.{ts,tsx}",
		"!**/*.d.ts"
	],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	moduleNameMapper: {
		/* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
		"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

		// Handle CSS imports (without CSS modules)
		"^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

		/* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
		"^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__mocks__/fileMock.js",

		"^@/components/(.*)$": "<rootDir>/components/$1"
	},
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
	testEnvironment: "jsdom",
	transform: {
		/* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
		"^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }]
	},
	transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
	moduleDirectories: ["node_modules", "<rootDir>"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};
