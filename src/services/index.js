// Application modules
import Modal from './modalDialog.module';

/* import ApiModule from './api.module';
 * import AuthModule from './auth.module'; */

// Application services
import CookiesService from './cookies.service';

export default angular.module('app.services.module',
	[
		Modal
		/* ApiModule,
		 * AuthModule */
	])

	.service('CookiesService', CookiesService)

	.name;