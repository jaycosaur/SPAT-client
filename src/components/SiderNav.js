import React from "react";
import RouteNavItem from './RouteNavItem'
import { Route } from "react-router-dom";

import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;


export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
    <Menu
      mode="inline"
      theme="light"
      onClick={e => {
        if (e.key === "logout") {
          props.handleLogout(e)
        } else {
          history.push(e.item.props.href)
        }
      }}
    >
      <Menu.Divider/>
      <RouteNavItem key="datasets" href="/">
        <Icon type="home" />
        <span>Home</span>
      </RouteNavItem>
      <RouteNavItem key="analyse" href="/analysisdashboard">
        <Icon type="dot-chart" />
        <span>Analyse</span>
      </RouteNavItem>
      <RouteNavItem key="classify" href="/datasets/upload">
        <Icon type="cloud-upload-o" />
        <span>Classify</span>
      </RouteNavItem>
      <RouteNavItem key="contact" href="/contact">
        <Icon type="message" />
        <span>Contact</span>
      </RouteNavItem>
      <RouteNavItem key="profile" href="/myprofile">
        <Icon type="user" />
        <span>Profile</span>
      </RouteNavItem>
      <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>SubMenu 2</span></span>}>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Divider />
      <RouteNavItem key="logout" onClick={this.handleLogout}>
        <Icon type="logout" />
        <span>Logout</span>
      </RouteNavItem>
    </Menu>}
  />;