

export default {
	SAVE_TOKEN: (context, token) => {
		context.commit('SET_TOKEN', token);
	},
	DELETE_TOKEN: (context) => {
		context.commit('REMOVE_TOKEN')
	},
	SAVE_TOKEN_INFO: (context, userInfo) => {
		context.commit('SET_TOKEN_INFO', userInfo);
	},
	GET_PROFILE: (context, profile) => {
		context.commit('SET_PROFILE', profile);
	},
	GET_TABS: (context, tabs) => {
		context.commit('SET_TABS', tabs);
	},
	GET_MODAL: (context, modal) => {
		context.commit('SET_MODAL', modal);
	},
	// GET_SUBSCRIPTIONS: (context, subscriptions) => {
	// 	context.commit('SET_SUBSCRIPTIONS', subscriptions);
	// },
	// GET_BOOKMARK: (context, bookmarks) => {
	// 	context.commit('SET_BOOKMARK', bookmarks);
	// },
	OPEN_CLOSE_TABS: (context, id) => {
		context.commit('OPEN_CLOSE_TABS', id);
	},
	CLEAR_PROFILE: (context) => {
		context.commit('CLEAR_PROFILE');
	},



	getHeader(context) {
    return this.$axios
      .$get('/api/menu/header')
      .then((res) => {
        context.commit('SET_HEADER_MENU', res.data)
      })
	},
	getHotNews(context) {
    return this.$axios
      .$get('/api/tags/featured-tags')
      .then((res) => {
        context.commit('SET_HEADER_HOT_NEWS', res.data)
      })
	},
	getBookmarks(context) {
		this.$axios
			.$get(`/api/profile/bookmarks/ids`)
			.then(res => {
				context.commit("SET_BOOKMARK", res.data);
			})
			.catch(error => console.error(error));
	},
	getSubscriptions(context) {
		this.$axios
			.$get(`/api/profile/subscriptions/ids`)
			.then(res => {
				context.commit("SET_SUBSCRIPTIONS", res.data);
			})
			.catch(error => console.error(error));
	},





	async nuxtServerInit(vuexContext) {
    await vuexContext.dispatch('getHeader', { root: true })
		await vuexContext.dispatch('getHotNews', { root: true })
  }

}


