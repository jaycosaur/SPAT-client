import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Row, message} from 'antd';
import { Link } from 'react-router-dom'
import { Auth } from "aws-amplify"
import "./Login.css";
import Particles from 'particlesjs'

const FormItem = Form.Item;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  handleSubmit = async event => {
    this.setState({ isLoading: true });  
    try {
      await Auth.signIn(event.userName, event.password);
      this.props.userHasAuthenticated(true);
      //alert("Logged in");
    } catch (e) {
      message.error(e.code + ': ' + e.message)
      this.setState({ isLoading: false });   
    }
  }

  componentDidMount(){
    this.particles = Particles.init({
      selector: '.background',
      color: ['#fff'],
      connectParticles: false,
      sizeVariations: 3,
      responsive: [{
        breakpoint: 800,
        options: {
          color: '#00C9B1',
          maxParticles: 300,
          connectParticles: false,
        }
      }]
    });
  }

  render() {
    return (
      <div className="Login" style= {{paddingTop: 100}}>
        <canvas className="background" style={{position: "absolute", left:0, top:0, right:0, bottom: 0, zIndex: 0}}/>
        <div style={{zIndex: 10}}>
          <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 20}}>
            <img alt="SPAT Icon" src="SPATICON-white.png" height="150" width="150" />
          </div>
          <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 20}}><h1 style={{color: "white"}}>Login</h1></div>
          <WrappedNormalLoginForm loading={this.state.isLoading} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

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
          <Row style={{marginTop: '16px'}} justify="space-between" type="flex">
            <Button icon="user" loading={this.props.loading} style={{width:'45%'}} size='large' htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <Link style={{width:'45%'}} to="/pricing/choose-a-plan"><Button icon="user-add" ghost style={{width:'100%'}} size='large' className="login-form-button">
              Signup
            </Button></Link>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);