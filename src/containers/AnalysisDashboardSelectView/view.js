import React from 'react'
import DatasetContainer from './components/DatasetContainer'
import DatasetList from './components/DatasetList'
import { Row , Col } from 'antd'

export default (props) =>
  <div className="datasets">
    <Row>
      <Col span={18}>
        <div style={{ margin: '24px 16px', display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          <DatasetList {...props} />
        </div>
      </Col>
      <Col span={6}>
        <div style={{ margin: '24px 16px', display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          <DatasetContainer {...props} />
        </div>
      </Col>
    </Row>
    
  </div>