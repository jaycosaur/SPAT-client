import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import * as actions from './store/actions/authActions'
import { connect } from 'react-redux'

import Routes from "./Routes";
import SiderNav from "./components/SiderNav";
import TopNav from "./components/TopNav";
import FooterComponent from "./components/Footer"
import AuthHeader from './components/AuthHeader'

import { Layout, Icon, Spin, BackTop } from 'antd';
import GetWindowDimensions from './components/GetWindowDimensions'

const { Header, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      alertVisible: true,
      collapsed: true,
      currentLocation: "home",
      userType: "premium",
      showAlert: false,
      authenticationErrorMessage: null,
    };
  }

  componentDidMount() {
    this.props.getCurrentSession()
    this.props.getCurrentUser()
  }

  handleLogout = async event => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );
    if (!confirmed) {
      return;
    }
    this.props.logout()
  }

  render() {
    const childProps = {
      isAuthenticated: this.props.authentication.isAuthenticated,
      alertVisible: this.props.authentication.alertVisible,
      window: this.props.window
    };
  
    const LayoutContainer = (props) => 
      <Layout style={{ marginLeft: 80, minHeight: '100vh' }}>
        <AuthHeader />
        <Content>
          <Routes childProps={childProps} />
        </Content>
        < FooterComponent />
      </Layout>

    const SiderContainer = (props) =>
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
        style={{ background: '#fff', overflow: 'auto', height: '100vh', position: 'fixed', left: 0, zindex: 1000, boxShadow: "2px 0px 4px -2px #bbb" }}
        >
        <div style={{padding: "6px 15px"}}>
          <img src="https://image.ibb.co/iiDnGb/Screen_Shot_2018_01_04_at_1_09_50_pm.png" alt="Screen_Shot_2018_01_04_at_1_09_50_pm" height="50" width="50"/>
        </div>
        <SiderNav handleLogout={this.handleLogout}/>
      </Sider>

    const AuthenticatedView = (props) => 
      <Layout style={{background: "#fff"}}>
        <BackTop />
        <SiderContainer />
        <LayoutContainer />
      </Layout>

    const UnauthenticatedView = (props) =>
      <Layout style={{maxWidth: this.props.window.width}}>
        <BackTop />
        <Header style={{position: 'fixed', width:'100%', padding: '0px', background: 'none', zIndex: '500'}}>
          <TopNav window={this.props.window}/>
        </Header>
        <Content style={{marginTop: 64}}>
          <Routes {...childProps} />
        </Content>
        <FooterComponent window={this.props.window} />
      </Layout>

    const AuthenticatingView = (props) => 
      <div style={{height:'100vh',display:'flex',alignItems: 'center',justifyContent: 'center'}}>
        <Spin
          indicator={<Icon type='loading' style={{fontSize: '100px', color: 'rgb(159,193,69)'}}/>}
          />
      </div>


    return (
      <GetWindowDimensions>
          {!this.props.authentication.isAuthenticating&&this.props.authentication.isAuthenticated&&<AuthenticatedView />}
          {!this.props.authentication.isAuthenticating&&!this.props.authentication.isAuthenticated&&<UnauthenticatedView />}
          {this.props.authentication.isAuthenticating&&<AuthenticatingView />}
      </GetWindowDimensions>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authentication: state.authentication,
    window: state.window
  }
}

const AppConnect = connect(mapStateToProps, actions)(App)

export default withRouter(AppConnect);