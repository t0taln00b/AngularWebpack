export default  class AuthService {
	static get $inject(){
		return [
			// Angular providers
			'$http', '$q',
			// App providers
			'ApiService', 'CookiesService'
		];
	}

	constructor($http, $q,
	            ApiService, CookiesService){

		this.$http = $http;
		this.$q = $q;

		this.CookiesService = CookiesService;
		this.ApiService = ApiService;

	}

	login(userData){
		let deferred = this.$q.defer(),
		    url      = this.ApiService.api + '/auth/login';

		this.$http.post(url, {
				email: userData.email,
				password: userData.password
			})
			.then((response)=>{
				let result = response.data,
				    token  = result.token;

				/* Save token on client-side,
				 it will be attach to all http requests to ensure authorization */
				this.CookiesService.setCookie('token', token);

				deferred.resolve(result);
			})
			.catch(function(err){
				deferred.reject(err);
			});

		return deferred.promise;
	}


	logout(callback){
		this.CookiesService.removeCookie('token');
		if( angular.isFunction(callback) ){ callback(); }
	}

};
