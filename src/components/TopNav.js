import React from "react";
import RouteNavItem from './RouteNavItem'
import { Route } from "react-router-dom";

import { Menu, Icon, Button } from 'antd';

export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
    <Menu
      mode="horizontal"
      style={{ 
        lineHeight: '64px',
        padding: '0px',
        background: '#fff',
       }}
      onClick={e => {
          if(e.item){
            history.push(e.item.props.href)            
          } else {
            e.preventDefault()
            if (e.target.id === 'login') {
              history.push('/login')                        
              
            } else if (e.target.id === 'signup') {
              history.push('/signup')                                      
            }
          }
        }
      }
    >
      <Menu.Item key="home" href='/'>
        <img src="https://image.ibb.co/iiDnGb/Screen_Shot_2018_01_04_at_1_09_50_pm.png" alt="Screen_Shot_2018_01_04_at_1_09_50_pm" height="50" width="50"/>
        <strong>SPAT</strong> | Spend Analysis Toolkit
      </Menu.Item>
      <RouteNavItem key="features" href="/features">
        <Icon type="layout" />
        <span>Features</span>
      </RouteNavItem>
      <RouteNavItem key="pricing" href="/pricing">
        <Icon type="credit-card" />
        <span>Pricing</span>
      </RouteNavItem>
      <RouteNavItem key="about" href="/about">
        <Icon type="team" />
        <span>About</span>
      </RouteNavItem>
      <RouteNavItem key="getintouch" href="/getintouch">
        <Icon type="customer-service" />
        <span>Contact</span>
      </RouteNavItem>
      <span style={{float:'right', paddingRight: '16px'}}>
        <Button id='login' style={{marginRight: '16px'}} key='login' href='/' type='primary'><Icon type="user" />Login</Button>
        <Button id='signup' key='signup' href="/signup" type='default'><Icon type="user-add" />Signup</Button>
      </span>
    </Menu>}
  />;