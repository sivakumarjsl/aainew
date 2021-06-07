/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SingleKnowledgeDetails from './overview/SingleKnowledge/SingleKnowledgeDetails';
import GeneralKnowledgeTop from './overview/GeneralKnowledgeTop';
import { KnowledgebaseArticleWrap, SingleKnowledgeContent, SidebarNavWrap } from './style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Button } from '../../../components/buttons/buttons';
import { Main } from '../../styled';
import { ShareButtonPageHeader } from '../../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../../components/buttons/calendar-button/calendar-button';

const SingleKnowledge = () => {
  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
  });
  const [open, setOpen] = useState('menu1');
  const { responsive, collapsed } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed,
    });
  };

  return (
    <>
      <PageHeader
        title="All Article"
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
        <GeneralKnowledgeTop />
        <KnowledgebaseArticleWrap>
          <div className="knowledgebase-article-container">
            <div className="sDash_paginaion">
              <ul>
                <li>
                  <Link className="active" to="/admin/knowledgebase/plugins">
                    Doc Home
                  </Link>
                </li>
                <li>
                  <Link className="active" to="#">
                    Switch between accounts
                  </Link>
                </li>
                <li>
                  <Link className="active" to="#">
                    Introduction to Plugin
                  </Link>
                </li>
                <li>
                  <span>Plugins</span>
                </li>
              </ul>
              {responsive <= 991 && (
                <Button type="primary" className="knowledge-sidebar-trigger" onClick={toggleCollapsed}>
                  <FeatherIcon icon={collapsed ? 'align-left' : 'align-right'} />
                </Button>
              )}
            </div>
            <SingleKnowledgeContent>
              {responsive > 991 ? (
                <SidebarNavWrap>
                  <div className="knowledge-sidebar">
                    <h4 className="knowledge-sidebar__title">Plugins</h4>
                    <ul>
                      <li>
                        <Link to="#" onClick={() => setOpen('menu1')} className={open === 'menu1' ? 'active' : ''}>
                          <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                          <span className="menu-text">Introduction to Plugin</span>
                        </Link>
                        <ul className={open === 'menu1' ? 'submenu show' : 'submenu'}>
                          <li>
                            <Link to="#" className="active">
                              Switch between accounts
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                          </li>
                          <li>
                            <Link to="#">Stop getting emails from lorem</Link>
                          </li>
                          <li>
                            <Link to="#">Threads to organize discussions</Link>
                          </li>
                          <li>
                            <Link to="#">Understand your actions in lorem</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" onClick={() => setOpen('menu2')} className={open === 'menu2' ? 'active' : ''}>
                          <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                          <span className="menu-text">Productivity tools for your Plugin admin & change password</span>
                        </Link>
                        <ul className={open === 'menu2' ? 'submenu show' : 'submenu'}>
                          <li>
                            <Link to="#">Switch between accounts</Link>
                          </li>
                          <li>
                            <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                          </li>
                          <li>
                            <Link to="#">Stop getting emails from lorem</Link>
                          </li>
                          <li>
                            <Link to="#">Threads to organize discussions</Link>
                          </li>
                          <li>
                            <Link to="#">Understand your actions in lorem</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" onClick={() => setOpen('menu3')} className={open === 'menu3' ? 'active' : ''}>
                          <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                          <span className="menu-text">Download, install, and upgrade</span>
                        </Link>
                        <ul className={open === 'menu3' ? 'submenu show' : 'submenu'}>
                          <li>
                            <Link to="#">Switch between accounts</Link>
                          </li>
                          <li>
                            <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                          </li>
                          <li>
                            <Link to="#">Stop getting emails from lorem</Link>
                          </li>
                          <li>
                            <Link to="#">Threads to organize discussions</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" onClick={() => setOpen('menu4')} className={open === 'menu4' ? 'active' : ''}>
                          <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                          <span className="menu-text">Explore plans & features</span>
                        </Link>
                        <ul className={open === 'menu4' ? 'submenu show' : 'submenu'}>
                          <li>
                            <Link to="#">Switch between accounts</Link>
                          </li>
                          <li>
                            <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                          </li>
                          <li>
                            <Link to="#">Stop getting emails from lorem</Link>
                          </li>
                          <li>
                            <Link to="#">Threads to organize discussions</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" onClick={() => setOpen('menu5')} className={open === 'menu5' ? 'active' : ''}>
                          <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                          <span className="menu-text">Explore plans & features</span>
                        </Link>
                        <ul className={open === 'menu5' ? 'submenu show' : 'submenu'}>
                          <li>
                            <Link to="#">Switch between accounts</Link>
                          </li>
                          <li>
                            <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                          </li>
                          <li>
                            <Link to="#">Stop getting emails from lorem</Link>
                          </li>
                          <li>
                            <Link to="#">Threads to organize discussions</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" onClick={() => setOpen('menu6')} className={open === 'menu6' ? 'active' : ''}>
                          <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                          <span className="menu-text">Profile Settings</span>
                        </Link>
                        <ul className={open === 'menu6' ? 'submenu show' : 'submenu'}>
                          <li>
                            <Link to="#">Switch between accounts</Link>
                          </li>
                          <li>
                            <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                          </li>
                          <li>
                            <Link to="#">Stop getting emails from lorem</Link>
                          </li>
                          <li>
                            <Link to="#">Threads to organize discussions</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" onClick={() => setOpen('menu7')} className={open === 'menu7' ? 'active' : ''}>
                          <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                          <span className="menu-text">Listings Management</span>
                        </Link>
                        <ul className={open === 'menu7' ? 'submenu show' : 'submenu'}>
                          <li>
                            <Link to="#">Switch between accounts</Link>
                          </li>
                          <li>
                            <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                          </li>
                          <li>
                            <Link to="#">Stop getting emails from lorem</Link>
                          </li>
                          <li>
                            <Link to="#">Threads to organize discussions</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#" onClick={() => setOpen('menu8')} className={open === 'menu8' ? 'active' : ''}>
                          <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                          <span className="menu-text">Miscellaneous</span>
                        </Link>
                        <ul className={open === 'menu8' ? 'submenu show' : 'submenu'}>
                          <li>
                            <Link to="#">Switch between accounts</Link>
                          </li>
                          <li>
                            <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                          </li>
                          <li>
                            <Link to="#">Stop getting emails from lorem</Link>
                          </li>
                          <li>
                            <Link to="#">Threads to organize discussions</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </SidebarNavWrap>
              ) : (
                <div className={collapsed ? 'knowledge-sidebar-wrap show' : 'knowledge-sidebar-wrap hide'}>
                  <SidebarNavWrap>
                    <div className="knowledge-sidebar">
                      <h4 className="knowledge-sidebar__title">
                        Plugins
                        <Button type="link" className="trigger-close" onClick={toggleCollapsed}>
                          <FeatherIcon icon="x" />
                        </Button>
                      </h4>
                      <ul>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu1')} className={open === 'menu1' ? 'active' : ''}>
                            <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                            <span className="menu-text">Introduction to Plugin</span>
                          </Link>
                          <ul className={open === 'menu1' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#" className="active">
                                Switch between accounts
                              </Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                            <li>
                              <Link to="#">Understand your actions in lorem</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu2')} className={open === 'menu2' ? 'active' : ''}>
                            <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                            <span className="menu-text">
                              Productivity tools for your Plugin admin & change password
                            </span>
                          </Link>
                          <ul className={open === 'menu2' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                            <li>
                              <Link to="#">Understand your actions in lorem</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu3')} className={open === 'menu3' ? 'active' : ''}>
                            <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                            <span className="menu-text">Download, install, and upgrade</span>
                          </Link>
                          <ul className={open === 'menu3' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu4')} className={open === 'menu4' ? 'active' : ''}>
                            <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                            <span className="menu-text">Explore plans & features</span>
                          </Link>
                          <ul className={open === 'menu4' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu5')} className={open === 'menu5' ? 'active' : ''}>
                            <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                            <span className="menu-text">Explore plans & features</span>
                          </Link>
                          <ul className={open === 'menu5' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu6')} className={open === 'menu6' ? 'active' : ''}>
                            <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                            <span className="menu-text">Profile Settings</span>
                          </Link>
                          <ul className={open === 'menu6' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu7')} className={open === 'menu7' ? 'active' : ''}>
                            <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                            <span className="menu-text">Listings Management</span>
                          </Link>
                          <ul className={open === 'menu7' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu8')} className={open === 'menu8' ? 'active' : ''}>
                            <FeatherIcon icon={open === 'menu1' ? 'chevron-down' : 'chevron-up'} size={14} />{' '}
                            <span className="menu-text">Miscellaneous</span>
                          </Link>
                          <ul className={open === 'menu8' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </SidebarNavWrap>
                </div>
              )}

              <SingleKnowledgeDetails />
            </SingleKnowledgeContent>
          </div>
          <span
            role="button"
            tabIndex="0"
            onKeyPress={() => {}}
            className={collapsed ? 'sidebar-shade show' : 'sidebar-shade'}
            onClick={toggleCollapsed}
          />
        </KnowledgebaseArticleWrap>
      </Main>
    </>
  );
};

export default SingleKnowledge;
