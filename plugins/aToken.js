export default function ({$axios, app}) {
	console.log(123)
	console.log(44)
  $axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const code = parseInt(error.response && error.response.status);

      console.log(code)
      console.log(app.$auth)

      if (401 === code) {
        app.$auth.logout();
      }else {
        return Promise.reject(error);
      }
    }
  );
}
