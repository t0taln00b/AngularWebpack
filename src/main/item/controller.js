export default class MainController {

	static get $inject(){
		return [
			'ModalDialogService'
			/* 'me' */
		];
	}

	constructor(ModalDialogService
	            /* me */){
		// this._me = me.data; // Current user data

		this._ModalDialogService = ModalDialogService;

		console.log('main.item.controller')
	}

	submit(){
		this._ModalDialogService.open({ title: 'Hello', message: 'From Item Controller' });
	}

}



