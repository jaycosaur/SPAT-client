import React from 'react'
import { Col } from 'antd';

//importing all charts and components
import ColumnChartCategory from './../containers/charts/ColumnChartCategory/'
import BarChartLocations from './../containers/charts/BarChartLocations/'
import TableLocations from './../containers/tables/TableLocations'

import AreaChartTime from './../containers/charts/AreaChartTime/'
import DotChartVendor from './../containers/charts/DotChartVendor'
import TableInvoicePo from './../containers/tables/TableInvoicePo'

import RowContainer from './../components/layout/RowContainer'
import SummaryQueryCard from './../containers/infocards/SummaryQueryCard'
import AltSummaryQueryCard from './../containers/infocards/AltSummaryQueryCard'

import VendorNameCard from './../containers/infocards/VendorNameCard'




export default (props) => 
            <React.Fragment>
                <RowContainer key="vendor-title">
                    <VendorNameCard />
                </RowContainer>
                <RowContainer key="upper-cards">
                    <SummaryQueryCard actions={props.actions}/>
                </RowContainer>
                <RowContainer key="spend-categories-bar-chart">
                    <ColumnChartCategory actions={props.actions}/>
                </RowContainer>
                <RowContainer key="spend-time-area-chart">
                    <AreaChartTime />
                </RowContainer>
                <RowContainer key="two-column-mid-upper">
                    <Col key="left" span={12} style={{padding: 0}}>
                        <BarChartLocations />
                    </Col>
                    <Col key="right" span={12} style={{padding: 0}}>
                        <TableLocations />
                    </Col>
                </RowContainer>
                <RowContainer key="two-column-mid">
                    <Col key="left" span={12} style={{padding: 0}}>
                        <AltSummaryQueryCard/>
                    </Col>
                    <Col key="right" span={12} style={{padding: 0}}>
                        <DotChartVendor />
                    </Col>
                </RowContainer>
                <RowContainer key="supplier-summary-table">
                    <TableInvoicePo />
                </RowContainer>
            </React.Fragment>
