import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Grid, Row, Col, Panel } from "react-bootstrap";
import * as V from 'victory';

import "./Dashboard.css";
import { invokeApig } from "../libs/awsLib";

export default class Datasets extends Component {
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
    try {
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
    }
  }

  getDataset() {
    return invokeApig({ path: `/datasets/${this.props.match.params.id}` });
  }
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  renderOverviewChart() {
    const data = [
      {category: 1, value: Math.random()*1000000*10, label:"Category 1"},
      {category: 2, value: Math.random()*1000000*5, label:"Category 2"},
      {category: 3, value: Math.random()*1000000*2, label:"Category 3"},
      {category: 4, value: Math.random()*1000000, label:"Category 4"},
      {category: 5, value: Math.random()*1000000*5, label:"Other Categories"}
    ];
        return (
          <V.VictoryChart
            // adding the material theme provided with Victory
            theme={V.VictoryTheme.grayscale}
            domainPadding={20}
          >
            <V.VictoryAxis
              tickValues={[1, 2, 3, 4,5]}
              tickFormat={["Category 1", "Category 2", "Category 3", "Category 4", "Other"]}
            />
            <V.VictoryAxis
              dependentAxis
              tickFormat={(x) => (`$${x / 100000}k`)}
            />
            <V.VictoryBar
              data={data}
              labelComponent={<V.VictoryTooltip/>}
              x="category"
              y="value"
            />
          </V.VictoryChart>
        )
  }
  
  render() {
    return (
      <Grid className="Dashboard container-fluid ">
        {this.state.dataset &&
                    <Row>
                      <Col xs={12} md={3} className='sidebar'> 
                        <Panel>
                            <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="instance-id">
                              <ControlLabel>Instance ID</ControlLabel>
                              <FormControl disabled
                                onChange={this.handleChange}
                                value={this.state.id}
                              />
                            </FormGroup>
                            <FormGroup controlId="instance-id">
                              <ControlLabel>Time of Creation</ControlLabel>
                              <FormControl disabled
                                onChange={this.handleChange}
                                value={new Date(this.state.createdAt).toLocaleString()}
                              />
                            </FormGroup>
                            <FormGroup controlId="title">
                              <ControlLabel>Name of Instance</ControlLabel>
                              <FormControl
                                disabled
                                onChange={this.handleChange}
                                value={this.state.title}
                              />
                            </FormGroup>
                          </form>
                        </Panel>
                      </Col> 
                      <Col md={9}>
                        <Panel>
                        </Panel>
                      </Col>
                    </Row>                   
          }
      </Grid>
    );
  }
}