import React from 'react'
import { Card, Col, Icon } from 'antd';

//importing all charts and components
import BarChartCategory from './../containers/charts/ColumnChartCategory/'
import AreaChartTime from './../containers/charts/AreaChartTime/'
import DotChartVendor from './../containers/charts/DotChartVendor'
import TableSummaryVendor from './../containers/tables/TableSummaryVendor'

import CardContainer from './../components/infocards/CardContainer'

import RowContainer from './../components/layout/RowContainer'
import FilterContainer from './../components/filters/FilterContainer'

//importing all charts and components
import BarChart from './../components/charts/ColumnChart'
import FilterSelect from './../components/filters/FilterSelect'

import FetchData from './../components/dataloaders/FetchData'

const inputData1 = [
    {
        title: "TOTAL SPEND",
        value: 1592125.34,
        accounting: true
    },
    {
        title: "# SUPPLIERS",
        value: 3892,
        accounting: true
    },
    {
        title: "# TRANSACTIONS",
        value: 53239,
        accounting: true
    },
    {
        title: "# PURCHASE ORDERS",
        value: 23913,
        accounting: true
    },
]

const inputData2 = [
    {
        title: "TOTAL SPEND",
        value: 15921.34,
        accounting: true
    },
    {
        title: "# SUPPLIERS",
        value: 3892,
        accounting: true
    },
    {
        title: "# TRANSACTIONS",
        value: 53239,
        accounting: true
    },
    {
        title: "# PURCHASE ORDERS",
        value: 23913,
        accounting: true
    },
    {
        title: "TOTAL SPEND",
        value: 2125.34,
        accounting: true
    },
    {
        title: "# SUPPLIERS",
        value: 3892,
        accounting: true
    },
    {
        title: "# TRANSACTIONS",
        value: 53239,
        accounting: true
    },
    {
        title: "# PURCHASE ORDERS",
        value: 23913,
        accounting: true
    },
]

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
                <RowContainer key="supplierselect">
                    <SupplierSelectContainer />
                </RowContainer>
                <RowContainer key="cardrow">
                    <CardContainer itemWidth="25%" data={inputData1}/>
                    <BarChartCategory />
                </RowContainer>
                <RowContainer key="areachart">
                    <AreaChartTime />
                </RowContainer>
                <RowContainer key="doublecolumn">
                    <Col span={12} style={{padding: 0}}>
                      <ChartContainerBarSpendCategories />
                    </Col>
                    <Col span={12} style={{padding: 0}}>
                        <TableSummaryVendor />
                    </Col>
                </RowContainer>
                <RowContainer key="two-column-mid">
                    <Col span={12} style={{padding: 0}}>
                        <CardContainer itemWidth="50%" data={inputData2}/>
                    </Col>
                    <Col span={12} style={{padding: 0}}>
                        <DotChartVendor />
                    </Col>
                </RowContainer>
                <RowContainer key="filter-container">
                    <FilterContainer />
                </RowContainer>
                <RowContainer key="supplier-summary-table">
                    <TableSummaryVendor />
                </RowContainer>
            </div>

// supplier select container 
const SupplierSelectContainer = (props) =>
    <Card 
        bodyStyle={{padding: 0}}
        bordered={false}
        >
        <Card.Grid style={{ width: '50%'}}>
            <h4 style={{color: '#54b948'}}>Supplier Selection</h4>
            <FilterSelect />
        </Card.Grid>
        <Card.Grid style={{ width: '50%', background: "#a0cf67", textAlign: 'center', color: "white"}}>
            <h1 style={{color: "white"}}>ALL</h1>
            <h4 style={{color: "white"}}>Suppliers Selected</h4>
        </Card.Grid>
    </Card>


// bar chart - spend over categories
const ChartContainerBarSpendCategories = (props) =>
    <FetchData path="/datalake/ds-12345/categorylevel1query">
        {({isFetching, isError, data}) => 
            <Card key="chartcontainerbarspendcategories" hoverable loading={isFetching} bodyStyle={{padding: 0}}>
                <LoaderIcon isFetching={isFetching} />
                {data?<CardGrid render={<BarChart actions={props.actions} data={data.data}/>}/>:"Loading..."}
            </Card>
        }
    </FetchData>
