
export default function ({ store, redirect }) {

	// If the user is not authenticated
	if (store.getters.IS_TOKEN) {
		return redirect('/');
	}
}
