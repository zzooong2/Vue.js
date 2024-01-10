// 로그인, 회원가입과 관련된 API 파일
import { instance } from './index';

// 회원가입 API
function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);
	// 위 2줄보다 instance로 고정된 url을 선언하고 코드를 깔끔하게 선언하는것이 좋은 코딩하는 방법
	return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
	return instance.post('login', userData);
}

export { registerUser, loginUser };
