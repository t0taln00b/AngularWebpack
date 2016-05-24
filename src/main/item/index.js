import styles from './styles.less';
import demoAnimation from './styles.demo.animation.css';

// Module
import routes from './routes';

export default angular.module('app.main.item.module', [])
	.config(routes)
	.name;

