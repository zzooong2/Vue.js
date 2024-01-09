import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index'; // src/routes/index.js에 선언해둔 VueRouter를 사용
import store from '@/store/index';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router, // src/routes/index.js에 선언해둔 VueRouter를 사용
	store,
}).$mount('#app');
