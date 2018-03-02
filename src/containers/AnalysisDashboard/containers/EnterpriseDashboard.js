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

require('highcharts-exporting')(ReactHighcharts.Highcharts)
require('highcharts-offline-exporting')(ReactHighcharts.Highcharts)

const CardGrid = (props) => 
    <Card.Grid className={props.className} key={props.key} style={{textAlign: "center", width: props.width?props.width:"100%", ...props.style}}>
        {props.render}
    </Card.Grid>

export default (props) => 
            <div>
                <Row className="chart-row" gutter={16}>
                    <Col span={24}>
                        <Card hoverable title="Dataset Overview" bodyStyle={{padding: 0}} extra={<Icon type='check-circle' style={{color: '#95de64'}}/>}>
                            {[
                                <SingleItem accounting value= {1592125.34} title="TOTAL SPEND"/>,
                                <SingleItem value={3892} title="# SUPPLIERS"/>,
                                <SingleItem value={53239} title="# TRANSACTIONS"/>,
                                <SingleItem value={23913} title="# PURCHASE ORDERS"/>

                            ].map((item,i) => <CardGrid key={i} width="25%" render={item}/>)}
                            <CardGrid render={<BarChart actions={props.actions} data={props.data.category}/>}/>
                            <CardGrid render={<LineChart actions={props.actions} />}/>
                        </Card>
                    </Col>
                </Row>
                <Row className="chart-row" gutter={16}>
                    <Col span={12}>
                        <Card hoverable title="Key Statistics" bodyStyle={{padding: 0}} extra={<Icon type='loading' style={{color: '#95de64'}}/>}>
                            {[
                                <SingleItem accounting value={23913} title="MEDIAN INVOICE"/>,
                                <SingleItem accounting value={23913} title="AVERAGE PO"/>,
                                <SingleItem value={46740} title="# INVOICES <$5K"/>,
                                <SingleItem value={48810} title="# INVOICES <$20K"/>,
                                <SingleItem value={23913} title="# PURCHASE ORDERS"/>,
                                <SingleItem loading value={23913} title="# PURCHASE ORDERS"/>
                            ].map(item => <CardGrid width="50%" render={item} />)}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card hoverable title="Dataset Overview" extra={<Icon type='check-circle' style={{color: '#95de64'}}/>}>
                            <BubbleChart actions={props.actions} data={props.data.organisation}/>
                        </Card>
                    </Col>
                </Row>
                <Row className="chart-row" gutter={16}>
                    <Col span={24}>
                        <Card 
                            title="Dataset Explorer"
                            extra={<Icon type='loading' style={{color: '#95de64'}}/>}
                            bodyStyle={{padding: 0}}
                            >
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <FilterSelect />
                            </Card.Grid>
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <SingleItem loading value="3,892" title="# SUPPLIERS"/>
                            </Card.Grid>
                            <Card.Grid style={{ width: '25%',textAlign: 'center'}}>
                                <SingleItem loading value="53,239" title="# TRANSACTIONS"/>
                            </Card.Grid>
                            <Card.Grid loading style={{ width: '25%',textAlign: 'center'}}>
                                <SingleItem loading value="23,913" title="# PURCHASE ORDERS"/>
                            </Card.Grid>
                            <Card.Grid style={{ width: '100%',textAlign: 'center'}}>
                                <DataTable actions={props.actions} data={props.data.organisation}/>
                            </Card.Grid>
                        </Card>
                    </Col>
                </Row>
            </div>
