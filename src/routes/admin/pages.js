import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const NotFound = lazy(() => import('../../container/pages/404'));
const Support = lazy(() => import('../../container/pages/support'));
const Maintenance = lazy(() => import('../../container/pages/Maintenance'));
const Pricing = lazy(() => import('../../container/pages/PricingTable'));
const Faq = lazy(() => import('../../container/pages/Faq'));
const Search = lazy(() => import('../../container/pages/SearchResult'));
const ComingSoon = lazy(() => import('../../container/pages/ComingSoon'));
const BlankPage = lazy(() => import('../../container/pages/BlankPage'));
const Wizards = lazy(() => import('../../container/pages/wizards/Wizards'));
const Settings = lazy(() => import('../../container/profile/settings/Settings'));
const KnowledgeBase = lazy(() => import('../../container/pages/knowledgeBase/Index'));
const AllArticle = lazy(() => import('../../container/pages/knowledgeBase/AllArticle'));
const KnowledgeSingle = lazy(() => import('../../container/pages/knowledgeBase/SingleKnowledge'));
const ChangeLog = lazy(() => import('../../container/pages/ChangeLog'));

const PagesRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/404`} component={NotFound} />
      <Route path={`${path}/support`} component={Support} />
      <Route path={`${path}/maintenance`} component={Maintenance} />
      <Route path={`${path}/Pricing`} component={Pricing} />
      <Route path={`${path}/faq`} component={Faq} />
      <Route path={`${path}/search`} component={Search} />
      <Route path={`${path}/starter`} component={BlankPage} />
      <Route path={`${path}/comingSoon`} component={ComingSoon} />
      <Route path={`${path}/wizards`} component={Wizards} />
      <Route path={`${path}/settings`} component={Settings} />
      <Route path={`${path}/knowledgeBase`} component={KnowledgeBase} />
      <Route path={`${path}/all-articles`} component={AllArticle} />
      <Route path={`${path}/knowledgebaseSingle/:id`} component={KnowledgeSingle} />
      <Route path={`${path}/changelog`} component={ChangeLog} />
    </Switch>
  );
};

export default PagesRoute;
