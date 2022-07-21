
// Pages
import Modals from '../components/Modals';
import ForgetPassword from '../screens/auth/ForgetPassword';
import Login from '../screens/auth/Login';
import ResetPassword from '../screens/auth/ResetPassword';
import Depot from '../screens/Depots/Depot';
import Product from '../screens/Products/Product';
import Store from '../screens/Store';
import Danhmuc from '../screens/Store/listStore';
import XuatKho from '../screens/Store/XuatKho';
// Public routes
const publicRoutes = [
    { path: '/', component: Login },
    { path: '/forgetpassword', component: ForgetPassword },
    { path: '/resetpassword', component: ResetPassword },
    { path: '/products', component: Product },
    { path: '/depots', component: Depot },
    { path: '/modals', component: Modals },
    { path: '/stores', component: Danhmuc },
    { path: '/stores/Nhap', component: Store },
    { path: '/stores/Xuat', component: XuatKho }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

