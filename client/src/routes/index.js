import Cart from '../pages/Cart';
import Main from '../pages/Main';
import Admin from '../pages/Admin';

import Products from '../pages/Products';
import Product from '../pages/Product';

import {
  ADMIN_ROUTE,
  CART_ROUTE,
  CHECKOUT_ROUTE,
  MAIN_PAGE_ROUTE,
  PRODUCTS_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from '../config/consts';
import Checkout from '../pages/Checkout';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/Signin';

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    component: Admin,
    exact: true,
  },
];

export const privateRoutes = [
  {
    path: CART_ROUTE,
    component: Cart,
    exact: true,
  },
  {
    path: CHECKOUT_ROUTE,
    component: Checkout,
    exact: true,
  },
];

export const publicRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    component: Main,
    exact: true,
  },
  {
    path: `${PRODUCTS_ROUTE}/:id`,
    component: Product,
    exact: true,
  },
  {
    path: PRODUCTS_ROUTE,
    component: Products,
    exact: true,
  },
  {
    path: SIGNUP_ROUTE,
    component: Signup,
    exact: true,
  },
  {
    path: SIGNIN_ROUTE,
    component: Signin,
    exact: true,
  },
];
