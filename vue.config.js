const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		// ESLint의 overlay를 꺼준다 -> 콘솔에서는 오류가 보이고 실제 웹 화면에서는 아무런 동작이 없음
		client: {
			// ESLint의 overlay를 꺼준다 -> 콘솔에서는 오류가 보이고 실제 웹 화면에서는 아무런 동작이 없음
			overlay: false, // ESLint의 overlay를 꺼준다 -> 콘솔에서는 오류가 보이고 실제 웹 화면에서는 아무런 동작이 없음
		},
	},
});
