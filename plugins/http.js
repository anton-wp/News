import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');
let http = axios;

if (token) {
	http = axios.create({
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
}

export default {
	install(Vue) {
		Object.defineProperty(Vue.prototype, '$http', { value: http })
	}
}
