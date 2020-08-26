export default function ({ $axios, app, redirect }) {
	$axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {

			const code = parseInt(error.response && error.response.status);

			if (401 === +code) {
				app.$auth.logout();
			}else if([404].includes(+code)){
				redirect('/404')

			}else if([500].includes(+code)){
				redirect('/')
			}
			else {
				return Promise.reject(error);
			}
		}
	);
}
