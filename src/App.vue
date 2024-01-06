<template>
	<div>
		<!-- 파스칼 케이스로 컴포넌트 명 작성 -->
		<!-- AppHeader의 내용이 표기됨 -->
		<AppHeader></AppHeader>
		<!-- url 변경 되었을 때 페이지 컴포넌트가 떠야하는 영역 -->
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
