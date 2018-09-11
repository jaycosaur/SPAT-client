import React from 'react'
import { Col } from 'antd';

//importing all charts and components
import ColumnChartCategory from './../containers/charts/ColumnChartCategory/'
import ColumnChartTopVendors from './../containers/charts/ColumnChartTopVendors/'
import AreaChartTime from './../containers/charts/AreaChartTime/'
import DotChartVendor from './../containers/charts/DotChartVendor'
import TableInvoicePo from './../containers/tables/TableInvoicePo'

import RowContainer from './../components/layout/RowContainer'
import SummaryQueryCard from './../containers/infocards/SummaryQueryCard'
import AltSummaryQueryCard from './../containers/infocards/AltSummaryQueryCard'

export default (props) => 
            <React.Fragment>
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
                    <Col key="left" span={12} style={{padding: 0}}>
                        <AltSummaryQueryCard/>
                    </Col>
                    <Col key="right" span={12} style={{padding: 0}}>
                        <DotChartVendor />
                    </Col>
                </RowContainer>
                <RowContainer key="top20-suppliers">
                    <ColumnChartTopVendors />
                </RowContainer>
                <RowContainer key="supplier-summary-table">
                    <TableInvoicePo />
                </RowContainer>
            </React.Fragment>
