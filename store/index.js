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
	},
	getters: {
		IS_TOKEN: state => state.token,
		TOKEN_INFO: state => state.tokenInfo,
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
