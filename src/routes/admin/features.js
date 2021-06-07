import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Tables = lazy(() => import('./table'));
const FormLayouts = lazy(() => import('../../container/forms/FormLayout'));
const FormElements = lazy(() => import('../../container/forms/FormElements'));
const FormComponents = lazy(() => import('../../container/forms/FormComponents'));
const FormValidation = lazy(() => import('../../container/forms/FormValidation'));
const Editors = lazy(() => import('../../container/pages/Editor'));
const Banners = lazy(() => import('../../container/pages/Banners'));
const Components = lazy(() => import('./components'));
const Maps = lazy(() => import('./maps'));
const Icons = lazy(() => import('./icons'));
const Charts = lazy(() => import('./charts'));
const Testimonials = lazy(() => import('../../container/pages/Testimonials'));
const Import = lazy(() => import('../../container/importExport/Import'));
const Export = lazy(() => import('../../container/importExport/Export'));

const FeaturesRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/editor`} component={Editors} />
      <Route path={`${path}/banners`} component={Banners} />
      <Route path={`${path}/components`} component={Components} />
      <Route path={`${path}/maps`} component={Maps} />
      <Route path={`${path}/icons`} component={Icons} />
      <Route path={`${path}/charts`} component={Charts} />
      <Route path={`${path}/tables`} component={Tables} />
      <Route path={`${path}/form-layout`} component={FormLayouts} />
      <Route path={`${path}/form-elements`} component={FormElements} />
      <Route path={`${path}/form-components`} component={FormComponents} />
      <Route path={`${path}/form-validation`} component={FormValidation} />
      <Route path={`${path}/testimonials`} component={Testimonials} />
      <Route path={`${path}/importExport/import`} component={Import} />
      <Route path={`${path}/importExport/export`} component={Export} />
    </Switch>
  );
};

export default FeaturesRoute;
