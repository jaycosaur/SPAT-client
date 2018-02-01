import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import { authUser, signOutUser } from "./libs/awsLib";

import Routes from "./Routes";
import SiderNav from "./components/SiderNav";
import TopNav from "./components/TopNav";

import { Layout, Icon, Spin, Row, BackTop, Alert, Divider } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

const FooterComponent = (props) => 
  <Footer style={{ textAlign: 'center', background: 'rgb(159,193,69)', color:'#fff'}}>
    <span style={{float: 'left'}}>
      <a style={{color: '#fff'}}><strong>Privacy Policy</strong></a>
      <Divider type="vertical"/>
      <a style={{color: '#fff'}}><strong>Terms of Use</strong></a>
    </span>
    <span style={{float: 'center'}}>
      SPAT and its encapsulated tools are developed by <strong>grosvenor.digital</strong> | Copyright © {new Date().getFullYear()}
    </span>
    <span style={{float:'right'}}>
      <Icon type="facebook" style={{ fontSize: '24px', padding:'0 16px'}}/>
      <Icon type="twitter" style={{ fontSize: '24px', padding:'0 16px'}}/>
      <Icon type="linkedin" style={{ fontSize: '24px', padding:'0 16px'}}/>
    </span>
  </Footer>

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

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
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

    return (
      /*
      !this.state.isAuthenticating &&
      <div className="App container-fluid">
        <Navbar className="navbar" fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><span className="glyphicon glyphicon-flash"></span> <strong>SPAT</strong> - Spend Analytics Toolset</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="navbar-dark bg-dark">
            <Nav pullRight>
              {this.state.isAuthenticated
                ? [
                  <RouteNavItem key={1} href="/"><span className="glyphicon glyphicon-stats"></span> Analyse</RouteNavItem>,
                  <RouteNavItem key={2} href="/datasets/upload"><span className="glyphicon glyphicon-cloud-upload"></span> Classify</RouteNavItem>,
                  <RouteNavItem key={3} href="/contact"><span className="glyphicon glyphicon-envelope"></span> Contact </RouteNavItem>,
                  <RouteNavItem key={4} href="/myprofile"><span className="glyphicon glyphicon-user"></span> Profile</RouteNavItem>,
                  <NavItem key={5} onClick={this.handleLogout}><span className="glyphicon glyphicon-lock"></span> Logout</NavItem> ]
                : [
                  <RouteNavItem key={6} href="/login">
                    <strong>Login</strong>
                  </RouteNavItem>
                ]}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-fluid">
          <Routes childProps={childProps} />
        </div>
      </div>
      */
    [ this.state.showAlert&&<Alert onClose={e => {this.toggleAlert()}}type="error" message={this.state.authenticationErrorMessage&&(this.state.authenticationErrorMessage.code+': '+this.state.authenticationErrorMessage.message)} banner closable/>,  
      !this.state.isAuthenticating && this.state.isAuthenticated &&
    <Layout style={{background: "#fff"}}>
      <BackTop />
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
      <Layout style={{ marginLeft: 80, minHeight: '100vh' }}>
        {<Header style={{ background: 'linear-gradient(to right, rgb(22,85,151), #1a9ed9,rgb(159,193,69))', paddingLeft: '16px', color: '#fff', borderRadius: '0 0 32px 0' }}>
          <Row>
            <span><strong>SPAT - SPend Analytics Toolkit</strong></span> | <span style={{align: 'right'}}>grosvenor.digital</span>
          </Row>
        </Header>}
        <Content>
          <Routes childProps={childProps} />
        </Content>
        < FooterComponent />
      </Layout>
    </Layout>,
    !this.state.isAuthenticating && !this.state.isAuthenticated &&
    <Layout>
      <BackTop />
      <Header style={{position: 'fixed', width:'100%', padding: '0px', background: 'none', zIndex: '500'}}>
        <TopNav />
      </Header>
      <Content style={{marginTop: 64}}>
        <Routes childProps={childProps} />
      </Content>
      < FooterComponent />
    </Layout>,
    this.state.isAuthenticating&&
      <div style={{height:'100vh',display:'flex',alignItems: 'center',justifyContent: 'center'           
    }}>
        <Spin
          indicator={<Icon type='loading' style={{fontSize: '100px', color: 'rgb(159,193,69)'}}/>}
          />
      </div>
    ]
    )
  }
}

export default withRouter(App);