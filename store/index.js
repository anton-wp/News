import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = () => new Vuex.Store({

	state: {
		loginModal: {
			open: false,
			type: 'signUp'
		},
		profile: Object,
		tabs: [],
		modal: Object,
		breadcrumbs: [],
		bookmarks: [],
		commentsReply: '',
		subscriptions: [],
		votes: [],
		header: {
			menu: [],
			news: [],
		},
		dashboard: {
			posts: [],
			paginations: Object,
			ids: []
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
