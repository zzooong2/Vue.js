<!-- vue 입력시, vetur 플러그인이 자동으로 싱글파일 컴포넌트 기본 구조 생성 (<vue> with.default.vue) -->
<template>
	<div>
		<h1>회원 가입 페이지</h1>
		<!-- 비즈니스 로직이 많이 연계되는 것 보다 Form 작성해서 연동시켜주는것이 좋다 -->
		<SignupForm></SignupForm>
	</div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
	components: {
		SignupForm,
	},
};
</script>

<style></style>
