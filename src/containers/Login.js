import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Row, message} from 'antd';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from "amazon-cognito-identity-js";

import "./Login.css";

import Logo from '../components/SpatLogo';


import config from "../config";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
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
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your Email!' }],
          })(
            <Input size='large' prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem style={{marginBottom: '5px'}}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input size='large' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Row>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox style={{float: 'left', color: '#000'}}>Remember me</Checkbox>
            )}
            <a style={{float: 'right'}} className="login-form-forgot" href="/login/resetpassword">Forgot password</a>
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

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  login(email, password) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authenticationData = { Username: email, Password: password };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
  
    return new Promise((resolve, reject) =>
      user.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(),
        onFailure: err => reject(err)
      })
    );
  }

  handleSubmit = async event => {
    this.setState({ isLoading: true });    
    try {
      await this.login(event.userName, event.password);
      this.props.userHasAuthenticated(true);
    } catch (e) {
      message.error(e.code + ': ' + e.message)
      this.setState({ isLoading: false });      
    }
  }

  render() {
    return (
      <div className="Login">
        <div className="text-center">
          <Logo />
        </div>
        <WrappedNormalLoginForm loading={this.state.isLoading} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}