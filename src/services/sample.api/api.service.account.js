export default class ApiService {

	static get $inject(){
		return [
			// Angular providers
			'$http', '$q',
			// App providers
			'ApiService', 'CookiesService'
		];
	}

	constructor( $http, $q,
	            ApiService, CookiesService){

		this._api = ApiService.api;

		this._$q = $q;
		this._$http = $http;
		this._CookiesService = CookiesService;

	}

	me(){
		return this._$http({
			url: this._api + '/account/me',
			method: 'GET',
			headers: { Authorization: 'Bearer ' + this._CookiesService.getCookie('token') }
		});
	}

}
