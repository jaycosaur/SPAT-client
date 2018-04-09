import React from 'react'
import { Col, Card } from 'antd';

//importing all charts and components
import ColumnChartCategory from './../containers/charts/ColumnChartCategory/'
import AreaChartTime from './../containers/charts/AreaChartTime/'
import DotChartVendor from './../containers/charts/DotChartVendor'
import TableInvoicePo from './../containers/tables/TableInvoicePo'

import CardContainer from './../components/infocards/CardContainer'

import RowContainer from './../components/layout/RowContainer'
import FilterContainer from './../components/filters/FilterContainer'

import SummaryQueryCard from './../containers/infocards/SummaryQueryCard'

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

export default (props) => 
            <div>
                <RowContainer key="upper-cards">
                    <SummaryQueryCard actions={props.actions}/>
                </RowContainer>
                <RowContainer key="spend-categories-bar-chart">
                    <ColumnChartCategory actions={props.actions}/>
                </RowContainer>
                <RowContainer key="spend-time-area-chart">
                    <AreaChartTime />
                </RowContainer>
                <RowContainer key="two-column-mid">
                    <Col span={12} style={{padding: 0}}>
                        <CardContainer itemWidth="50%" data={inputData2}/>
                    </Col>
                    <Col span={12} style={{padding: 0, height: "100%"}}>
                        <DotChartVendor />
                    </Col>
                </RowContainer>
                <RowContainer key="filter-container">
                    <FilterContainer />
                </RowContainer>
                <RowContainer key="top20-suppliers">
                    <ColumnChartCategory />
                </RowContainer>
                <RowContainer key="supplier-summary-table">
                    <TableInvoicePo />
                </RowContainer>
            </div>
