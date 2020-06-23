import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = () => new Vuex.Store({

	state: {
		token: null,
		tokenInfo: null,
		profile: Object,
		tabs: [],
		modal: Object,
		breadcrumbs: [],
		bookmarks: [],
		subscriptions: [],
		header: {
			menu: [],
			news: [],
		}
	},
	getters: {
		IS_TOKEN: state => {
			return state.token ? true : false;
		},
		TOKEN_INFO: state => {
			return state.tokenInfo;
		},
		IS_TABS: state => {
			return state.tabs;
		},
	},
	actions,
	mutations
})

export default store
