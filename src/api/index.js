/*
App.vue에 직접적으로 axios를 import해도 무방하지만 가독성을 높이고 유지보수를 편하게 하기위해 
소스 내부에 api 폴더를 생성하고 index.js 파일로 관리한다 (백엔드의 역할과 구현을 나누는것과 같은 개념)
*/

import axios from 'axios';

function registerUser(userData) {
	const url = 'http://localhost:3000/signup';
	return axios.post(url, userData);
}

export { registerUser };
