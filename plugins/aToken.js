export default function ({ $axios, app }) {
	$axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			const code = parseInt(error.response && error.response.status);

			if (401 === +code) {
				app.$auth.logout();
			} else {
				return Promise.reject(error);
			}
		}
	);
}
