<!-- vue 입력시, vetur 플러그인이 자동으로 싱글파일 컴포넌트 기본 구조 생성 (<vue> with.default.vue) -->
<template>
	<div>
		<h1>로그인 페이지</h1>
		<!-- 3. 컴포넌트를 표시 -->
		<LoginForm></LoginForm>
	</div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'; // 1. 컴포넌트를 들고와서

export default {
	components: {
		LoginForm, // 2. 컴포넌트를 등록하고
	},
};
</script>

<style></style>
