

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
	OPEN_CLOSE_TABS: (context, id) => {
		context.commit('OPEN_CLOSE_TABS', id);
	},
	CLEAR_PROFILE: (context) => {
		context.commit('CLEAR_PROFILE');
	},
}


