// todo - This module need to be refactored in order to match angular ES6 style

import template from './template.pug';

export default angular.module('app.components.modal.module', [])

	.service('ModalDialogService', [
		'$templateCache', '$uibModal',
		function($templateCache, $uibModal){

			this.open = (scopeData)=>{

				var modalInstance = $uibModal.open({
					animation: true,
					template: template,
					controller: 'ModalDialogController',
					size: 'lg',
					backdrop: true,
					resolve: {
						scopeData: function(){
							return scopeData || {};
						}
					}
				});

				return modalInstance.result;
			};

		}])

	.controller('ModalDialogController', [
		'$scope', '$uibModalInstance',
		'scopeData',
		function($scope, $uibModalInstance,
		 scopeData){

			// Add provided data to view scope
			Object.assign($scope, scopeData);

			$scope.ok = ()=>{
				$uibModalInstance.close('close');
			};

			$scope.cancel = ()=>{
				$uibModalInstance.dismiss('cancel');
			};

		}])

	.name;



