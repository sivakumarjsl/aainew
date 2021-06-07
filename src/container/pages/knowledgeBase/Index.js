import React, { lazy, Suspense } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Spin } from 'antd';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { ArrowRightOutlined } from '@ant-design/icons';
import KnowledgeBaseTop from './overview/Knowledgebase/knowledgeTop';
import { KnowledgebaseArticleWrap, ArticleTabWrap, PopularArticleWrap, CtaWrap } from './style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

import articles from '../../../demoData/article.json';

const Plugins = lazy(() => import('./overview/ArticlePlugin'));
const Themes = lazy(() => import('./overview/ArticleTheme'));
const Extensions = lazy(() => import('./overview/ArticleExtension'));

const KnowledgeBase = ({ match }) => {
  const { path } = match;
  return (
    <>
      <PageHeader
        title="Knowledgebase"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <KnowledgeBaseTop />
        <KnowledgebaseArticleWrap>
          <div className="knowledgebase-article-container">
            <ArticleTabWrap className="sDash_article-tab">
              <div className="sDash_article-tab__menu">
                <nav>
                  <ul>
                    <li>
                      <NavLink to={`${path}/plugins`}>Plugins</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${path}/themes`}>Themes</NavLink>
                    </li>
                    <li>
                      <NavLink to={`${path}/extensions`}>Extensions</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <Switch>
                  <Suspense
                    fallback={
                      <div className="spin">
                        <Spin />
                      </div>
                    }
                  >
                    <Route path={path} component={Plugins} exact />
                    <Route path={`${path}/plugins`} component={Plugins} />
                    <Route path={`${path}/themes`} component={Themes} />
                    <Route path={`${path}/extensions`} component={Extensions} />
                  </Suspense>
                </Switch>
              </div>
            </ArticleTabWrap>
            <PopularArticleWrap>
              <div className="sDash_popular-article sDash_popular-article-container">
                <h2 className="sDash_popular-article__title">Popular articles</h2>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 767: 2, 900: 3 }}>
                  <Masonry className="sDash_popular-article__box" gutter="15px">
                    {articles.map((article, i) => (
                      <div className={`sDash_popular-article__single theme-${article.type}`} key={i}>
                        <h4 className="single-article-title">{article.title}</h4>
                        <p>{article.text}</p>
                        <Link className="btn-link" to="/admin/knowledgebaseSingle/1">
                          Read more
                          <ArrowRightOutlined />
                        </Link>
                      </div>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </PopularArticleWrap>
            <CtaWrap>
              <div className="sDash_knowledgebase-cta">
                <h2 className="sDash_knowledgebase-cta__title">Still no luck? We can help!</h2>
                <p>Contact us and we’ll get back to you as soon as possible.</p>
                <Button className="btn-rqSubmit" type="primary" size="large">
                  Submit a Request
                </Button>
              </div>
            </CtaWrap>
          </div>
        </KnowledgebaseArticleWrap>
      </Main>
    </>
  );
};

KnowledgeBase.propTypes = {
  match: propTypes.object,
};

export default KnowledgeBase;
