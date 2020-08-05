export default function (req, res, next) {
	console.log(444);
	// console.log(app);
	// console.log(req)
	console.log(res)
	// console.log($auth);
	// if (!store.state.auth.loggedIn) {
	// 	return redirect('/')
	// }
	next()
}
