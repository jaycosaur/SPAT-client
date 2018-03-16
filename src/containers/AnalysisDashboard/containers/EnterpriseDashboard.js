import React from 'react'
import ReactHighcharts from 'react-highcharts'
import { Card, Row, Col, Icon } from 'antd';

//importing all charts and components
import BarChart from './../components/charts/BarChart'
import LineChart from './../components/charts/LineChart'
import BubbleChart from './../components/charts/BubbleChart'
import SingleItem from './../components/infocards/SingleItem'
import DataTable from './../components/tables/DataTable'
import FilterSelect from './../components/filters/FilterSelect'

import FetchData from './../components/dataloaders/FetchData'

require('highcharts-exporting')(ReactHighcharts.Highcharts)
require('highcharts-offline-exporting')(ReactHighcharts.Highcharts)

const CardGrid = (props) => 
    <Card.Grid className={props.className} style={{textAlign: "center", width: props.width?props.width:"100%", ...props.style}}>
        {props.render}
    </Card.Grid>

export default (props) => 
            <div>
                <Row className="chart-row" gutter={16}>
                    <Col span={24}>
                        <FetchData path="/datalake/ds-12345/categorylevel1query">
                            {({isFetching, isError, data}) =>
                                <Card hoverable loading={isFetching} title="Dataset Overview" bodyStyle={{padding: 0}} extra={<Icon type={isFetching?'loading':'check-circle'} style={{color: '#95de64'}}/>}>
                                    {[
                                        <SingleItem accounting value= {1592125.34} title="TOTAL SPEND"/>,
                                        <SingleItem value={3892} title="# SUPPLIERS"/>,
                                        <SingleItem value={53239} title="# TRANSACTIONS"/>,
                                        <SingleItem value={23913} title="# PURCHASE ORDERS"/>

                                    ].map((item,i) => <CardGrid key={i} width="25%" render={item}/>)}
                                    {data&&<CardGrid render={<BarChart actions={props.actions} data={data.data}/>}/>}
                                    <CardGrid render={<LineChart actions={props.actions} />}/>
                                </Card>
                            }
                        </FetchData>
                    </Col>
                </Row>
                <Row className="chart-row" gutter={16}>
                    <Col span={12}>
                        <FetchData path="/api/ds-12345/categoryquery/">
                            {({isFetching, isError, data}) =>
                                <Card loading={isFetching} hoverable title="Key Statistics" bodyStyle={{padding: 0}} extra={<Icon type='check-circle' style={{color: '#95de64'}}/>}>

                                    {[
                                        <SingleItem accounting value={23913} title="MEDIAN INVOICE"/>,
                                        <SingleItem accounting value={23913} title="AVERAGE PO"/>,
                                        <SingleItem value={46740} title="# INVOICES <$5K"/>,
                                        <SingleItem value={48810} title="# INVOICES <$20K"/>,
                                        <SingleItem value={23913} title="# PURCHASE ORDERS"/>,
                                        <SingleItem value={23913} title="# PURCHASE ORDERS"/>
                                    ].map((item, i) => <CardGrid key={i} width="50%" render={item} />)}
                                </Card>
                            }
                        </FetchData>
                    </Col>
                    <Col span={12}>
                        <FetchData path="/query/1/organisation">
                            {({isFetching, isError, data}) =>
                                <Card loading={isFetching} hoverable title="Dataset Overview" extra={<Icon type={isFetching?'loading':'check-circle'} style={{color: '#95de64'}}/>}>
                                    {!isFetching&&<BubbleChart actions={props.actions} data={data.data}/>}
                                </Card>
                            }
                        </FetchData>
                    </Col>
                </Row>
                <Row className="chart-row" gutter={16}>
                    <Col span={24}>
                        <Card 
                            title="Dataset Explorer"
                            extra={<Icon type='check-circle' style={{color: '#95de64'}}/>}
                            bodyStyle={{padding: 0}}
                            >
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <FilterSelect />
                            </Card.Grid>
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <SingleItem value={48810} title="# INVOICES <$20K"/>
                            </Card.Grid>
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <SingleItem value={48810} title="# INVOICES <$20K"/>
                            </Card.Grid>
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <SingleItem value={48810} title="# INVOICES <$20K"/>
                            </Card.Grid>
                            <Card.Grid style={{ width: '100%',textAlign: 'center'}}>
                                <FetchData path="/query/1/organisation">
                                    {({isFetching, isError, data}) =>
                                        !isFetching&&<DataTable actions={props.actions} data={data.data}/>
                                    }
                                </FetchData>
                                <FetchData path="/queryapi/dataset/ds-12345/categoryquery/start-date=2016-08-23">
                                    {({isFetching, isError, data}) => null }
                                </FetchData>
                            </Card.Grid>
                        </Card>
                    </Col>
                </Row>
            </div>
