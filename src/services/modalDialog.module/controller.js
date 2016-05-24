export default class Controller {

	static get $inject(){
		return [
			'$uibModalInstance',
			'scopeData'
		];
	}

	constructor($uibModalInstance,
	            scopeData){

		this._$uibModalInstance = $uibModalInstance;

		// Add provided data to view scope
		this.viewData = scopeData || {};

	}

	ok(){
		this._$uibModalInstance.close('close');
	}

	cancel(){
		this._$uibModalInstance.dismiss('cancel');
	}
}
