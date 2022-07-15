
// Pages
import Login from '../screens/auth/Login';
import ForgetPassword from '../screens/auth/ForgetPassword';
import ResetPassword from '../screens/auth/ResetPassword';
import Depot from '../screens/Depots/Depot';
import Product from '../screens/Products/Product';
import NewModal from '../components/modals/NewModal';

// Public routes
const publicRoutes = [
    { path: '/', component: Login },
    { path: '/forgetpassword', component: ForgetPassword },
    { path: '/resetpassword', component: ResetPassword },
    { path: '/products', component: Product },
    { path: '/depots', component: Depot },
    { path: '/modals', component: NewModal },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

