import React, { lazy } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

const AxiosView = lazy(() => import('../../container/crud/axios/Index'));
const AxiosAdd = lazy(() => import('../../container/crud/axios/Add'));
const AxiosEdit = lazy(() => import('../../container/crud/axios/Edit'));

const AxiosRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/crud/axios-view`} component={AxiosView} />
      <Route path={`${path}/crud/axios-add`} component={AxiosAdd} />
      <Route exact path={`${path}/crud/edit/:id`} component={AxiosEdit} />
    </Switch>
  );
};

export default AxiosRoute;
