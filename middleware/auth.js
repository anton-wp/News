import Cookies from 'js-cookie';

export default function ({ redirect }) {

	const token = Cookies.get('token');

	return console.log('dsfsdf', Cookies);

	// if (!token) {
	// 	// console.log('sdfsdfsdf');
	// 	return redirect('/');
	// } else {
	// 	return redirect('profila/dashboard');
	// }
}
