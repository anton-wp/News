export default ({ app, $axios, redirect }) => {
  $axios.onError((error) => {
    if (error.response && error.response.status === 401) {
			app.$toasted.error('error');
			redirect('/');
			app.$auth.logout();
    }

    return Promise.reject(error);
  });
}
