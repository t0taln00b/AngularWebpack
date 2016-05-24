export default class ApiService {

	static get $inject(){
		return ['$location'];
	}

	constructor($location){
		let host = $location.host();
		this._api = host === 'localhost' ? 'http://localhost/api' : 'http://production.domain/api';
	}

	get api(){
		return this._api;
	}
	
}
