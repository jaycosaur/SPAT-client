import React, { Component } from "react";
import { Grid,  Col } from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import "./NewUpload.css";
import config from "../../config";
import { invokeApig, s3Upload } from "../../libs/awsLib";
//import Progress from 'react-progress';

import { Input, Upload, Icon, Card, Row, Button, Progress } from 'antd';


import DatasetContainer from './../DatasetContainer'

export default class NewUpload extends Component {
  constructor(props) {
    super(props);
    this.file = null;
    this.state = {
      isLoading: null,
      title: "",
      description: "",
      uploadProgress: 0,
      isComplete: false,
      isCancelled: false,
      datasetPath: null,
      uploadDataset: null
    };
  }

  updateProgress = (dataFromUpload) => {
       
      this.setState({ uploadProgress: dataFromUpload });
  }

  validateForm() {
    return this.state.title.length > 0 && this.state.description.length > 0 && this.file ;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = file => {
    this.file = file;
  }

  handleOnRemove = file => {
    this.file = null
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert("Please pick a file smaller than 100MB");
      return;
    }
  
    this.setState({ isLoading: true });
  
    try {
      const uploadedFilename = this.file
        ? (await s3Upload(this.file, this.updateProgress)).Location
        : null;
      const response = await this.createDataset({
        title: this.state.title,
        description: this.state.description,
        attachment: uploadedFilename
      });
      this.setState({
        isComplete: true,
        uploadDataset: response
      })
      console.log(this.state.uploadDataset)
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }
  
  createDataset(dataset) {
    return invokeApig({
      path: "/datasets",
      method: "POST",
      body: dataset
    });
  }

  render() {
    return (
      <div className="NewUpload">
        {/*<Progress height="4" color="#1a9ed9" percent={this.state.uploadProgress} />*/}
        <Grid>
          <DatasetContainer status="Upload">
            <Col md={6} mdOffset={3} xs={12}>
              <Card 
                title="Upload Dataset" 
                style={{marginBottom: '16px'}}
                extra={<Button>Download Data Template<Icon type="cloud-download-o" /></Button>}
                >
              {!this.state.isLoading?<form onSubmit={this.handleSubmit}>
                  <Row style={{paddingBottom:'16px'}}>
                    <Upload.Dragger action="" name='file' multiple={false} onRemove = {this.handleOnRemove} beforeUpload={this.handleFileChange}>
                      {!this.file && <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>}
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">Support for a single file upload. Please use the XLS template or provide columns according to our data guidance notes which can be found <a>here</a>. 
                        Accepted file types are .XLXS, .XLS, .CSV, .TXT. Note that to stop disconnection of service, and to increase security of data in transit, allowable upload filesizes must be less than 100 MB.
                        If you need to upload a file that is larger than this or a different format, such as multi year datasets, please get into contact with on of our super helpful engineers to discuss alternative options.</p>
                    </Upload.Dragger>
                  </Row>
                  <Row style={{paddingBottom:'16px'}}>
                    <span><strong>Name of Dataset</strong></span>
                    <Input 
                      size="large"
                      value={this.state.title}
                      id="title"
                      onChange={this.handleChange}
                      />
                  </Row>
                  <Row style={{marginBottom:'32px'}}>
                    <span><strong>Description</strong></span>
                    <Input.TextArea 
                      rows={4}
                      value={this.state.description}
                      id="description"
                      onChange={this.handleChange}
                      />
                  </Row>
                  <LoaderButton
                    block
                    bsStyle="primary"
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Upload"
                    loadingText={"Uploading file: "+Math.round(this.state.uploadProgress)+"%"}
                  />
                </form>:
                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <Row style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', marginBottom: '30px'}}>
                    <Progress style={{justifyContent: 'center', display: 'flex',  margin: 'auto'}} type="circle" width={200} percent={!this.state.isComplete?Math.round(this.state.uploadProgress):100} />
                  </Row>
                  <Row style={{textAlign:'center', marginBottom: '16px'}}>
                    <h4>
                      {this.state.isComplete?'Upload completed!':'Your dataset is currently being uploaded.'}
                    </h4> 
                    <p>
                      {this.state.isComplete?
                        'Congratulations, your dataset has been uploaded and is currently pending processing.'
                      :
                        'Depending on the size of your dataset and the speed of your connection this may take some period of time. Do not refresh this page during this time.'
                      }
                    </p>
                  </Row>
                  {this.state.isLoading&&!this.state.isComplete&&
                  <Row style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
                    <Button type='danger' size='large'>
                      Cancel Upload
                      <Icon type="close-circle-o" />
                    </Button>
                  </Row>}
                  {this.state.isComplete&&
                  <Row style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', marginBottom: '16px'}}>
                    <Button.Group size='large' style={{justifyContent: 'center', display: 'flex', margin: 'auto'}}>
                      <Button onClick={(e) => this.props.history.push("/")}>
                        <Icon type='home' />
                        Return Home
                      </Button>
                      <Button onClick={(e) => this.props.history.push(`/datasets/${this.state.uploadDataset.datasetId}`)}>
                        View Dataset
                        <Icon type='database' />
                      </Button>
                    </Button.Group>
                  </Row>}
                </div>}                                
              </Card>
            </Col>
          </DatasetContainer>
        </Grid>
      </div>
    );
  }
}