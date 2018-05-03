import React from 'react'
import DatasetList from './components/DatasetList'
import { Row , Col, Card } from 'antd'

export default (props) =>
  <div className="datasets">
    <Row style={{ margin: '24px 16px' }} gutter={16}>
      <Col span={18}>
        <Card title="Your Completed Datasets">
          <DatasetList {...props} />
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Helpful hints" span={6}>
          Helpful hints / news delivered by CMS
        </Card>
      </Col>
    </Row>  
  </div>
  