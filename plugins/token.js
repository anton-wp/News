// import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

export default function ({ store, app }) {

	const token = app.$cookies.get('token')

	if (token) {

		const tokenDecoded = jwt_decode(token);

		const tokenValid = Date.now() / 1000 < tokenDecoded.exp

		if (tokenValid) {
			store.dispatch('SAVE_TOKEN', token);
			store.dispatch('SAVE_TOKEN_INFO', tokenDecoded);
		} else {
			Cookies.remove('token');
			store.dispatch('SAVE_TOKEN', null);
			store.dispatch('SAVE_TOKEN_INFO', null);
		}

	}

}
