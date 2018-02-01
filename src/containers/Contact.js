import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, HelpBlock, PageHeader, Grid, Col, Row } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";

import { Card } from 'antd';

import "./Contact.css";
import { invokeApig } from "../libs/awsLib";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      title: "",
      description: "",
    };
  }

  validateForm() {
    return ((this.state.title.length > 0) && (this.state.description.length > 0));
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    this.setState({ isLoading: true });
  
    try {
      await this.sendContact({
        title: this.state.title,
        description: this.state.description,
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }
  
  sendContact(dataset) {
    return invokeApig({
      path: "",
      method: "POST",
      body: dataset
    });
  }

  render() {
    return (
      <div className="contact">
        <Grid>
          <PageHeader>Contact Centre</PageHeader>
            <Row>
                <Col md={6} xs={12}>
                    <Card title="Inbox">
                        No messages to display.
                    </Card>
                </Col>
                <Col md={6} xs={12}>
                    <Card title="Contact Form">
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="type" bsSize="large">
                                <ControlLabel>Select Contact Reason</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Feedback</option>
                                    <option value="other">Problem / Error / Bug</option>
                                    <option value="other">General Contact</option>
                                    <option value="other">Other</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="title" bsSize="large">
                                <ControlLabel>Contact Title</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="name"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                                <HelpBlock>Short description of your contact reason.</HelpBlock>
                                </FormGroup>    
                            <FormGroup controlId="description">
                                <ControlLabel>Contact Description</ControlLabel>
                                <FormControl
                                onChange={this.handleChange}
                                value={this.state.description}
                                componentClass="textarea"
                                />
                                <HelpBlock>Please describe in as much detail as possible.</HelpBlock>
                            </FormGroup>
                            <LoaderButton
                                block
                                bsStyle="primary"
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                                isLoading={this.state.isLoading}
                                text="Send Message"
                                loadingText={"Sending ..."}
                            />
                        </form>
                    </Card>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}