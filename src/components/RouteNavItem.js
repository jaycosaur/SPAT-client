import React from "react";
import { Route } from "react-router-dom";
import { Menu } from 'antd';

export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
      <Menu.Item
        {...props}
        active={match ? true : false}
      >
        {props.children}
      </Menu.Item>}
  />;