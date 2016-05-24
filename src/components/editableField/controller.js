export default class Controller {

	static get $inject(){
		return [];
	}

	constructor(){
		this.fieldValueCopy = '';
		this.editMode = false;
	}

	reset(){
		this.fieldValue = this.fieldValueCopy;
	};

	handleModeChange(){
		if( this.editMode ){
			this.onUpdate({ value: this.fieldValue });
			this.fieldValueCopy = this.fieldValue;
		}
		this.editMode = !this.editMode;
	};

	// --- LifeCycle hooks ---

	$onInit(){
		// Make a copy of the initial value to be able to reset it later
		this.fieldValueCopy = this.fieldValue;
	}

	$onChanges(changesObj){
		/* $onChanges(changesObj) - Called whenever one-way bindings are updated.
		 * The changesObj is a hash whose keys are the names of the bound properties that have changed,
		 * and the values are an object of the form { currentValue, previousValue, isFirstChange() }.
		 * Use this hook to trigger updates within a component such as
		 * cloning the bound value to prevent accidental mutation of the outer value. */
	}

}


