/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, lazy, Suspense, useLayoutEffect } from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Input, Form, Modal } from 'antd';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { FixedSidebar, SidebarWrap } from './style';
import { Main, BasicFormWrapper } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { taskAddData } from '../../redux/task/actionCreator';

const All = lazy(() => import('./overview/all'));
const Favourites = lazy(() => import('./overview/favourites'));
const Completed = lazy(() => import('./overview/completed'));

const Task = ({ match }) => {
  const [form] = Form.useForm();
  // const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const { taskData } = useSelector(state => {
    return {
      taskData: state.Task.data,
    };
  });
  const [state, setState] = useState({
    responsive: 0,
    collapsed: false,
    visible: false,
    modalType: 'primary',
  });

  const showModal = () => {
    setState({
      ...state,
      visible: true,
      collapsed: false,
    });
  };

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleAddTask = values => {
    handleCancel();
    const arrayData = [];
    taskData.map(data => {
      return arrayData.push(data.id);
    });
    const max = Math.max(...arrayData);
    dispatch(
      taskAddData([
        ...taskData,
        {
          ...values,
          id: max + 1,
          favourite: false,
          completed: false,
        },
      ]),
    );
  };
  const { path } = match;
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
        title="Task"
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
        <Row gutter={25}>
          <Col xl={5} lg={6} md={7} xs={24}>
            {responsive > 767 ? (
              <>
                <SidebarWrap className="mb-30">
                  <div className="sDash_taskApp-sidebar">
                    <Button className="sDash_btn-add" size="large" type="primary" raised onClick={showModal}>
                      <FeatherIcon icon="plus" size={16} />
                      Add Task
                    </Button>
                    <ul className="sDash_taskApp-sidebar__nav">
                      <li className="sDash_taskApp-sidebar__nav--item">
                        <NavLink className="sDash_taskApp-sidebar__nav--link" to={`${path}/all`}>
                          <span className="nav-item-icon">
                            <FeatherIcon icon="edit" size={16} />
                          </span>
                          <span className="nav-item-text">All</span>
                        </NavLink>
                      </li>
                      <li className="sDash_taskApp-sidebar__nav--item">
                        <NavLink className="sDash_taskApp-sidebar__nav--link" to={`${path}/favourites`}>
                          <span className="nav-item-icon">
                            <FeatherIcon icon="star" size={16} />
                          </span>
                          <span className="nav-item-text">Favourite</span>
                        </NavLink>
                      </li>
                      <li className="sDash_taskApp-sidebar__nav--item">
                        <NavLink className="sDash_taskApp-sidebar__nav--link" to={`${path}/completed`}>
                          <span className="nav-item-icon">
                            <FeatherIcon icon="check" size={16} />
                          </span>
                          <span className="nav-item-text">Completed</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </SidebarWrap>
                <Modal
                  title="Add Task"
                  className="sDash_addTask-modal"
                  type={state.modalType}
                  visible={state.visible}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <div className="sDash_addTask-modal-inner">
                    <BasicFormWrapper>
                      <Form form={form} name="add-task" onFinish={handleAddTask}>
                        <Form.Item rules={[{ required: true, message: 'Please add a Title' }]} name="title">
                          <Input placeholder="Title" />
                        </Form.Item>

                        <Form.Item name="description">
                          <Input.TextArea rows={4} placeholder="Add Description" />
                        </Form.Item>
                        <div className="sDash-modal-actions">
                          <Button size="small" type="white" key="cancel" outlined onClick={handleCancel}>
                            Cancel
                          </Button>
                          <Button htmlType="submit" size="small" type="primary" key="submit">
                            Add Task
                          </Button>
                        </div>
                      </Form>
                    </BasicFormWrapper>
                  </div>
                </Modal>
              </>
            ) : (
              <FixedSidebar className={collapsed ? 'show' : 'hide'}>
                <Link to="#" type="link" className="trigger-close" onClick={toggleCollapsed}>
                  <FeatherIcon icon="x" />
                </Link>
                <SidebarWrap className="mb-30">
                  <div className="sDash_taskApp-sidebar">
                    <Button className="sDash_btn-add" size="large" type="primary" raised onClick={showModal}>
                      <FeatherIcon icon="plus" size={16} />
                      Add Task
                    </Button>
                    <ul className="sDash_taskApp-sidebar__nav">
                      <li className="sDash_taskApp-sidebar__nav--item">
                        <NavLink className="sDash_taskApp-sidebar__nav--link" to={`${path}/all`}>
                          <span className="nav-item-icon">
                            <FeatherIcon icon="edit" size={16} />
                          </span>
                          <span className="nav-item-text">All</span>
                        </NavLink>
                      </li>
                      <li className="sDash_taskApp-sidebar__nav--item">
                        <NavLink className="sDash_taskApp-sidebar__nav--link" to={`${path}/favourites`}>
                          <span className="nav-item-icon">
                            <FeatherIcon icon="star" size={16} />
                          </span>
                          <span className="nav-item-text">Favourite</span>
                        </NavLink>
                      </li>
                      <li className="sDash_taskApp-sidebar__nav--item">
                        <NavLink className="sDash_taskApp-sidebar__nav--link" to={`${path}/completed`}>
                          <span className="nav-item-icon">
                            <FeatherIcon icon="check" size={16} />
                          </span>
                          <span className="nav-item-text">Completed</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </SidebarWrap>
                <Modal
                  title="Add Task"
                  className="sDash_addTask-modal"
                  type={state.modalType}
                  visible={state.visible}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <div className="sDash_addTask-modal-inner">
                    <BasicFormWrapper>
                      <Form form={form} name="add-task" onFinish={handleAddTask}>
                        <Form.Item rules={[{ required: true, message: 'Please add a Title' }]} name="title">
                          <Input placeholder="Title" />
                        </Form.Item>

                        <Form.Item name="description">
                          <Input.TextArea rows={4} placeholder="Add Description" />
                        </Form.Item>
                        <div className="sDash-modal-actions">
                          <Button size="small" type="white" key="cancel" outlined onClick={handleCancel}>
                            Cancel
                          </Button>
                          <Button htmlType="submit" size="small" type="primary" key="submit">
                            Add Task
                          </Button>
                        </div>
                      </Form>
                    </BasicFormWrapper>
                  </div>
                </Modal>
              </FixedSidebar>
            )}
          </Col>
          <Col xl={19} lg={18} md={17} xs={24}>
            {responsive <= 767 && (
              <div className="sidebar-trier-wrap text-center mb-30">
                <Button type="link" className="sidebar-trigger" style={{ marginTop: 0 }} onClick={toggleCollapsed}>
                  <FeatherIcon icon={collapsed ? 'align-left' : 'align-right'} />
                </Button>
              </div>
            )}
            <Switch>
              <Suspense
                fallback={
                  <div className="spin">
                    <Spin />
                  </div>
                }
              >
                <Route exact path={`${path}/all`} component={All} />
                <Route path={`${path}/favourites`} component={Favourites} />
                <Route path={`${path}/completed`} component={Completed} />
              </Suspense>
            </Switch>
          </Col>
        </Row>
        <span
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
          className={collapsed ? 'overlay-dark show' : 'overlay-dark'}
          onClick={toggleCollapsed}
        />
      </Main>
    </>
  );
};

Task.propTypes = {
  match: propTypes.object,
};

export default Task;
