import React from 'react'
import FetchData from './../../components/dataloaders/FetchData'
import LoaderIcon from './../../components/dataloaders/LoaderIcon'
import BarChart from './../../components/charts/ColumnChart'
import { Card } from 'antd'
import CardGrid from './../../components/layout/CardGrid'

export default (props) =>
    <FetchData path="/data/ds-12345/query/categorylevel1query">
        {({isFetching, isError, data}) => 
            <Card key="chartcontainerbarspendcategories" hoverable loading={isFetching} bodyStyle={{padding: 0}}>
                <LoaderIcon isFetching={isFetching} />
                {data?<CardGrid render={<BarChart actions={props.actions} data={data.data}/>}/>:"Loading..."}
            </Card>
        }
    </FetchData>
