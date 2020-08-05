export default {
	SET_PROFILE: (state, profile) => {
		state.profile = profile;
	},
	SET_HEADER_MENU: (state, menu) => {
		state.header.menu = menu;
	},
	SET_HEADER_HOT_NEWS: (state, news) => {
		state.header.news = [...news, ...news];
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
	SET_VOTES: (state, votes) => {
		state.votes = votes;
	},
	SET_DASHBOARD_POSTS: (state, posts) => {
		state.dashboard.posts = posts;
	},
	SET_DASHBOARD_PAGINATIONS: (state, paginations) => {
		state.dashboard.paginations = paginations;
	},
	SET_NOTE: (state, data) => {
		state.notes = data;
	},
	ADD_COMMENT_REPLY: (state, id) => {
		state.commentsReply = id;
	},
	ADD_IDS: (state, ids) => {
		state.dashboard.ids = state.dashboard.ids.concat(ids);
	},
	DEL_IDS: (state, ids) => {
		state.dashboard.ids = state.dashboard.ids.filter(id => !ids.includes(id));
	},
	DEL_SUBSCRIPTION: (state, id) => {
		state.subscriptions = state.subscriptions.filter(subscription => subscription !== id);
	},
	DEL_BOOKMARK: (state, id) => {
		state.bookmarks = state.bookmarks.filter(bookmark => bookmark !== id);
	},
	DEL_POST_DASHBOARD: (state, id) => {
		state.dashboard.posts = state.dashboard.posts.filter(post => post.id !== id)
	},
	DEL_POSTS_DASHBOARD: (state, id) => {
		state.dashboard.posts = state.dashboard.posts.filter(post => !id.includes(post.id))
	},
	DEL_NOTE: (state, id) => {
		state.notes = state.notes.filter(note => note.id !== id);
	},
	ADD_SUBSCRIPTION: (state, id) => {
		state.subscriptions = state.subscriptions.concat(id);
	},
	ADD_BOOKMARK: (state, id) => {
		state.bookmarks = state.bookmarks.concat(id);
	},
	ADD_VOTE: (state, id) => {
		if(!state.votes.includes(id)) {
			state.votes = state.votes.concat(id);
		}
	},
	ADD_NOTE: (state, data) => {
		state.notes = state.notes.concat(data);
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
	UPDATE_COUNTER_TABS: (state, data) => {
		state.tabs.map(tab => {
			if(tab.title === data.title && data.type) {
				tab.counter = tab.counter + 1
			}
			if(tab.title === data.title && !data.type) {
				tab.counter = tab.counter - 1
			}
		})
	},
	UPDATE_FEATURED: (state, id) => {
		state.dashboard.posts.map(post => post.id === id ?  post.featured = !post.featured : null)
	},
	UPDATE_LOGIN_POPUP: (state, data) => {
		state.loginModal.open = data.open;
		state.loginModal.type = data.type;
	},
	TOGGLE__ANIMATION__LOGIN__MODAL: (state, data) => {
		state.loginModal.open = data;
	},
 	CLEAR_PROFILE: (state) => {
		state.profile = Object;
	},
 	CLEAR_BOOKMARKS: (state) => {
		state.bookmarks = [];
	},
 	CLEAR_SUBSCRIPTION: (state) => {
		state.subscriptions = [];
	},
	CLEAR_DASHBOARD_IDS: (state) => {
		state.dashboard.ids = [];
	},
	CLEAR_DASHBOARD_POSTS: (state) => {
		state.dashboard.posts = [];
	},
	CLEAR_LOGOUT: (state) => {
		console.log(123)
		state.dashboard.ids = [];
		state.dashboard.posts = [];
		state.dashboard.paginations = Object;
		state.tabs = [];
		state.profile = Object;
	}
}
