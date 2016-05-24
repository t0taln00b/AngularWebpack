import controller from './controller';
import template from './template.pug';
import styles from './styles.less';

routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider){

	$urlRouterProvider.when('/main', '/main/100500/item');

	$stateProvider.state('main', {
		url: '/main',
		template: template,
		controllerAs: 'vm',
		controller: controller
		/*
		abstract: true
		 // Get currently logged-in user data and ensure that user session is valid
		 resolve:{
		    me: [ 'ApiAccountService', (ApiAccountService)=> ApiAccountService.me() ]
		 }*/
	})


}

