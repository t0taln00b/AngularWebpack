//import 'lodash';

// Import Angular core modules
import 'angular/angular.js';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';

// Import Angular vendor plugins
import angularUiRouter from 'angular-ui-router';
import angularUiBootstrap from 'angular-ui-bootstrap';

// CSS
import 'bootstrap-css-only';
import './styles.less';

import AppMainModule from './main';
import AppServicesModule from './services';
import AppComponentsModule from './components';

export default angular.module('app',
	[
		ngMessages,
		ngAnimate,
		ngSanitize,
		ngCookies,

		angularUiRouter,
		angularUiBootstrap,

		AppMainModule,
		AppServicesModule,
		AppComponentsModule

	])

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider){
			$urlRouterProvider.otherwise("/main");
		}])
	
	.filter('int', [function(){
		return function(val){
			return parseInt(val);
		};
	}])



















