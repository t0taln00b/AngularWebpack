function authInterceptorFactory($window, $q, CookiesService){

	return {
		request: function(config){
			let token = CookiesService.getCookie('token');
			config.headers = config.headers || {};
			if( token ){
				config.headers.Authorization = 'Bearer ' + token;
			}
			return config;
		},

		// Intercept 401s and redirect you to login
		responseError: function(response){
			if( response.status === 401 ){
				CookiesService.removeCookie('token');    // remove stale token
				$window.location.href = '/#/login';
			}
			return $q.reject(response);
		}


	};
}

authInterceptorFactory.$inject = [
	'$window', '$q',
	'CookiesService'
];

export default authInterceptorFactory;
