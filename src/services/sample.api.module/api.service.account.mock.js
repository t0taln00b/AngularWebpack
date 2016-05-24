export default class ApiService {

	static get $inject(){
		return [
			'$q'
		];
	}

	constructor($q){
		this._$q = $q;
	}

	me(){
		/* return mock data promise */
	}

}
