module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	rules: {
		'no-console': 'off', // console 사용하였을 경우 에러가 나도 eslint에서 console->off 설정 해두었기에 컴파일 완료됨.
		// "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		// "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

		// prettier -> 개행, 문자열 정리 (문자열 80개 넘어가면 자동 개행), 큰따옴표 - 따옴표 정하기 등등
		// 코드를 일정하게 작성할 수 있게 규칙을 정하는 플러그인

		// ESLint 안에 prettier 선언하는 이유는 ESLint가 우선적으로 작동 된 후에 prettier가 작동되어야 하기 때문
		// eslintrs.js 파일처럼  '.prettierrc' 로 파일 생성 가능
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
};
