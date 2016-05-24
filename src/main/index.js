// Import  modules

import Item from './item';

// Module view
import routes from './routes';

export default angular.module( 'app.main.module',
    [
        Item
    ] )
    .config(routes)
    .name;

