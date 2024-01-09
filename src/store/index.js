import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	// state -> 여러 componet 간 공유되는 데이터
	state: {
		username: '',
		token: '',
	},
	// getters -> state의 값이 변경 되었을 때 특정 상태를 개선 (return 값을 가짐 = computed와 같다고 생각)
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	// mutations -> state 공유된 데이터를 변경
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
});
