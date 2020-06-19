
export default function ({ store, redirect }) {

	// If the user is not authenticated
	if (store.getters.IS_TOKEN) {
		return redirect('/');
	}
}


// import Cookies from 'js-cookie';
// import jwt_decode from 'jwt-decode';

// export default function ({ store, redirect }) {

// 	const token = Cookies.get('token');

// 	if (!token) {
// 		// return redirect('/');
// 		return console.log('no token');

// 	}

// 	console.log('zxzxzx');


// 	const tokenDecoded = jwt_decode(token);
// 	const tokenValid = Date.now() / 1000 < tokenDecoded.exp;

// 	if (token && !tokenValid) {
// 		Cookies.remove('token');
// 		store.dispatch('SAVE_TOKEN', null);
// 		store.dispatch('SAVE_TOKEN_INFO', null);
// 		// return redirect('/');
// 		return console.log('token no valid');

// 	}
// }
