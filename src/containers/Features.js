import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

import { Button } from 'antd';

export default class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
  }

  render() {
    return (
      <div className="Features">
        <Jumbotron>
            <div className="Home">
            <div className="lander">
                <h1>Features</h1>
                <h3>Spend Analysis Toolkit</h3>
                <p>taking the GL and time out of spend analysis</p>
                <Button style={{color: '#fff', background: 'linear-gradient(to right, rgb(22,85,151), #1a9ed9,rgb(159,193,69))'}} href="/login" onClick={this.handleDatasetClick}>Login</Button>
            </div>
            </div>
        </Jumbotron>
      </div>
    );
  }
}