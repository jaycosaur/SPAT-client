import React, { Component } from "react";

import { Row, Col, Card, Icon } from 'antd'
import { resetPassword } from "../../../libs/awsLib";

import ChangePassword from './../components/ChangePassword'

export default class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      oldPassword: "",
      password: "",
      confirmPassword: "",
    };
  }

  validateForm() {
    return (
        this.state.oldPassword.length > 0 &&      
        this.state.password.length > 0 &&
        this.state.confirmPassword.length > 0 &&
        this.state.password === this.state.confirmPassword
    );
  }

  passwordCriteria(){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,})");
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    if((this.state.password.length > 0) && strongRegex.test(this.state.password)) {
      return 'success';
    } else if((this.state.password.length > 0) && mediumRegex.test(this.state.password)) {
      return 'warning';
    } else if ((this.state.password.length > 0)){
      return 'error';
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    await resetPassword(event.password, event.newpassword);
    this.setState({ isLoading: false });
    alert("Successfully changed password!");    
  }

  renderUserInfo() {
    return (
      "Nothing to display."
    );
  }

  render() {
    return (
      <div className="MyProfile container-fluid">
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <ContainerCard title="Profile Information" extra={<Icon type="idcard" />}>{this.renderUserInfo()}</ContainerCard>
          </Col>
          <Col xs={24} md={12}>
            <ContainerCard title="Change Password" extra={<Icon type="lock" />}>
              <ChangePassword isLoading={this.state.isLoading} handleSubmit={this.handleSubmit}/>
            </ContainerCard>
          </Col>
        </Row>
      </div>
    );
  }
}

const ContainerCard = (props) => 
  <Card title={props.title} extra={props.extra} style={{marginBottom: 16}}>
    {props.children}
  </Card>