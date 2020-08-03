export default ({ app, $axios, redirect, $store}) => {
  $axios.onError((error) => {
    if (error.response && error.response.status === 401) {
			// app.$toasted.error('error');
			redirect('/');
			app.$auth.logout();
			app.store.commit("CLEAR_LOGOUT")
    }

    return Promise.reject(error);
  });
}
