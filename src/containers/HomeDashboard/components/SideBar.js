import React, { Fragment } from 'react'
import { Row } from 'antd';

import ServiceOutagesCard from './ServiceOutagesCard'
import NewsCard from './NewsCard'
import HomePageAlert from './HomePageAlert'
import ProductRoadmap from './ProductRoadmap'

export default (props) =>
    <Fragment>
      <Row>
        <HomePageAlert />
      </Row>
      <Row>
        <NewsCard />
      </Row>
      <Row style={{ marginTop: 16 }}>
        <ServiceOutagesCard />
      </Row>
      <Row style={{ marginTop: 16 }}>
        <ProductRoadmap />
      </Row>
    </Fragment>