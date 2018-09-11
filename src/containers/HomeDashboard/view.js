import React from 'react'
import { Row, Col, Card } from 'antd';

import SideBar from './components/SideBar'
import DatasetContainer from './components/DatasetContainer'
import splashImage from './components/HomeSplashImage.svg'

export default class View extends React.Component {
  componentDidMount(){
    this.props.fetchDatasets()
    this.props.getLatestNews()
  }
  render() {
    return (
      <div className="datasets">
        <Row className="show-grid" style={{ margin: '24px 16px' }} gutter={16}>
          <Col xs={24} md={16}>
            <Card style={{minHeight: 400, marginBottom: 16, background: "#0067ac"}}>
              <img src={splashImage} />
            </Card>
            <DatasetContainer {...this.props} />
          </Col>
          <Col xs={24} md={8}> 
            <SideBar information={this.props.information}/>
          </Col>
        </Row>
      </div>
    )
  }
}
  