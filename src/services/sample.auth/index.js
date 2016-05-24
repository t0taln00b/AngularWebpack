import AuthService from './auth.service';
import AuthInterceptor from './authInterceptor';

export default angular.module('AuthModule', [])

	.service('AuthService', AuthService)

	// Add HTTP interceptor to attach auth headers to API requests
	.factory('AuthInterceptorFactory', AuthInterceptor)

	.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', ($stateProvider, $urlRouterProvider, $httpProvider)=>{

		$urlRouterProvider.otherwise("/login");
		
		$httpProvider.interceptors.push('AuthInterceptorFactory');

	}])

	.name;