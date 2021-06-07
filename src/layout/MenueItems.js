import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import versions from '../demoData/changelog.json';

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu, events }) => {
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const { onRtlChange, onLtrChange, modeChangeDark, modeChangeLight, modeChangeTopNav, modeChangeSideNav } = events;
  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      <SubMenu key="dashboard" icon={!topMenu && <FeatherIcon icon="home" />} title="Dashboard">
        <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Social Media
          </NavLink>
        </Menu.Item>
        <Menu.Item key="business">
          <NavLink onClick={toggleCollapsed} to={`${path}/business`}>
            Fintech / Business
          </NavLink>
        </Menu.Item>
        <Menu.Item key="performance">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Site Performance
          </NavLink>
        </Menu.Item>
        <Menu.Item key="eco">
          <NavLink onClick={toggleCollapsed} to={`${path}/eco`}>
            Ecommerce
          </NavLink>
        </Menu.Item>
        <Menu.Item key="crm">
          <NavLink onClick={toggleCollapsed} to={`${path}/crm`}>
            CRM
          </NavLink>
        </Menu.Item>
        <Menu.Item key="sales">
          <NavLink onClick={toggleCollapsed} to={`${path}/sales`}>
            Sales Performance
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="layout" icon={!topMenu && <FeatherIcon icon="layout" />} title="Layouts">
        <Menu.Item key="light">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeLight();
            }}
            to="#"
          >
            Light Mode
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dark">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeDark();
            }}
            to="#"
          >
            Dark Mode
          </NavLink>
        </Menu.Item>
        <Menu.Item key="topMenu">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeTopNav();
            }}
            to="#"
          >
            Top Menu
          </NavLink>
        </Menu.Item>
        <Menu.Item key="sideMenu">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              modeChangeSideNav();
            }}
            to="#"
          >
            Side Menu
          </NavLink>
        </Menu.Item>
        <Menu.Item key="rtl">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              onRtlChange();
            }}
            to="#"
          >
            RTL
          </NavLink>
        </Menu.Item>
        <Menu.Item key="ltr">
          <NavLink
            onClick={() => {
              toggleCollapsed();
              onLtrChange();
            }}
            to="#"
          >
            LTR
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/changelog`}>
              <FeatherIcon icon="activity" />
            </NavLink>
          )
        }
        key="changelog"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/changelog`}>
          Changelog
          <span className="badge badge-primary menuItem">{versions[0].version}</span>
        </NavLink>
      </Menu.Item>
      {!topMenu && <p className="sidebar-nav-title">Applications</p>}
      <SubMenu key="email" icon={!topMenu && <FeatherIcon icon="mail" />} title="Email">
        <Menu.Item key="inbox">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/inbox`}>
            Inbox
          </NavLink>
        </Menu.Item>
        <Menu.Item key="single">
          <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
            Read Email
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/main/chat/private/rofiq@gmail.com`}>
              <FeatherIcon icon="message-square" />
            </NavLink>
          )
        }
        key="chat"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/main/chat/private/rofiq@gmail.com`}>
          Chat
        </NavLink>
      </Menu.Item>
      <SubMenu key="ecommerce" icon={!topMenu && <FeatherIcon icon="shopping-cart" />} title="eCommerce">
        <Menu.Item key="products">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/products`}>
            Products
          </NavLink>
        </Menu.Item>
        <Menu.Item key="productDetails">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/productDetails/1`}>
            Product detail
          </NavLink>
        </Menu.Item>

        <Menu.Item key="add-product">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/add-product`}>
            Product Add
          </NavLink>
        </Menu.Item>

        <Menu.Item key="edit-product">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/edit-product`}>
            Product Edit
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cart">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/cart`}>
            Cart
          </NavLink>
        </Menu.Item>
        <Menu.Item key="orders">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/orders`}>
            Orders
          </NavLink>
        </Menu.Item>
        <Menu.Item key="sellers">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/sellers`}>
            Sellers
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Invoice">
          <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/Invoice`}>
            Invoices
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="profile" icon={!topMenu && <FeatherIcon icon="aperture" />} title="Social App">
        <Menu.Item key="myProfile">
          <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/overview`}>
            My Profile
          </NavLink>
        </Menu.Item>
        <Menu.Item key="profileTimeline">
          <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/timeline`}>
            Timeline
          </NavLink>
        </Menu.Item>
        <Menu.Item key="profileActivity">
          <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/activity`}>
            Activity
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="project" icon={!topMenu && <FeatherIcon icon="target" />} title="Project">
        <Menu.Item key="view">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/view/grid`}>
            Project Grid
          </NavLink>
        </Menu.Item>
        <Menu.Item key="views">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/view/list`}>
            Project List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="ProjectCreate">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/create`}>
            Create Project
          </NavLink>
        </Menu.Item>
        <Menu.Item key="projectDetails">
          <NavLink onClick={toggleCollapsed} to={`${path}/project/projectDetails/1`}>
            Project Details
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/app/calendar/month`}>
              <FeatherIcon icon="calendar" />
            </NavLink>
          )
        }
        key="calendar"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/app/calendar/month`}>
          Calendar
        </NavLink>
      </Menu.Item>

      <SubMenu key="users" icon={!topMenu && <FeatherIcon icon="users" />} title="Users">
        <Menu.Item key="team">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/team`}>
            Team
          </NavLink>
        </Menu.Item>
        <Menu.Item key="grid">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/grid`}>
            Users Grid
          </NavLink>
        </Menu.Item>
        <Menu.Item key="list">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/list`}>
            Users List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="grid-style">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/grid-style`}>
            Users Grid Style
          </NavLink>
        </Menu.Item>
        <Menu.Item key="grid-group">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/grid-group`}>
            Users Group
          </NavLink>
        </Menu.Item>
        <Menu.Item key="addUser">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
            Add User
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dataTable">
          <NavLink onClick={toggleCollapsed} to={`${path}/users/dataTable`}>
            Users Table
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="contact" icon={!topMenu && <FeatherIcon icon="user-plus" />} title="Contact">
        <Menu.Item key="grid">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/grid`}>
            Contact Grid
          </NavLink>
        </Menu.Item>
        <Menu.Item key="list">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/list`}>
            Contact List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="addNew">
          <NavLink onClick={toggleCollapsed} to={`${path}/contact/addNew`}>
            Contact Create
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/app/note/all`}>
              <FeatherIcon icon="file-text" />
            </NavLink>
          )
        }
        key="note"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/app/note/all`}>
          Note
        </NavLink>
      </Menu.Item>

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/app/to-do`}>
              <FeatherIcon icon="check-square" />
            </NavLink>
          )
        }
        key="to-do"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/app/to-do`}>
          To Do
        </NavLink>
      </Menu.Item>

      {/* <Menu.Item icon={!topMenu && <FeatherIcon icon="file" />} key="fileManager">
        <NavLink onClick={toggleCollapsed} to={`${path}/app/fileManager`}>
          File Manager
          <span className="badge badge-success">New</span>
        </NavLink>
      </Menu.Item> */}

      <Menu.Item
        icon={!topMenu && <ReactSVG className="sDash_menu-item-icon" src={require('../static/img/icon/columns.svg')} />}
        key="kanban"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/app/kanban`}>
          Kanban Board
        </NavLink>
      </Menu.Item>
      <SubMenu
        key="importExport"
        icon={!topMenu && <ReactSVG className="sDash_menu-item-icon" src={require('../static/img/icon/repeat.svg')} />}
        title={
          <>
            <span className="pl-0">Import Export</span>
          </>
        }
      >
        <Menu.Item key="import">
          <NavLink onClick={toggleCollapsed} to={`${path}/importExport/import`}>
            Import
          </NavLink>
        </Menu.Item>
        <Menu.Item key="export">
          <NavLink onClick={toggleCollapsed} to={`${path}/importExport/export`}>
            Export
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="file" />} key="task">
        <NavLink onClick={toggleCollapsed} to={`${path}/app/task/all`}>
          Task
          <span className="badge badge-success">New</span>
        </NavLink>
      </Menu.Item>

      {!topMenu && <p className="sidebar-nav-title">Crud</p>}

      <SubMenu key="crud" icon={!topMenu && <FeatherIcon icon="database" />} title="Axios">
        <Menu.Item key="axios-view">
          <NavLink onClick={toggleCollapsed} to={`${path}/crud/axios-view`}>
            View All
          </NavLink>
        </Menu.Item>
        <Menu.Item key="axios-add">
          <NavLink onClick={toggleCollapsed} to={`${path}/crud/axios-add`}>
            Add New
          </NavLink>
        </Menu.Item>
      </SubMenu>

      {!topMenu && <p className="sidebar-nav-title">Features</p>}

      <SubMenu key="components" icon={!topMenu && <FeatherIcon icon="layers" />} title="UI Elements">
        <Menu.Item key="alerts">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/alerts`}>
            Alerts
          </NavLink>
        </Menu.Item>
        <Menu.Item key="auto-complete">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/auto-complete`}>
            AutoComplete
          </NavLink>
        </Menu.Item>
        <Menu.Item key="avatar">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/avatar`}>
            Avatar
          </NavLink>
        </Menu.Item>
        <Menu.Item key="badge">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/badge`}>
            Badge
          </NavLink>
        </Menu.Item>
        <Menu.Item key="breadcrumb">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/breadcrumb`}>
            Breadcrumb
          </NavLink>
        </Menu.Item>
        <Menu.Item key="button">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/button`}>
            Button
          </NavLink>
        </Menu.Item>
        <Menu.Item key="calendar">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/calendar`}>
            Calendar
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cards">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/cards`}>
            Cards
          </NavLink>
        </Menu.Item>
        <Menu.Item key="carousel">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/carousel`}>
            Carousel
          </NavLink>
        </Menu.Item>
        <Menu.Item key="cascader">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/cascader`}>
            Cascader
          </NavLink>
        </Menu.Item>
        <Menu.Item key="checkbox">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/checkbox`}>
            Checkbox
          </NavLink>
        </Menu.Item>
        <Menu.Item key="collapse">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/collapse`}>
            Collapse
          </NavLink>
        </Menu.Item>
        <Menu.Item key="comments">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/comments`}>
            Comments
          </NavLink>
        </Menu.Item>
        <Menu.Item key="base">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/base`}>
            Dashboard Base
          </NavLink>
        </Menu.Item>
        <Menu.Item key="date-picker">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/date-picker`}>
            DatePicker
          </NavLink>
        </Menu.Item>
        <Menu.Item key="drag">
          <NavLink to="/admin/components/drag">Drag & Drop</NavLink>
        </Menu.Item>
        <Menu.Item key="drawer">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/drawer`}>
            Drawer
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dropdown">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/dropdown`}>
            Dropdown
          </NavLink>
        </Menu.Item>
        <Menu.Item key="empty">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/empty`}>
            Empty
          </NavLink>
        </Menu.Item>
        <Menu.Item key="grid">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/grid`}>
            Grid
          </NavLink>
        </Menu.Item>
        <Menu.Item key="input">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/input`}>
            Input
          </NavLink>
        </Menu.Item>
        <Menu.Item key="list">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/list`}>
            List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="menu">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/menu`}>
            Menu
          </NavLink>
        </Menu.Item>
        <Menu.Item key="message">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/message`}>
            Message
          </NavLink>
        </Menu.Item>
        <Menu.Item key="modals">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/modals`}>
            Modals
          </NavLink>
        </Menu.Item>
        <Menu.Item key="notification">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/notification`}>
            Notification
          </NavLink>
        </Menu.Item>
        <Menu.Item key="page-headers">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/page-headers`}>
            Page Headers
          </NavLink>
        </Menu.Item>
        <Menu.Item key="pagination">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/pagination`}>
            Paginations
          </NavLink>
        </Menu.Item>
        <Menu.Item key="confirme">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/confirm`}>
            Popconfirme
          </NavLink>
        </Menu.Item>
        <Menu.Item key="popover">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/popover`}>
            Popover
          </NavLink>
        </Menu.Item>
        <Menu.Item key="progress">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/progress`}>
            Progress
          </NavLink>
        </Menu.Item>
        <Menu.Item key="radio">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/radio`}>
            Radio
          </NavLink>
        </Menu.Item>
        <Menu.Item key="rate">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/rate`}>
            Rate
          </NavLink>
        </Menu.Item>
        <Menu.Item key="result">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/result`}>
            Result
          </NavLink>
        </Menu.Item>
        <Menu.Item key="select">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/select`}>
            Select
          </NavLink>
        </Menu.Item>
        <Menu.Item key="skeleton">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/skeleton`}>
            Skeleton
          </NavLink>
        </Menu.Item>
        <Menu.Item key="slider">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/slider`}>
            Slider
          </NavLink>
        </Menu.Item>
        <Menu.Item key="spiner">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/spiner`}>
            Spiner
          </NavLink>
        </Menu.Item>
        <Menu.Item key="statistic">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/statistic`}>
            Statistic
          </NavLink>
        </Menu.Item>
        <Menu.Item key="steps">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/steps`}>
            Steps
          </NavLink>
        </Menu.Item>
        <Menu.Item key="switch">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/switch`}>
            Switch
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tabs">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/tabs`}>
            Tabs
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tags">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/tags`}>
            Tags
          </NavLink>
        </Menu.Item>
        <Menu.Item key="timeline">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/timeline`}>
            Timeline
          </NavLink>
        </Menu.Item>
        <Menu.Item key="timepicker">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/timepicker`}>
            Timepicker
          </NavLink>
        </Menu.Item>
        <Menu.Item key="tree-select">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/tree-select`}>
            TreeSelect
          </NavLink>
        </Menu.Item>
        <Menu.Item key="upload">
          <NavLink onClick={toggleCollapsed} to={`${path}/components/upload`}>
            Upload
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="charts" icon={!topMenu && <FeatherIcon icon="bar-chart-2" />} title="Charts">
        <Menu.Item key="chartjs">
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/chartjs`}>
            Chart Js
          </NavLink>
        </Menu.Item>
        <Menu.Item key="google-chart">
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/google-chart`}>
            Google Charts
          </NavLink>
        </Menu.Item>

        <SubMenu key="recharts" icon={!topMenu && <FeatherIcon icon="bar-chart" />} title="Recharts">
          <Menu.Item key="bar">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/bar`}>
              Bar Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="area">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/area`}>
              Area Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="composed">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/composed`}>
              Composed Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="line">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/line`}>
              Line Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="pie">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/pie`}>
              Pie Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="radar">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/radar`}>
              Radar Charts
            </NavLink>
          </Menu.Item>
          <Menu.Item key="radial">
            <NavLink onClick={toggleCollapsed} to={`${path}/charts/recharts/radial`}>
              Radial Charts
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="peity">
          <NavLink onClick={toggleCollapsed} to={`${path}/charts/peity`}>
            Peity Charts
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="forms"
        icon={!topMenu && <FeatherIcon icon="disc" />}
        title={
          <>
            <span className="pl-0">
              Forms<span className="badge badge-success">New</span>
            </span>
          </>
        }
      >
        <Menu.Item key="form-layout">
          <NavLink onClick={toggleCollapsed} to={`${path}/form-layout`}>
            Form Layouts
          </NavLink>
        </Menu.Item>
        <Menu.Item key="form-elements">
          <NavLink onClick={toggleCollapsed} to={`${path}/form-elements`}>
            Form Elements
          </NavLink>
        </Menu.Item>
        <Menu.Item key="form-components">
          <NavLink onClick={toggleCollapsed} to={`${path}/form-components`}>
            Form Components
          </NavLink>
        </Menu.Item>
        <Menu.Item key="form-validation">
          <NavLink onClick={toggleCollapsed} to={`${path}/form-validation`}>
            Form Validation
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="tables" icon={!topMenu && <FeatherIcon icon="cpu" />} title="Table">
        <Menu.Item key="basic">
          <NavLink onClick={toggleCollapsed} to={`${path}/tables/basic`}>
            Basic Table
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dataTable">
          <NavLink onClick={toggleCollapsed} to={`${path}/tables/dataTable`}>
            Data Table
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="widgets" icon={!topMenu && <FeatherIcon icon="server" />} title="Widgets">
        <Menu.Item key="chart">
          <NavLink onClick={toggleCollapsed} to={`${path}/widgets/chart`}>
            Chart
          </NavLink>
        </Menu.Item>
        <Menu.Item key="card">
          <NavLink onClick={toggleCollapsed} to={`${path}/widgets/card`}>
            Card
          </NavLink>
        </Menu.Item>
        <Menu.Item key="mixed">
          <NavLink onClick={toggleCollapsed} to={`${path}/widgets/mixed`}>
            Mixed
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="wizards" icon={!topMenu && <FeatherIcon icon="square" />} title="Wizards">
        <Menu.Item key="one">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/one`}>
            Wizard 1
          </NavLink>
        </Menu.Item>
        <Menu.Item key="two">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/two`}>
            Wizard 2
          </NavLink>
        </Menu.Item>
        <Menu.Item key="three">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/three`}>
            Wizard 3
          </NavLink>
        </Menu.Item>
        <Menu.Item key="four">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/four`}>
            Wizard 4
          </NavLink>
        </Menu.Item>
        <Menu.Item key="five">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/five`}>
            Wizard 5
          </NavLink>
        </Menu.Item>
        <Menu.Item key="six">
          <NavLink onClick={toggleCollapsed} to={`${path}/wizards/six`}>
            Wizard 6
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="icons" icon={!topMenu && <FeatherIcon icon="grid" />} title="Icons">
        <Menu.Item key="feathers">
          <NavLink onClick={toggleCollapsed} to={`${path}/icons/feathers`}>
            Feather icons (svg)
          </NavLink>
        </Menu.Item>
        <Menu.Item key="font-awesome">
          <NavLink onClick={toggleCollapsed} to={`${path}/icons/font-awesome`}>
            Font Awesome
          </NavLink>
        </Menu.Item>
        <Menu.Item key="antd">
          <NavLink onClick={toggleCollapsed} to={`${path}/icons/antd`}>
            Ant Design icons
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/editor`}>
              <FeatherIcon icon="edit" />
            </NavLink>
          )
        }
        key="editor"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/editor`}>
          Editor
        </NavLink>
      </Menu.Item>

      <SubMenu key="maps" icon={!topMenu && <FeatherIcon icon="map" />} title="Maps">
        <Menu.Item key="google">
          <NavLink onClick={toggleCollapsed} to={`${path}/maps/google`}>
            Google Maps
          </NavLink>
        </Menu.Item>
        <Menu.Item key="leaflet">
          <NavLink onClick={toggleCollapsed} to={`${path}/maps/leaflet`}>
            Leaflet Maps
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Vector">
          <NavLink onClick={toggleCollapsed} to={`${path}/maps/Vector`}>
            Simple Map
          </NavLink>
        </Menu.Item>
      </SubMenu>

      {!topMenu && <p className="sidebar-nav-title">Pages</p>}

      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/settings`}>
              <FeatherIcon icon="settings" />
            </NavLink>
          )
        }
        key="settings"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/settings`}>
          Settings
        </NavLink>
      </Menu.Item>

      <SubMenu key="gallery" icon={!topMenu && <FeatherIcon icon="image" />} title="Gallery">
        <Menu.Item key="one">
          <NavLink onClick={toggleCollapsed} to={`${path}/gallery/one`}>
            Gallery 1
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="two">
          <NavLink onClick={toggleCollapsed} to={`${path}/gallery/two`}>
            Gallery 2
          </NavLink>
        </Menu.Item> */}
      </SubMenu>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/pricing`}>
              <FeatherIcon icon="dollar-sign" />
            </NavLink>
          )
        }
        key="pricing"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/pricing`}>
          Pricing
        </NavLink>
      </Menu.Item>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/banners`}>
              <FeatherIcon icon="cast" />
            </NavLink>
          )
        }
        key="banners"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/banners`}>
          Banners
        </NavLink>
      </Menu.Item>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/testimonials`}>
              <FeatherIcon icon="book-open" />
            </NavLink>
          )
        }
        key="testimonials"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/testimonials`}>
          Testimonials
        </NavLink>
      </Menu.Item>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/faq`}>
              <FeatherIcon icon="help-circle" />
            </NavLink>
          )
        }
        key="faq"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/faq`}>
          FAQs
        </NavLink>
      </Menu.Item>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/search`}>
              <FeatherIcon icon="search" />
            </NavLink>
          )
        }
        key="search"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/search`}>
          Search Results
        </NavLink>
      </Menu.Item>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/starter`}>
              <FeatherIcon icon="circle" />
            </NavLink>
          )
        }
        key="starter"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/starter`}>
          Blank Page
        </NavLink>
      </Menu.Item>
      <SubMenu
        key="knowledgebase"
        icon={!topMenu && <ReactSVG className="sDash_menu-item-icon" src={require('../static/img/icon/book.svg')} />}
        title={
          <>
            <span className="pl-0">Knowledge Base</span>
          </>
        }
      >
        <Menu.Item key="plugins">
          <NavLink onClick={toggleCollapsed} to={`${path}/knowledgebase/plugins`}>
            Knowledge Base
          </NavLink>
        </Menu.Item>
        <Menu.Item key="all-articles">
          <NavLink onClick={toggleCollapsed} to={`${path}/all-articles`}>
            All Article
          </NavLink>
        </Menu.Item>
        <Menu.Item key="knowledgebaseSingle">
          <NavLink onClick={toggleCollapsed} to={`${path}/knowledgebaseSingle/1`}>
            Single Article
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        icon={
          !topMenu && <ReactSVG className="sDash_menu-item-icon" src={require('../static/img/icon/headphone.svg')} />
        }
        key="support"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/support`}>
          Support Center
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="airplay" />} key="maintenance">
        <NavLink onClick={toggleCollapsed} to={`${path}/maintenance`}>
          Maintenance
        </NavLink>
      </Menu.Item>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/404`}>
              <FeatherIcon icon="info" />
            </NavLink>
          )
        }
        key="404"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/404`}>
          404
        </NavLink>
      </Menu.Item>
      <Menu.Item
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn" to={`${path}/comingSoon`}>
              <FeatherIcon icon="clock" />
            </NavLink>
          )
        }
        key="comingSoon"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}/comingSoon`}>
          Coming Soon
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  events: propTypes.object,
};

export default MenuItems;
