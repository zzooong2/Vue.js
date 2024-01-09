import Vue from 'vue';
import VueRouter from 'vue-router';

// 상위 폴더로 가기 위해서는 '../' 명령어를 사용해야하지만 Alias(@) 설정을 해두어 편리하게 사용
// jsconfig.json 파일에 설정 -> VSCode에서만 사용가능

/*
* 코드 스플리팅으로 인한 임포트 주석처리
* 코드 스플리팅을 안할경우 "component: LoginPage" 이와 같이 선언
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';
*/

Vue.use(VueRouter); // Vue.use -> 플러그인을 실행(초기화)하기 위한 코드

export default new VueRouter({
	// #을 이용하여 페이지가 새로운 페이지라고 인식하지 못함
	// Vue Router 공식 홈페이지에 history 라고 검색하면 각 서버 별 설정 방법에 따라 진행해야함
	mode: 'history', // url에 '#' 제거
	// routes 속성 정의
	routes: [
		{
			path: '/',
			redirect: '/login', // redirect 웹의 처음 화면을 정의 (라우터의 리다이렉트)
		},
		{
			path: '/login',
			// 코드 스플리팅 : 해당 url로 이동했을 때만 불러오게 하는것 (페이지가 많을 경우 로딩 시간이 길어짐)
			// 코드 스플리팅 : 화살표 함수를 이용하여 바로 import하여 파일 경로 명시
			component: () => import('@/views/LoginPage.vue'),
			// component: LoginPage, // 로그인 페이지에 path를 보냄 (router-view 태그 사용시 path가 보여짐)
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
			// component: SignupPage, // 회원가입 페이지에 path를 보냄 (router-view 태그 사용시 path가 보여짐)
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
		},

		{
			path: '*', // * 표시를 할 경우 위에 기재된 url제외 모든 url에 대하여 정의하겠다는 표시 (라우터의 폴백)
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
}); // VueRouter의 인스턴스가 생성되면서 다른 파일에서 import 하여 사용할 수 있게됨.
