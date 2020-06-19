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
	},
	getters: {
		isAuthenticated(state) {
			return state.auth.loggedIn
		},
		loggedInUser(state) {
			return state.auth.user
		}
	},
	actions,
	mutations
})

export default store
