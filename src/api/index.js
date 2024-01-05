/*
App.vue에 직접적으로 axios를 import해도 무방하지만 가독성을 높이고 유지보수를 편하게 하기위해 
소스 내부에 api 폴더를 생성하고 index.js 파일로 관리한다 (백엔드의 역할과 구현을 나누는것과 같은 개념)
*/

import axios from 'axios';

const instance = axios.create({
	// .env 파일 -> '키 = 값' 형태로 정의할 수 있는 환경변수 파일
	// .env 파일 : production, development 파일에 기재가 안되었을 때 default 값
	// .env.development : 정식 배포 전 개발 단계에서 사용하는 url
	// .env.production : 정식 배포 후 사용하는 url
	baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);
	// 위 2줄보다 instance로 고정된 url을 선언하고 코드를 깔끔하게 선언하는것이 좋은 코딩하는 방법
	return instance.post('signup', userData);
}

export { registerUser };
