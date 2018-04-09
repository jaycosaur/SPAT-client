import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Anchor, Card, Col } from 'antd';
import { Link } from 'react-router-dom'
import Recaptcha from 'react-recaptcha'
import "./Signup.css";
import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import config from "../../config";

const FormItem = Form.Item;

class SignupInformationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleSubmit(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your Email!' }],
          })(
            <Input size='large' prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email - This will be used for signin" />
          )}
        </FormItem>
        <FormItem>
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('givenName', {
                rules: [{ required: true, message: 'Please input your Email!' }],
              })(
                <Input size='large' prefix={<Icon type="skin" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" />
              )}
            </Col>
            <Col span={12}>
              {getFieldDecorator('familyName', {
                rules: [{ required: true, message: 'Please input your Email!' }],
              })(
                <Input size='large' prefix={<Icon type="car" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" />
              )}
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          {getFieldDecorator('phoneNumber', {
            rules: [{ required: true, message: 'Please input your Email!' }],
          })(
            <Input size='large' prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone Number" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('organisation', {
            rules: [{ required: true, message: 'Please input your Email!' }],
          })(
            <Input size='large' prefix={<Icon type="shop" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Organisation" />
          )}
        </FormItem>
        <FormItem>
          <Row style={{marginTop: '16px'}}>
            <Button loading={this.props.loading} style={{width:'100%'}} size='large' htmlType="submit" className="login-form-button">
              Next Page<Icon type="arrow-right" />
            </Button>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

class SignupPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userVerified: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleSubmit(values);
      }
    });
  }

  verifyCallback = () => {
    this.setState({
      userVerified: true
    })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('The two passwords that you have entered are inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input size='large' placeholder="Password" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input size='large' placeholder="Confirm Password" type="password" onBlur={this.handleConfirmBlur} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
          )}
        </FormItem>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Recaptcha verifyCallback={this.verifyCallback} sitekey="6Lfs6VEUAAAAAOTvGt__Q6U6achFCq6wrTQ8pbGn"/>
          {this.state.userVerified?"Tes":"toe"}
        </div>
        <FormItem>
          <Row>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox style={{float: 'left', color: '#fff'}}>I agree to the terms and conditions</Checkbox>
            )}
            <a style={{float: 'right'}} className="login-form-forgot" href="/login/resetpassword">Already signed up?</a>
          </Row>
          <Row style={{marginTop: '16px'}}>
            <Button loading={this.props.loading} style={{width:'100%'}} size='large' htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

class SignupConfirmationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userVerified: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleSubmit(values);
      }
    });
  }

  verifyCallback = () => {
    this.setState({
      userVerified: true
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <FormItem>
          {getFieldDecorator('confirmationCode', {
            rules: [{
              required: true, message: 'Please input the confirmation code!',
            }],
          })(
            <Input size='large' placeholder="Confirmation Code" type="number" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
          )}
        </FormItem>
        <FormItem>
          <Row style={{marginTop: '16px'}} type="flex" justify="space-between">
            <Button icon="safety" loading={this.props.loading} style={{width:'45%'}} size='large' htmlType="submit" className="login-form-button">
              Verify
            </Button>
            <Button ghost icon="mail" loading={this.props.loading} style={{width:'45%'}} size='large' className="login-form-button">
              Re-send Email
            </Button>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSignupInformationForm = Form.create()(SignupInformationForm);
const WrappedSignupPasswordForm = Form.create()(SignupPasswordForm);
const WrappedSignupConfirmationForm = Form.create()(SignupConfirmationForm);



export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      givenName: "",
      familyName: "",
      phoneNumber: "",
      organisation: "",
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null,
      informationForm: {},
      passwordForm: {},
      page: "information"
    };
  }

  userSignup = async () => {
    this.setState({ isLoading: true });
    try {
      const newUser = await this.signup(
        this.state.informationForm.givenName,
        this.state.informationForm.familyName,
        this.state.informationForm.phoneNumber,
        this.state.informationForm.organisation,
        this.state.informationForm.email, 
        this.state.passwordForm.password);
      this.setState({
        newUser: newUser
      })
    } catch (e) {
      alert(e);
    }
    this.setState({ isLoading: false });
  }

  signup(givenName, familyName, phoneNumber, organisation, email, password) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });

    var dataGivenName = {
      Name : 'given_name',
      Value : givenName
    };
    var dataFamilyName = {
      Name : 'family_name',
      Value : familyName
    };
    var dataPhoneNumber = {
      Name : 'phone_number',
      Value : phoneNumber
    };
    var dataOrganisation = {
      Name : 'organisation',
      Value : organisation
    };

    var attributeGivenName = new CognitoUserAttribute(dataGivenName);
    var attributeFamilyName = new CognitoUserAttribute(dataFamilyName);
    var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    var attributeOrganisation = new CognitoUserAttribute(dataOrganisation);

    var attributeList = [attributeGivenName, attributeFamilyName, attributePhoneNumber, attributeOrganisation];
  
    return new Promise((resolve, reject) =>
      userPool.signUp(email, password, [], null, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result.user);
      })
    );
  }
  
  handleInformationSubmit = (event) => {
    this.setState({ 
      informationForm: event,
      page: "password"
    });
  }

  handlePasswordSubmit = (event) => {
    this.setState({ 
      passwordForm: event,
      page: "confirm"
    });
  }

  handleConfirmSubmit = (event) => {
    this.setState({ 
      confirmForm: event,
    });
  }

  confirmEmail = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      await this.confirm(this.state.newUser, this.state.confirmForm.confirmationCode);
      await this.authenticate(
        this.state.newUser,
        this.state.informationForm.email,
        this.state.passwordForm.password
      );
      this.props.userHasAuthenticated(true);
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  confirm(user, confirmationCode) {
    return new Promise((resolve, reject) =>
      user.confirmRegistration(confirmationCode, true, function(err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      })
    );
  }
  
  authenticate(user, email, password) {
    const authenticationData = {
      Username: email,
      Password: password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
  
    return new Promise((resolve, reject) =>
      user.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(),
        onFailure: err => reject(err)
      })
    );
  }

  render() {
    const planType = this.props.match.params.plan

    const SignupPageContainer = (props) => (
      <div className="Signup" style={{paddingBottom: 20, minHeight: "100vh"}}>
        <Anchor offsetTop={66} style={{opacity: 0.95}}>
          <Card bordered={false} bodyStyle={{padding: "10px 40px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                <span>
                  <span style={{color: "#54b948", fontSize:"20px", fontWeight:'500', position: 'relative', top: '-20px'}}>$</span>
                  <span style={{color: "#54b948", fontSize:"48px"}}>{"1,299"}</span>
                  <span style={{color: "#54b948", fontSize:"20px", fontWeight:'500', position: 'relative', top: '-20px'}}> month</span>
                </span>
                <div style={{marginLeft: 30, marginRight: 30}}>
                  <h1 style={{margin: 0}}>Premium Plan</h1>
                </div>
                <h4 style={{margin: 0}}>Unlimited reports and expert consultant analysis</h4>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", flexDirection: "column"}}>
                <Link to="/pricing/choose-a-plane"><Button ghost size="large" type="primary" shape="circle" icon="wallet" /></Link>
                Change Plan
              </div>
            </div>
          </Card>
        </Anchor>
        <div style={{marginBottom: 20, marginTop: 60, display: "flex", justifyContent: "center"}}>
          <img alt="SPAT Icon" src="/SPATICON-white.png" height="150" width="150" />
        </div>
        <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 20}}><h1 style={{color: "white"}}>{props.pageTitle}</h1></div>
        {props.render}
      </div>)

    switch (this.state.page) {
      case "information":
        return <SignupPageContainer pageTitle="Signup - Information" render={<WrappedSignupInformationForm loading={this.state.isLoading} handleSubmit={this.handleInformationSubmit}/>}/>
      case "password":
        return <SignupPageContainer pageTitle="Signup - Password" render={<WrappedSignupPasswordForm loading={this.state.isLoading} handleSubmit={this.handlePasswordSubmit}/>}/>
      case "confirm":
        return <SignupPageContainer pageTitle="Signup- Confirm Email " render={<WrappedSignupConfirmationForm loading={this.state.isLoading} handleSubmit={this.handleConfirmSubmit}/>}/>
      default:
        return <SignupPageContainer pageTitle="Signup - Information" render={<WrappedSignupInformationForm loading={this.state.isLoading} handleSubmit={this.handleInformationSubmit}/>}/>
    }
  }
}




