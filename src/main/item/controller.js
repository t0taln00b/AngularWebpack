export default class MainController {

	static get $inject(){
		return [
			'$stateParams',
			'ModalDialogService'
			/* 'me' */
		];
	}

	constructor($stateParams,
	            ModalDialogService
	            /* me */){
		// this._me = me.data; // Current user data

		this._ModalDialogService = ModalDialogService;

		console.log('main.item.controller, item id:', $stateParams.id);

		// controller data
		this.data = { title: 'Hello', message: 'From Item Controller' };

		// ng-switch data
		this.items = ['settings', 'home', 'other'];
		this.selection = this.items[0];
	}

	updateData(value){
		this.data.message = value;
	}

	showData(){
		this._ModalDialogService.open(this.data);
	}

}



