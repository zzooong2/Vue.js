<template>
	<header>
		<div>
			<router-link to="/" class="logo">
				TIL
				<span class="isUserLogin">by {{ $store.state.username }}</span>
			</router-link>
		</div>
		<div class="navigations">
			<!-- 분기처리 1 -->
			<!-- template 표현식 간결하게 하기 위해 isUserLogin 이라는 computed 를 생성하여 연결 -->
			<!-- v-if="$store.getters.username" -->
			<template v-if="isUserLogin">
				<!-- javascript:; => 기본 <a>의 동작을 막는 코드 -->
				<a href="javascript:;" @click="logoutUser" class="logout-button">
					Logout
				</a>
			</template>
			<!-- 분기처리 2 -->
			<template v-else>
				<router-link to="/login">로그인</router-link>
				<router-link to="/signup">회원가입</router-link>
			</template>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logoutUser() {
			this.$store.commit('clearUsername'); // clearUsername을 호출하면서 로그아웃 기능
			this.$router.push('/login'); // 로그아웃 이후 로그인 페이지로 이동
		},
	},
};
</script>

<style scoped>
.username {
	color: white;
}
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #927dfc;
	z-index: 2;
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
	color: #dedede;
	font-size: 18px;
}
a.logo {
	font-size: 30px;
	font-weight: 900;
	color: white;
}
.logo > span {
	font-size: 14px;
	font-weight: normal;
}
.navigations a {
	margin-left: 10px;
}
.fixed {
	position: fixed;
	top: 0;
	width: 100%;
}
.logout-button {
	font-size: 14px;
}
a.router-link-exact-active {
	color: white;
	font-weight: bold;
}
</style>
