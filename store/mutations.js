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
	CLEAR_PROFILE: (state) => {
		state.profile = Object;
	},
}
