import ApiService from './api.service';
import ApiAccountService from './api.service.account';

export default angular.module(
	'app.api.services.module', [])

	.service('ApiService', ApiService)
	.service('ApiAccountService', ApiAccountService)
	
	.name;