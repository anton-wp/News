import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = () => new Vuex.Store({

	state: {
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
		isAuthenticated(state) {
			return state.auth.loggedIn
		},
		IS_TABS: state => {
			return state.tabs;
		},
		loggedInUser(state) {
			return state.auth.user
		}
	},
	actions,
	mutations
})

export default store
