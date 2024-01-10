<template>
	<!-- 
    - 회원가입 마크업
    : label태그로 ID, PW, Alias 입력 창 생성
    : submit 타입의 button 생성 (type을 기재하지 않으면 submit이 기본 타입으로 설정된다)
    : v-on: = @
    : .prevent -> submit의 기본동작인 새로고침을 막아줌
    -->
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username"> id : </label>
					<input id="username" type="text" v-model="username" />
				</div>
				<div>
					<label for="password"> pw : </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<div>
					<label for="nickname"> nickname : </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<!-- disabled : 버튼 비활성화 (값이 입력되어야 활성화) -->
				<!-- disabled가 조건에 따라 실행되어야 할 때 'v-bind:disabled="true or false"' 사용 -->
				<!-- v-bind = : -->
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
				>
					회원 가입
				</button>
				<p>{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';

export default {
	// 회원가입 마크업의 input에 연결해서 사용하기 위해 data 생성 -> input 태그에 v-model 기입
	// vda 단축키로 자동생성 (Vue VSCode Snippets 플러그인)
	data() {
		return {
			// form values
			username: '',
			password: '',
			nickname: '',
			// log
			logMessage: '',
		};
	},
	// computed : 데이터의 변화에 맞게 자동으로 연산해주는 명령어
	computed: {
		// isFormValid ->  boolean 값을 return 하는 명령어
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},

	// form 태그와 연결되는 메서드 생성
	// button을 submit 타입으로 설정해두었기에 버튼을 활성화 시키면 submit 이벤트가 버블링되어 v-on:submit 이벤트로 수신
	methods: {
		// 회원가입 진행 후 발생되는 후속조치는 'register(userData).then().catch();' 로 진행할 수 있음
		// 더 간단한 방법으로 async + await 명령어 사용
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData); //ES6 Destructuring
			console.log(data.username);
			this.logMessage = `${data.username} 님이 가입되었습니다`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
