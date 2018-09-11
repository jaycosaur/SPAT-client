import React from 'react'
import { Col } from 'antd';

//importing all charts and components
import ColumnChartCategory from './../containers/charts/ColumnChartCategory/'
import ColumnChartTopVendors from './../containers/charts/ColumnChartTopVendors/'
import AreaChartTime from './../containers/charts/AreaChartTime/'
import DotChartVendor from './../containers/charts/DotChartVendor'
import TableInvoicePo from './../containers/tables/TableInvoicePoCat1'
import CategoryTableLevel1 from './../containers/tables/CategoryTableLevel1'
import CategoryTableLevel2 from './../containers/tables/CategoryTableLevel2'
import CategoryTableLevel3 from './../containers/tables/CategoryTableLevel3'
import CategoryTableLevel4 from './../containers/tables/CategoryTableLevel4'

import RowContainer from './../components/layout/RowContainer'
import SummaryQueryCard from './../containers/infocards/SummaryQueryCard'
import AltSummaryQueryCard from './../containers/infocards/AltSummaryQueryCard'
export default (props) => 
            <React.Fragment>
                <RowContainer key="upper-cards">
                    <SummaryQueryCard actions={props.actions}/>
                    <AltSummaryQueryCard/>
                </RowContainer>
                <RowContainer key="spend-categories-bar-chart">
                    <ColumnChartCategory actions={props.actions}/>
                </RowContainer>
                <RowContainer key="cat-level-1-table">
                    <CategoryTableLevel1 />
                </RowContainer>
                <RowContainer key="cat-level-2-table">
                    <CategoryTableLevel2 />
                </RowContainer>
                <RowContainer key="cat-level-3-table">
                    <CategoryTableLevel3 />
                </RowContainer>
                <RowContainer key="cat-level-4-table">
                    <CategoryTableLevel4 />
                </RowContainer>
                <RowContainer key="two-column-mid">
                    <Col key="left" span={12} style={{padding: 0}}>
                        <AltSummaryQueryCard/>
                    </Col>
                    <Col key="right" span={12} style={{padding: 0}}>
                        <ColumnChartTopVendors />
                    </Col>
                </RowContainer>
            </React.Fragment>
