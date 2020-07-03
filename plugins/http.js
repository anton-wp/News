import axios from 'axios';
import Cookies from 'js-cookie';

// console.log(app.$auth.getToken('local'));

const token = Cookies.get('auth._token.local');

let http = axios;

// console.log(token);

if (token && token !== 'false') {
	http = axios.create({
		headers: {
			'Authorization': token
		}
	});
}

export default {
	install(Vue) {
		Object.defineProperty(Vue.prototype, '$http', { value: http })
	}
}
