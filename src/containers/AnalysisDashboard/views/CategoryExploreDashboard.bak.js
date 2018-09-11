import React from 'react'
import { Card, Row, Col, Icon } from 'antd';

//importing all charts and components
import BarChart from './../components/charts/BarChart'
import SingleItem from './../components/infocards/SingleItem'
import DataTable from './../components/tables/DataTable'
import FilterSelect from './../components/filters/FilterSelect'

import FetchData from './../components/dataloaders/FetchData'

const CardGrid = (props) => 
    <Card.Grid className={props.className} style={{textAlign: "center", width: props.width?props.width:"100%", ...props.style}}>
        {props.render}
    </Card.Grid>

const LoaderIcon = (props) =>
    <Icon 
        type={props.isFetching?'loading':'check-circle'} 
        style={{
            zIndex: 100, 
            color: '#95de64', 
            position: "absolute", 
            display: "block", 
            left: 0, 
            top: 0, 
            margin: 16}}/>

export default (props) => 
            <div>
                <Row key="2" className="chart-row" gutter={16}>
                    <Col span={24}>
                        <ChartContainerBarSpendCategories />
                    </Col>
                </Row>
                <Row key="3" className="chart-row" gutter={16}>
                    <Col span={24}>
                      <TableContainerSupplierSummary />
                      <TableContainerSupplierSummary />
                      <TableContainerSupplierSummary />
                      <TableContainerSupplierSummary />
                    </Col>
                </Row>
                <Row key="4" className="chart-row" gutter={16}>
                    <Col span={12}>
                      <LowerSummaryCardsContainer />
                    </Col>
                    <Col span={12}>
                      <FilterContainer />
                    </Col>
                </Row>
                <Row key="6" className="chart-row" gutter={16}>
                    <Col span={24}>
                        <ChartContainerBarSpendCategories />
                    </Col>
                </Row>
                <Row key="7" className="chart-row" gutter={16}>
                    <Col span={24}>
                        <TableContainerSupplierSummary />
                    </Col>
                </Row>
            </div>

// bar chart - spend over categories
const ChartContainerBarSpendCategories = (props) =>
    <FetchData path="/data/ds-12345/query/categorylevel1query">
        {({isFetching, isError, data}) => 
            <Card key="chartcontainerbarspendcategories" hoverable loading={isFetching} bodyStyle={{padding: 0}}>
                <LoaderIcon isFetching={isFetching} />
                {data?<CardGrid render={<BarChart actions={props.actions} data={data.data}/>}/>:"Loading..."}
            </Card>
        }
    </FetchData>

// two column area
    // middle summary cards

const LowerSummaryCardsContainer = (props) =>
    <Card loading={props.isFetching} hoverable title="Key Statistics" bodyStyle={{padding: 0}} extra={<Icon type='check-circle' style={{color: '#95de64'}}/>}>
        {[
            <SingleItem accounting value={23913} title="MEDIAN INVOICE"/>,
            <SingleItem accounting value={23913} title="AVERAGE PO"/>,
            <SingleItem value={46740} title="# INVOICES <$5K"/>,
            <SingleItem value={48810} title="# INVOICES <$20K"/>,
            <SingleItem value={23913} title="# PURCHASE ORDERS"/>,
            <SingleItem value={23913} title="# PURCHASE ORDERS"/>,
            <SingleItem value={23913} title="# PURCHASE ORDERS"/>,
            <SingleItem value={23913} title="# PURCHASE ORDERS"/>
        ].map((item, i) => <CardGrid key={i} width="50%" render={item} />)}
    </Card>

const FilterContainer = (props) =>
    <Card 
        bodyStyle={{padding: 0}}
        >
        {[
            <FilterSelect />,
            <FilterSelect />,
            <FilterSelect />,
            <FilterSelect />,
            <FilterSelect />,
            <FilterSelect />,
        ].map(item =>
            <Card.Grid style={{ width: '50%'}}>
                <h4 style={{color: '#54b948'}}>On what?</h4>
                <FilterItem render={item} />
            </Card.Grid>
        )}
    </Card>

const FilterItem = (props) =>
    props.render

// bar chart - top 20 suppliers by total spend

// table - supplier chart - [Supplier, Total spend, # Pos, Av PO, Invoices Below 5k, Invoices below 20k]

const TableContainerSupplierSummary = (props) =>
    <FetchData path="/query/1/organisation">
        {({isFetching, isError, data}) =>
            <Card bodyStyle={{padding: 0 }} loading={isFetching} hoverable>
                {!isFetching?<DataTable actions={props.actions} data={data.data}/>:"Loading..."}
            </Card>
        }
    </FetchData>