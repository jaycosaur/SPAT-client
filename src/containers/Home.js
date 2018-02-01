import React, { Component } from "react";

import { List, Button, Card, Row, Col, Alert, Avatar } from 'antd';

import "./Home.css";

import { invokeApig } from '../libs/awsLib';

import HomeLander from './HomeLander'


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      datasets: [],
      news: [],
      outages: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
  
    try {
      const results = await this.datasets();
      this.setState({ datasets: results });
    } catch (e) {
      alert(e);
    }

    try {
      const results = await this.news();
      this.setState({ news: results });
    } catch (e) {
      alert(e);
    }

    try {
      const results = await this.outages();
      this.setState({ outages: results });
    } catch (e) {
      alert(e);
    }
  
    this.setState({ isLoading: false });
  }
  
  datasets() {
    return invokeApig({ path: "/datasets" });
  }

  news() {
    return "";
  }

  outages() {
    return "";
  }

  

  renderNews(news) {
    return (
      <Card loading={this.state.isLoading} title="Latest News">
        {news.length > 0 ? [
          "Petting zoo at carrots alligators quack. Oranges cucumbers rhubarb gourds watermelon. bull bowels cat chicken cow, calf donkey duck. Mouse soybeans sweet corn hogs llamas or oink oink wind. Hoot squeal moose quack, crows"
        ] :
        [ "No news to show." ]}
      </Card>
    );
  }

  renderOutages(outages) {
    return (
      <Card loading={this.state.isLoading} title="Service Outages">
        {outages.length > 0 ? [
          "Petting zoo at carrots alligators quack. Oranges cucumbers rhubarb gourds watermelon. bull bowels cat chicken cow, calf donkey duck. Mouse soybeans sweet corn hogs llamas or oink oink wind. Hoot squeal moose quack, crows"
        ] :
        [ "No outages have been planned." ]}
      </Card>
    );
  }
  
  handleDatasetClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute("href"));
  }

  bsStyleGen(processState) {
    switch(processState) {
      case "Pending Processing":
        return "solution";

      case "Processing":
        return "calculator";

      case "Processing Complete":
        return "rocket";
      
      case "Failed":
        return "close-circle-o";

      default:
        return "danger";
    }
  };

  renderDatasets(state) {
    function computeAvatarStyle(state) {
      if(state === "Pending Processing"){
        return "#ffd666"
      }
      else if(state === "Processing"){
        return "#ffc069"
      }
      else if(state === "Processing Complete"){
        return "#73d13d"
      }
      else if(state === "Failed"){
        return "#ff4d4f"
      }
    }

    return (
      <div className="datasets">
            <Row className="show-grid" style={{ margin: '24px 16px' }} gutter={16}>
              <Col xs={24} md={16}>
                <Card title="Your Datasets"
                  extra={<Button
                      href="/datasets/upload"
                      onClick={this.handleDatasetClick}
                      icon="plus"
                      type="primary"
                      ghost
                    > 
                      Classify a new data set
                    </Button>}
                  >
                  <List
                    loading={this.state.isLoading}
                    itemLayout="horizontal"
                    dataSource={this.state.datasets}
                    renderItem={item => (
                      <List.Item key={String(item.datasetId)}>
                        <List.Item.Meta
                          avatar={<Avatar size="large" style={{color: computeAvatarStyle(item.state), backgroundColor: 'transparent', border: '2px solid', borderColor: computeAvatarStyle(item.state)}} icon={this.bsStyleGen(item.state)} />}                                     
                          title={<a href={`/datasets/${item.datasetId}`} onClick={this.handleDatasetClick}>{item.title.trim().split("\n")[0]}</a>}
                          description={new Date(item.createdAt).toLocaleString() + " - " +item.description.toLocaleString()}
                        />
                        <span>{item.state.toLocaleString()}</span>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
              <Col xs={24} md={8}> 
                <Row>
                  <Alert
                    message="Warning"
                    description="This application is under very active development. Changes will frequently occur on a day to day basis."
                    type="warning"
                    showIcon
                    closable
                    style={{ marginBottom: 16 }}
                  />
                </Row>
                <Row>
                  {this.renderNews(this.state.news)}
                </Row>
                <Row style={{ marginTop: 16 }}>
                  {this.renderOutages(this.state.outages)}
                </Row>
              </Col>   
            </Row>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderDatasets() : <HomeLander />}
      </div>
    );
  }
}