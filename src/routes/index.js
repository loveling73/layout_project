
// Pages
import Login from '../auth/Login';
import Depot from '../screens/Depots/Depot';
import ModalNewDepot from '../screens/Depots/ModalNewDepot';
import Product from '../screens/Products/Product';

// Public routes
const publicRoutes = [
    { path: '/', component: Login },
    { path: '/products', component: Product },
    { path: '/depots', component: Depot },
    { path: '/modals', component: ModalNewDepot },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

