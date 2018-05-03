import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import { Auth } from 'aws-amplify'

import Routes from "./Routes";
import SiderNav from "./components/SiderNav";
import TopNav from "./components/TopNav";
import FooterComponent from "./components/Footer"

import { Layout, Icon, Spin, Row, BackTop, Alert, Button, Tooltip } from 'antd';

const { Header, Sider, Content } = Layout;

export const AppContext = createContext()


// sub components


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
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    }
    catch(e) {
      this.setState({
        authenticationErrorMessage: e,
      })
    }
    this.setState({ isAuthenticating: false });
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );
    if (!confirmed) {
      return;
    }
    await Auth.signOut();
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

    const headerStyle = { 
      background: '#fff', 
      paddingLeft: '16px', 
      color: '#000', 
      borderRadius: '0 0 32px 0',
      border: "1px solid #a0cf67",
      borderWidth: "0 1px 1px 0"
    }

    /*const headerStyle = { 
      background: 'linear-gradient(to right, rgb(22,85,151), #1a9ed9,rgb(159,193,69))', 
      paddingLeft: '16px', 
      color: '#fff', 
      borderRadius: '0 0 32px 0'*/
          
    class HeaderBar extends Component {
      constructor(props){
        super(props)
        this.state = {
          isFocused: false,
          isHovered: false
        }
      }

      toggleHover = () => {
        this.setState((state) => {return {isHovered: !state.isHovered}})
      }

      render() {
        return (
          <Header 
              style={headerStyle}
              >
            <span style={{float: "right"}}>
              <Tooltip placement="bottomLeft" title={<span>Need to call us?</span>}>
                <Button shape="circle" icon="phone" size="large" style={{color: "#a0cf67", background: "white", border: "1px solid #a0cf67", marginRight: "0.5em"}}/>
              </Tooltip>
              <Tooltip placement="bottom" title={<span>Have a question?</span>}>
                <Button shape="circle" icon="question" size="large" style={{color: "#a0cf67", background: "white", border: "1px solid #a0cf67", marginRight: "0.5em"}}/>
              </Tooltip>
              <Tooltip placement="bottomRight" title={<span>Tell us about an issue?</span>}>
                <Button shape="circle" icon="warning" size="large" style={{color: "#a0cf67", background: "white", border: "1px solid #a0cf67"}}/>
              </Tooltip>
            </span>
            <Row>
              <span style={{fontSize: "1.2em"}}>{"Spend Analysis Tool".toUpperCase()}</span> <span>Making spend analysis fast, easy and accurate.</span>
            </Row>
          </Header>
        )
      }
    }
  
    const LayoutContainer = (props) => 
      <Layout style={{ marginLeft: 80, minHeight: '100vh' }}>
        {<HeaderBar />}
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