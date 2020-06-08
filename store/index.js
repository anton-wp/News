import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

	state: {
		token: null,
		tokenInfo: null
	},
	getters: {
		IS_TOKEN: state => {
			return state.token ? true : false;
		},
		TOKEN_INFO: state => {
			return state.tokenInfo;
		}
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_TOKEN_INFO: (state, userInfo) => {
			state.tokenInfo = userInfo;
		},
		REMOVE_TOKEN: (state) => {
			state.token = '';
		},
	},
	actions: {
		SAVE_TOKEN: (context, token) => {
			context.commit('SET_TOKEN', token);
		},
		DELETE_TOKEN: (context) => {
			context.commit('REMOVE_TOKEN')
		},
		SAVE_TOKEN_INFO: (context, userInfo) => {
			context.commit('SET_TOKEN_INFO', userInfo);
		}
	}
})

export default store
