<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username"> id: </label>
					<input id="username" type="text" v-model="username" />
					<p calss="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password"> pw: </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<!-- disabled : 버튼 비활성화 (값이 입력되어야 활성화) -->
				<!-- disabled가 조건에 따라 실행되어야 할 때 'v-bind:disabled="true or false"' 사용 -->
				<!-- v-bind = : -->
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
				>
					로그인
				</button>
				<p class="log">{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			// form values
			username: '',
			password: '',
			// log
			logMessage: '',
		};
	},
	// computed -> 데이터의 변화에 따라 자동으로 계산을 해주는 연산식
	computed: {
		// isFormValid -> boolean 값을 return
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				// 비즈니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				console.log(data.token);
				this.$store.commit('setToken', data.token);
				this.$store.commit('setUsername', data.user.username);
				// this.logMessage = `${data.user.username} 님 환영합니다`; -> 로그인 하면 메인페이지로 이동하기에 주석처리
				// 로그인 이후 메인 페이지로 이동 구현 (javascript)
				// vue-router programmatic navigation
				this.$router.push('/main');
				// this.initForm();
			} catch (error) {
				// 에러 핸들링 할 코드
				console.log(error.response.data);
				this.logMessage = error.response.data;
				// this.initForm();
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style>
.btn {
	color: white;
}
</style>
