export default {
	SET_PROFILE: (state, profile) => {
		state.profile = profile;
	},
	SET_MODAL: (state, modal) => {
		state.modal = modal;
	},
	SET_BOOKMARK: (state, bookmarks) => {
		state.bookmarks = bookmarks;
	},
	SET_SUBSCRIPTIONS: (state, subscriptions) => {
		state.subscriptions = subscriptions;
	},
	DEL_SUBSCRIPTION: (state, id) => {
		state.subscriptions = state.subscriptions.filter(subscription => subscription !== id);
	},
	DEL_BOOKMARK: (state, id) => {
		state.bookmarks = state.bookmarks.filter(bookmark => bookmark !== id);
	},
	ADD_SUBSCRIPTION: (state, id) => {
		state.subscriptions = state.subscriptions.concat(id);
	},
	ADD_BOOKMARK: (state, id) => {
		state.bookmarks = state.bookmarks.concat(id);
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
