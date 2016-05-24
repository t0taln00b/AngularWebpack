// Application modules
/* import ApiModule from './api';
 * import AuthModule from './auth'; */

// Application services
import CookiesService from './app/cookies.service';

export default angular.module('app.services.module',
	[
		/* ApiModule,
		 * AuthModule */
	])

	.service('CookiesService', CookiesService)

	.name;