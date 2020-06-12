export default {
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	SET_TOKEN_INFO: (state, userInfo) => {
		state.tokenInfo = userInfo;
	},
	REMOVE_TOKEN: (state) => {
		state.token = '';
	},
	SET_PROFILE: (state, profille) => {
		state.profile = profille;
	},
	SET_TABS: (state, tabs) => {
		state.tabs = tabs;
	},
	OPEN_CLOSE_TABS: (state, id) => {
		state.tabs.map(tab =>
			tab.title === id ? (tab.status = !tab.status) : null
		);
	},
	CLEAR_PROFILE: (state) => {
		state.profile = Object;
	},
}
