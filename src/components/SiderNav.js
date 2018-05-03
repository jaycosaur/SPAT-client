import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Menu, Icon } from 'antd';

const menuList = [
    {key:"datasets", href:"/", icon:<Icon type="home" />, text:"Home"},
    {key:"analyse", href:"/analysisdashboard", icon:<Icon type="dot-chart" />, text:"Analyse"},
    {key:"classify", href:"/datasets/upload", icon:<Icon type="cloud-upload-o" />, text:"Classify"},
    {key:"contact", href:"/contact", icon:<Icon type="message" />, text:"Contact"},
    {key:"profile", href:"/myprofile", icon:<Icon type="user" />, text:"Profile"}
  ]

export default props =>
  <Menu>
    <Menu.Divider/>
    {
      menuList.map(item =>
        <Menu.Item key={item.key}>
          <MenuItemContents 
            key={item.key} 
            icon={item.icon} 
            text={item.text} 
            href={item.href}/>
        </Menu.Item>
      )
    }
    <Menu.Item key="logout" >
        <Icon type="logout" onClick={props.handleLogout}/>
        <span>Logout</span>
    </Menu.Item>
  </Menu>

const MenuItemContents = (props) =>
  <Fragment>
    <Link to={props.href}>
        {props.icon}
      <span>{props.text}</span>
    </Link>
  </Fragment>