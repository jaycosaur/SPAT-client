import React from "react";
import RouteNavItem from './RouteNavItem'
import { Route, Link } from "react-router-dom";

import { Menu, Icon, Button, Dropdown } from 'antd';

const WideTopNav = (props) =>
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
              history.push('/pricing/choose-a-plan')                                      
            }
          }
        }
      }
    >
      <Menu.Item key="home" href='/'>
        <img src="https://image.ibb.co/iiDnGb/Screen_Shot_2018_01_04_at_1_09_50_pm.png" alt="Screen_Shot_2018_01_04_at_1_09_50_pm" height="50" width="50"/>
        <strong>SPAT by Grosvenor</strong> | AI-powered spend analysis.
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
      <span style={{float:'right', paddingRight: '16px'}}>
        <Button id='signup' key='signup' href="/pricing" type='primary'>Try for free</Button>
        <Button id='login' style={{marginLeft: '16px'}} key='login' href='/' type='default'><Icon type="user" />Login</Button>
      </span>
    </Menu>}
  />;


const MobileTopNav = (props) => {
  const menu = (
    <Route
      path={props.href}
      exact
      children={({ match, history }) =>
      <Menu
        style={{ 
          lineHeight: '64px',
          padding: '0px',
          background: '#fff',
        }}
        onClick={e => history.push(e.item.props.href)}     
      >
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
        <RouteNavItem key="login" href="/login">
          <Icon type="user" />
          <span>Login</span>
        </RouteNavItem>
      </Menu>}
    />
  )

  return (
    <Menu style={{ 
      lineHeight: '64px',
      width: "64px",
      padding: '0px 1em',
      background: '#fff',
      width: props.window.window.width,
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center"
    }}>
      <Link to="/">
        <img src="https://image.ibb.co/iiDnGb/Screen_Shot_2018_01_04_at_1_09_50_pm.png" alt="Screen_Shot_2018_01_04_at_1_09_50_pm" height="50" width="50"/>
        <strong style={{color: "#444444"}}>SPAT by Grosvenor</strong>
      </Link>
      <Dropdown placement="bottomRight" overlay={menu}>
        <Button>
          Menu <Icon type="down" />
        </Button>
      </Dropdown>
    </Menu>
  )
}


const View = (props) => {
  switch(props.window.device){
    case "desktop":
      return <WideTopNav {...props}/>
    default:
      return <MobileTopNav {...props}/>
  }
}

export default View