import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import { authUser, signOutUser } from "./libs/awsLib";

import Routes from "./Routes";
import SiderNav from "./components/SiderNav";
import TopNav from "./components/TopNav";
import FooterComponent from "./components/Footer"

import { Layout, Icon, Spin, Row, BackTop, Alert } from 'antd';
const { Header, Sider, Content } = Layout;

export const AppContext = createContext()

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

  handleMenuNavClick = (e) => {
    console.log(e.item.props.href)
    this.setState({
      currentLocation: e.key,
    });
  }

  async componentDidMount() {
    try {
      if (await authUser()) {
        this.userHasAuthenticated(true);
      }
    }
    catch(e) {
      this.setState({
        authenticationErrorMessage: e,
        showAlert: true
      })
    }
  
    this.setState({ isAuthenticating: false });
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );
    if (!confirmed) {
      return;
    }
    signOutUser();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  handleAlertDismiss() {
    this.setState({ alertVisible: false });
  }

  toggleAlert() {
    this.setState({
      showAlert: !this.state.showAlert
    })
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      alertVisible: this.alertVisible,
    };

    const LayoutContainer = (props) => 
      <Layout style={{ marginLeft: 80, minHeight: '100vh' }}>
        <Header style={{ background: 'linear-gradient(to right, rgb(22,85,151), #1a9ed9,rgb(159,193,69))', paddingLeft: '16px', color: '#fff', borderRadius: '0 0 32px 0' }}>
          <Row>
            <span>Spend Analytics Tool</span>
          </Row>
        </Header>
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
        style={{ background: '#fff', overflow: 'auto', height: '100vh', position: 'fixed', left: 0, zindex: 1000 }}
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
      <Layout>
        <BackTop />
        <Header style={{position: 'fixed', width:'100%', padding: '0px', background: 'none', zIndex: '500'}}>
          <TopNav />
        </Header>
        <Content style={{marginTop: 64}}>
          <Routes childProps={childProps} />
        </Content>
        < FooterComponent />
      </Layout>

    const AuthenticatingView = (props) => 
      <div style={{height:'100vh',display:'flex',alignItems: 'center',justifyContent: 'center'}}>
        <Spin
          indicator={<Icon type='loading' style={{fontSize: '100px', color: 'rgb(159,193,69)'}}/>}
          />
      </div>

    const UpperAlert = (props) => <Alert onClose={e => {this.toggleAlert()}}type="error" message={this.state.authenticationErrorMessage&&(this.state.authenticationErrorMessage.code+': '+this.state.authenticationErrorMessage.message)} banner closable/>

    return (
      <AppContext.Provider value={this.state}>
        {this.state.showAlert&&<UpperAlert />}
        {!this.state.isAuthenticating&&this.state.isAuthenticated&&<AuthenticatedView />}
        {!this.state.isAuthenticating&&!this.state.isAuthenticated&&<UnauthenticatedView />}
        {this.state.isAuthenticating&&<AuthenticatingView />}
      </AppContext.Provider>
    )
  }
}

export default withRouter(App);