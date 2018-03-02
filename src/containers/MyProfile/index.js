import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

import { Row, Col, Card, Icon } from 'antd'

import LoaderButton from "../../components/LoaderButton";
import "./MyProfile.css";
import { resetPassword } from "../../libs/awsLib";

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

  passwordsMatch() {
    if ((this.state.confirmPassword.length > 0) && (this.passwordCriteria() !== "error") && (this.state.password === this.state.confirmPassword)) return 'success';
    else if (this.state.confirmPassword.length > 0) return 'error';
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    await resetPassword(this.state.oldPassword, this.state.password);
    this.setState({ isLoading: false });
    alert("Successfully changed password!");    
    this.props.history.push("/");    
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="oldPassword" bsSize="lg">
          <ControlLabel>Old Password</ControlLabel>
          <FormControl
            value={this.state.oldPassword}
            onChange={this.handleChange}
            type="password"
            data-dpmaxz-eid="2"
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="lg" validationState={this.passwordCriteria()}>
          <ControlLabel>New Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="lg" validationState={this.passwordsMatch()}>
          <ControlLabel>Confirm New Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Change Password"
          loadingText="Changing…"
        />
      </form>
    );
  }

  renderUserInfo() {
    return (
      "Nothing to display."
    );
  }

  render() {
    return (
      <div className="MyProfile container-fluid">
        <Row gutter={16} style={{padding: 30}}>
          <Col xs={24} md={12}>
            <ContainerCard title="Profile Information" extra={<Icon type="idcard" />}>{this.renderUserInfo()}</ContainerCard>
            <ContainerCard title="Subscription Information" extra={<Icon type="wallet" />}>{this.renderUserInfo()}</ContainerCard>
            <ContainerCard title="Billing Information" extra={<Icon type="bank" />}>{this.renderUserInfo()}</ContainerCard>
          </Col>
          <Col xs={24} md={12}>
            <ContainerCard title="Change Password" extra={<Icon type="lock" />}>{this.renderForm()}</ContainerCard>
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