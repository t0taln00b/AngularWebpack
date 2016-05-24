import controller from './controller';
import template from './template.pug';


export default class Service {
	static get $inject(){ return ['$uibModal']; }

	constructor($uibModal){
		this._$uibModal = $uibModal;
	}

	open(scopeData){
		
		let modalInstance = this._$uibModal.open({
			animation: true,
			template: template,
			controller: controller, 
			controllerAs: 'ctrl', 
			size: 'lg',
			backdrop: true,
			resolve: {
				scopeData: ()=>scopeData || {}
			}
		});

		return modalInstance.result;
	}

}

