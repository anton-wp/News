export default {
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	SET_TOKEN_INFO: (state, userInfo) => {
		state.tokenInfo = userInfo;
	},
	SET_PROFILE: (state, profille) => {
		state.profile = profille;
	},
	SET_BREADCRUMBS: (state, breadcrumbCustom) => {
		let breadcrumbs = [
			{
				title: 'Home',
				path: '/'
			}
		];
		if(breadcrumbCustom){
			state.breadcrumbs = [...breadcrumbs,...breadcrumbCustom]
		} else {
			state.breadcrumbs = []
		}
	},
	REMOVE_TOKEN: (state) => {
		state.token = '';
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
