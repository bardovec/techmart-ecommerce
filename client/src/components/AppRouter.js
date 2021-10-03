import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return userInfo?.isAdmin ? (
    <Switch>
      {[...privateRoutes, ...publicRoutes, ...adminRoutes].map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to='/' />
    </Switch>
  ) : userInfo ? (
    <Switch >
      {[...privateRoutes, ...publicRoutes, ...adminRoutes].map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to='/' />
    </Switch>
  ) : (
    <Switch>
        {/* TODO Remove Index Routes*/}
      {[...privateRoutes, ...publicRoutes, ...adminRoutes].map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to='/login' />
    </Switch>
  );
};

export default AppRouter;
