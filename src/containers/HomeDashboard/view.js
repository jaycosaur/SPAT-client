import React from 'react'
import { Row, Col } from 'antd';

import SideBar from './components/SideBar'
import DatasetContainer from './components/DatasetContainer'

export default (props) =>
  <div className="datasets">
    <Row className="show-grid" style={{ margin: '24px 16px' }} gutter={16}>
      <Col xs={24} md={16}>
        <DatasetContainer {...props} />
      </Col>
      <Col xs={24} md={8}> 
        <SideBar />
      </Col>
    </Row>
  </div>