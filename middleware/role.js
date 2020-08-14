export default function ({ route, store, redirect }) {
  // console.log(route.matched[0].path)
	// console.log(store.$auth.$state)

// posts??????
	const user = [
		'/add',
		'/:slug/edit',
		'/:slug/preview',
		'/:slug/review',
		'/draft/:slug/review',
		'/draft/:slug',
		'/profile/dashboard/',
		'/profile/dashboard/add-note',
		'/profile/dashboard/blocked',
		'/profile/dashboard/draft',
		'/profile/dashboard/posts',
		'/profile/dashboard/verdicts',
		'/profile/dashboard/comments',
		'/profile/dashboard/comments/:id/edit',
		'/profile/dashboard/edit-note/:slug',
		'/profile/dashboard/tags',
		'/profile/dashboard/tags/:slug',
		'/profile/dashboard/tags/:slug/edit',
		'/profile/feed',
	];
	const author = [
		// '/add',
		// '/:slug/edit',
		// '/:slug/preview',
		'/:slug/review',
		'/draft/:slug/review',
		'/draft/:slug',
		'/profile/dashboard/',
		'/profile/dashboard/add-note',
		'/profile/dashboard/blocked',
		'/profile/dashboard/draft',
		'/profile/dashboard/posts',
		'/profile/dashboard/verdicts',
		'/profile/dashboard/comments',
		'/profile/dashboard/comments/:id/edit',
		'/profile/dashboard/edit-note/:slug',
		'/profile/dashboard/tags',
		'/profile/dashboard/tags/:slug',
		'/profile/dashboard/tags/:slug/edit',
		'/profile/feed',
	];
	const trustedAuthor = [
		// '/add',
		// '/:slug/edit',
		// '/:slug/preview',
		'/:slug/review',
		'/draft/:slug/review',
		'/draft/:slug',
		// '/profile/dashboard/',
		'/profile/dashboard/add-note',
		'/profile/dashboard/blocked',
		'/profile/dashboard/draft',
		'/profile/dashboard/posts',
		'/profile/dashboard/verdicts',
		'/profile/dashboard/comments',
		'/profile/dashboard/comments/:id/edit',
		'/profile/dashboard/edit-note/:slug',
		'/profile/dashboard/tags',
		'/profile/dashboard/tags/:slug',
		'/profile/dashboard/tags/:slug/edit',
		// '/profile/feed',
	];
	// const editor = [];


	// const admin = []
	if(store.$auth.$state.loggedIn && route.matched){
		switch(store.$auth.$state.user.group.name) {
			case 'user':
				if(user.includes(route.matched[0].path)){
					return redirect('/')
				}
				break
			case 'author':
				if(author.includes(route.matched[0].path)){
					return redirect('/')
				}
				break
			case 'trusted-author':
				if(trustedAuthor.includes(route.matched[0].path)){
					return redirect('/')
				}
				break
			// case 'editor':
			// case 'super-admin':
			// 	if(editor.includes(route.matched[0].path)){
			// 		return redirect('/')
			// 	}
			// 	break

			default:

				break
		}
	}


}
