import React, { Fragment } from 'react'
import { Row } from 'antd';

import ServiceOutagesCard from './ServiceOutagesCard'
import NewsCard from './NewsCard'
import HomePageAlert from './HomePageAlert'
import ProductRoadmap from './ProductRoadmap'

//selectors
const alertSelector = (data) => data.news.items.warnings
const newsSelector = (data) => data.news.items.news
const roadmapSelector = (data) => data.news.items.roadmap
const outagesSelector = (data) => data.news.items.outages

export default (props) =>
    <Fragment>
      <Row>
        <HomePageAlert isLoading={props.information.news.isLoading} data={alertSelector(props.information)}/>
      </Row>
      <Row>
        <NewsCard isLoading={props.information.news.isLoading} data={newsSelector(props.information)}/>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <ServiceOutagesCard isLoading={props.information.news.isLoading} data={outagesSelector(props.information)}/>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <ProductRoadmap isLoading={props.information.news.isLoading} data={roadmapSelector(props.information)}/>
      </Row>
    </Fragment>