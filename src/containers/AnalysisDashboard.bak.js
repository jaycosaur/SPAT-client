import React, { Component } from "react";
import { Card, Row, Col, Icon, Tabs } from 'antd';
import { invokeApig } from "../libs/awsLib";

import "./AnalysisDashboard.css"

import ReactHighcharts from 'react-highcharts'
require('highcharts-exporting')(ReactHighcharts.Highcharts)
require('highcharts-offline-exporting')(ReactHighcharts.Highcharts)

const configHighCharts = {
    chart: {
        type: 'areaspline'
    },
    exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    title: {
        text: 'Spend over Mega Categories'
    },
    colors: [
        'rgb(159,193,69)'
    ],
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: [{
        title: {
            text: 'Spend (Millions)'
        }
    }],
    series: [{
        name: 'Spend per Mega Category',
        data: [29.9, 71.5, 306.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
    };

const configHighChartsBar = {
        chart: {
            type: 'column'
        },
        exporting: {
            chartOptions: { // specific options for the exported image
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                }
            },
            fallbackToExportServer: false
        },
        title: {
            text: 'Spend over Mega Categories'
        },
        colors: [
            'rgb(159,193,69)'
        ],
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: [{
            title: {
                text: 'Spend (Millions)'
            }
        }],
        series: [{
            name: 'Spend per Mega Category',
            data: [29.9, 71.5, 306.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
        }]
        };


export default class AnalysisDashboard extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.state = {
      isLoading: null,
      isDeleting: null,
      dataset: null,
      title: "",
      desciption: "",
      id: "",
      createdAt: "",
      processState: ""
    };
  }

  async componentDidMount() {
    /*try {
      const results = await this.getDataset();
      this.setState({
        dataset: results,
        title: results.title,
        description: results.description,
        id: results.datasetId,
        processState: results.state,
        createdAt: results.createdAt,
      });
    } catch (e) {
      alert(e);
    }*/
  }

  getDataset() {
    return invokeApig({ path: `/datasets/${this.props.match.params.id}` });
  }
  
  render() {
    return (
      <div className="AnalysisDashboard">
        <Tabs size='small' type="line" defaultActiveKey="1" onChange={e => console.log(e)}>
            <Tabs.TabPane tab="Enterprise Dashboard" key="1" style={{"padding":"15px 30px"}}>
                <Row className="chart-row" gutter={16}>
                    <Col span={24}>
                        <Card hoverable title="Dataset Overview" extra={<Icon type='check-circle' style={{color: '#95de64'}}/>}>
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <Row type="flex" justify="center" align="top">
                                    <span>
                                        <span style={{fontSize:"20px", fontWeight:'500', position: 'relative', top: '-13px'}}>$</span>
                                        <span style={{fontSize:"38px"}}>1,592,125</span>
                                        <span style={{fontSize:"20px", fontWeight:'500', position: 'relative', top: '-13px'}}>.34</span>
                                    </span>
                                </Row>
                                <Row>
                                    <span style={{textAlign:'center', color: 'rgba(0, 0, 0, 0.45)'}}>
                                        TOTAL AMOUNT
                                    </span>
                                </Row>
                            </Card.Grid>
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <Row type="flex" justify="center" align="top">
                                    <span>
                                        <span style={{fontSize:"38px"}}>3,892</span>
                                    </span>
                                </Row>
                                <Row>
                                    <span style={{textAlign:'center', color: 'rgba(0, 0, 0, 0.45)'}}>
                                        # SUPPLIERS
                                    </span>
                                </Row>
                            </Card.Grid>
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <Row type="flex" justify="center" align="top">
                                    <span>
                                        <span style={{fontSize:"38px"}}>53,239</span>
                                    </span>
                                </Row>
                                <Row>
                                    <span style={{textAlign:'center', color: 'rgba(0, 0, 0, 0.45)'}}>
                                        # TRANSACTIONS
                                    </span>
                                </Row>
                            </Card.Grid>
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <Row type="flex" justify="center" align="top">
                                    <span>
                                        <span style={{fontSize:"38px"}}>23,913</span>
                                    </span>
                                </Row>
                                <Row>
                                    <span style={{textAlign:'center', color: 'rgba(0, 0, 0, 0.45)'}}>
                                        # PURCHASE ORDERS
                                    </span>
                                </Row>
                            </Card.Grid>
                            <Card.Grid style={{ width: '100%',textAlign: 'center'}}>
                                <ReactHighcharts config = {configHighChartsBar} />
                            </Card.Grid>
                            <Card.Grid style={{ width: '100%',textAlign: 'center'}}>
                                <ReactHighcharts config = {configHighCharts} />
                            </Card.Grid>
                            <Card.Grid style={{ width: '50%',textAlign: 'center'}}><ReactHighcharts config = {configHighCharts} /></Card.Grid>
                            <Card.Grid style={{ width: '50%',textAlign: 'center'}}><ReactHighcharts config = {configHighCharts} /></Card.Grid>
                        </Card>
                    </Col>
                </Row>
                <Row className="chart-row" gutter={16}>
                    <Col span={12}>
                        <Card hoverable loading extra={<Icon type="loading" />}>
                            Double Chart
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            Double Chart
                        </Card>
                    </Col>
                </Row>
                <Row className="chart-row" gutter={16}>
                    <Col span={6}>
                        <Card>
                            Quadruple Chart
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            Quadruple Chart
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            Quadruple Chart
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            Quadruple Chart
                        </Card>
                    </Col>
                </Row>
                <Row className="chart-row" gutter={16}>
                    <Col span={12}>
                        <Card>
                            Quadruple Chart
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            Other Chart
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            Other Chart
                        </Card>
                    </Col>
                </Row>
                <Row className="chart-row" gutter={16}>
                    <Col span={12}>
                        <Card>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Row className="chart-row" gutter={16}>
                            <Col span={12}>
                                <Card>
                                    Double Chart
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card>
                                    Double Chart
                                </Card>
                            </Col>
                        </Row>
                        <Row className="chart-row" gutter={16}>
                            <Col span={12}>
                                <Card>
                                    Double Chart
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card>
                                    Double Chart
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Vendor Dashboard" key="2">Content of Tab Pane 2</Tabs.TabPane>
            <Tabs.TabPane tab="Opportunity Dashboard" key="3" disabled>Content of Tab Pane 3</Tabs.TabPane>
            <Tabs.TabPane tab="Custom Dashboard 1" key="4" disabled>Content of Tab Pane 3</Tabs.TabPane>
            <Tabs.TabPane tab="Custom Dashboard 2" key="5" disabled>Content of Tab Pane 3</Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}