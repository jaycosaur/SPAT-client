import React, { Component } from "react";

import DatasetContainer from './../DatasetContainer'
import { Col, Row, Spin, Card, Icon, Timeline, Input, Alert, Button, Divider } from 'antd';

import config from "../../config";
import "./Datasets.css";
import { invokeApig, s3Upload } from "../../libs/awsLib";

export default class Datasets extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.state = {
      timer: null,
      isLoading: null,
      isDeleting: null,
      dataset: null,
      title: "",
      desciption: "",
      id: "",
      createdAt: "",
      processState: "",
      isTouched: null,
      isSaved: null,
      counter: 0,
      eventArray: []
    };
  }

  async componentDidMount() {
    try {
      const results = await invokeApig({ path: `/datasets/${this.props.match.params.id}` });
      let timer = setInterval(this.tick, 1000)
      this.setState({
        dataset: results,
        title: results.title,
        description: results.description,
        id: results.datasetId,
        processState: results.state,
        createdAt: results.createdAt,
        timer: timer
      });
    } catch (e) {
      alert(e);
    }
  }

  tick = () => {
    let count = this.state.counter
    let processState = null
    let eventArray = this.state.eventArray
    let tf = 1
    if(count < 5*tf) {
      processState = "Pending Processing"
    } else if (count < 160*tf) {
      processState = "Processing"
    } else {
      processState = "Processing Complete"
    }

    if(count === 5*tf) {
      eventArray.push("Dataset has been recieved")
    } else if (count === 6*tf) {
      eventArray.push("Checking dataset format")
    } else if (count === 9*tf) {
      eventArray.push("Dataset is in acceptable format ...")
    } else if (count === 10*tf) {
      eventArray.push("Checking filesize and data quality ...")
    } else if (count === 15*tf) {
      eventArray.push("Filesize is below threshold with no errors")
    } else if (count === 16*tf) {
      eventArray.push("Preparing dataset for classification")
    } else if (count === 24*tf) {
      eventArray.push("Classifying dataset ...")
    } else if (count === 130*tf) {
      eventArray.push("Classification complete")
    } else if (count === 135*tf) {
      eventArray.push("Preparing for analysis")
    } else if (count === 160*tf) {
      eventArray.push("Dataset is ready for analysis.")
    }
    if (this.state.processState === "Processing Complete"){
      processState = "Processing Complete"
      eventArray = ["Dataset is ready for analysis."]
    }

    this.setState({
      counter: this.state.counter + 1,
      processState: processState,
      eventArray
    });
  }

  componentWillUnmount() {
  }

  validateForm() {
    return this.state.title.length > 0;
  }
  
  formatFilename(str) {
    return str.length < 50
      ? str
      : str.substr(0, 20) + "..." + str.substr(str.length - 20, str.length);
  }
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      isTouched: true,
      isSaved: false
    });
  }
  
  handleFileChange = event => {
    this.file = event.target.files[0];
  }
  
  saveDataset(dataset) {
    return invokeApig({
      path: `/datasets/${this.props.match.params.id}`,
      method: "PUT",
      body: dataset
    });
  }
  
  handleSubmit = async event => {
    let uploadedFilename;
  
    event.preventDefault();
  
    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert("Please pick a file smaller than 100MB");
      return;
    }
  
    this.setState({ isLoading: true });
  
    try {
      if (this.file) {
        uploadedFilename = (await s3Upload(this.file))
          .Location;
      }
  
      await this.saveDataset({
        ...this.state.dataset,
        title: this.state.title,
        description: this.state.description,
        attachment: uploadedFilename || this.state.dataset.attachment
      });
      this.setState({ 
        isLoading: false,
        isSaved: true,
        isTouched: false,
       });
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }
  
  deleteDataset() {
    return invokeApig({
      path: `/datasets/${this.props.match.params.id}`,
      method: "DELETE"
    });
  }

  handleDashboardClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute("href"));
  }
  
  handleDelete = async event => {
    event.preventDefault();
  
    const confirmed = window.confirm(
      "Are you sure you want to delete this dataset? This action cannot be undone, once it is gone it is gone forever."
    );
  
    if (!confirmed) {
      return;
    }
  
    this.setState({ isDeleting: true });
  
    try {
      await this.deleteDataset();
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isDeleting: false });
    }
  }

  bsStyleGen() {
    switch(this.state.processState) {
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
  
  
  render() {
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

    const LoadingSpinner = (props) => 
      <div style={{height:'100vh',display:'flex',alignItems: 'center',justifyContent: 'center'}}>
        <Spin indicator={<Icon type='loading' style={{fontSize: '100px', color: 'rgb(159,193,69)'}}/>} />
      </div>

    const DatasetTimeline = (props) => {
      

      return (
        <Timeline>
          {props.events.map((event, i) => <Timeline.Item color={i<props.events.length?"green":"gold"}>{event}</Timeline.Item>)}
        </Timeline>
      )
    }
      

    const isProcessingComplete = (this.state.processState === "Processing Complete")


    const InstanceStateActions = isProcessingComplete&&[
      <span><a rel="noopener noreferrer" href="https://s3-ap-southeast-2.amazonaws.com/spat-datalake-processed/SPAT-DataTemplateFilledv1-classified.xlsx" target="_blank"><Icon type="download" /> Download Dataset</a></span>, 
      <a rel="noopener noreferrer" href={'https://app.powerbi.com/view?r=eyJrIjoiZWQ0OGZlNzEtZTczZi00ZTY1LWIxZjItOGJiNzI3ZDk2MDZkIiwidCI6IjBmYmEyYjI1LTdkZmYtNDZiNi1hY2U1LTQ3OWFlYzNmMjY0NyJ9'}><Icon type="dot-chart"/> Dashboard</a>]


    const InstanceState = (props) =>
      <Card title="Instance State" extra={<Icon type="calendar" />} hoverable>
        <Card 
          style={{textAlign: 'center'}} 
          hoverable
          actions={InstanceStateActions}
          >
          <Icon style={{fontSize:'100px', marginBottom:'16px', color: computeAvatarStyle(this.state.processState)}} type={this.bsStyleGen(this.state.processState)}/>
          <h4 style={{color: computeAvatarStyle(this.state.processState)}}>{this.state.processState}</h4>
          <p>
            {isProcessingComplete ? "Your data has now been classifed and is ready for analysis." :"Please wait until processing is completed to view the summary"}
          </p>
        </Card>
        <Divider>Timeline</Divider>
        <DatasetTimeline events={this.state.eventArray}/>
      </Card>

    const UnsavedAlert = (props) =>
      <Alert
        style={{marginBottom:'16px'}}
        message={this.state.isSaved?'Successfully Saved':'Unsaved changes'}
        description={this.state.isSaved?
            "Your changes were successful!"
          :
            <span>
              You have made changes since your last save.
              <Button
                size="small"
                disabled={!this.validateForm()}
                onClick={this.handleSubmit}
                loading={this.state.isLoading}
              >
                {!this.state.isLoading?'Save Now':'Saving...'}
              </Button>
            </span>
          }
        type={this.state.isSaved?"success":"warning"}
        showIcon
      />

    const DeleteButton = (props) =>
      <Button
        size='small'
        type='danger'
        disabled={!this.validateForm()}
        onClick={this.handleDelete}
        loading={this.state.isDeleting}
        style={{marginLeft:'16px'}}
        ghost
      >
        {!this.state.isDeleting?'Delete':'Deleting...'}
      </Button>

    const DatasetSummaryCard = (props) => 
      <Card 
        title={[<Icon style={{marginRight:'16px'}} type='database'/>,"Dataset Summary"]}
        extra={<DeleteButton />}
        >
        <form onSubmit={this.handleSubmit}>
          <Input style={{marginBottom:'16px'}} size="large" addonBefore='Instance ID' value={this.state.id} disabled />
          <Input style={{marginBottom:'16px'}} size="large" addonBefore='Created at' value={new Date(this.state.createdAt).toLocaleString()} disabled />
          <Input style={{marginBottom:'16px'}} size="large" id="title" addonBefore='Name of Instance' value={this.state.title} onChange={this.handleChange}/>
          Short Description
          <Input.TextArea style={{marginBottom:'16px'}} id="description" value={this.state.description} onChange={this.handleChange} autosize={{ minRows: 2, maxRows: 12 }} />
          Original Attachment
          {this.state.dataset.attachment?
          <Row>
            <a
              download
              target="_blank"
              rel="noopener noreferrer"
              href={this.state.dataset.attachment}
            >
              <Button type="primary" icon="download" >Download</Button>
            </a> 
          </Row>:
          "No files were uploaded."}
        </form>                       
      </Card>

    return (
      <div className="Datasets">
        {!this.state.dataset&&<LoadingSpinner />}
        {this.state.dataset && 
        <DatasetContainer status={this.state.processState}>
          <Row type="flex" justify="center">
            <Col md={20}>
              <Row gutter={16} >
                <Col xs={24} md={10}> 
                  <InstanceState />
                </Col>
                <Col xs={24} md={14}> 
                  {(this.state.isTouched||this.state.isSaved)&&<UnsavedAlert />}                              
                  <DatasetSummaryCard />
                </Col>
              </Row>
            </Col>
          </Row>
        </DatasetContainer>}
      </div>
    );
  }
}