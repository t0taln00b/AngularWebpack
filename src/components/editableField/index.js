/* In Angular, a Component is a special kind of directive that uses a simpler configuration
 * which is suitable for a component-based application structure.
 * https://docs.angularjs.org/guide/component
 */

import template from './template.pug'
import controller from './controller'

export default angular.module('app.components.editableField', [])
	.component('editableField', {
		template: template,
		controller: controller,
		bindings: {
			fieldValue: '<',
			onUpdate: '&'
		}
	})
	.name;
