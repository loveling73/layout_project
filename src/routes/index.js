
// Pages
import Login from '../screens/auth/Login';
import ForgetPassword from '../screens/auth/ForgetPassword';
import ResetPassword from '../screens/auth/ResetPassword';
import Depot from '../screens/Depots/Depot';
import Product from '../screens/Products/Product';
import Modals from '../components/Modals';

// Public routes
const publicRoutes = [
    { path: '/', component: Login },
    { path: '/forgetpassword', component: ForgetPassword },
    { path: '/resetpassword', component: ResetPassword },
    { path: '/products', component: Product },
    { path: '/depots', component: Depot },
    { path: '/modals', component: Modals },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

