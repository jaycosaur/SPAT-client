import React from 'react'
import FetchData from './../../../components/dataloaders/FetchData'
import LoaderIcon from './../../../components/dataloaders/LoaderIcon'
import Chart from './Chart'
import { Card } from 'antd'
import CardGrid from './../../../components/layout/CardGrid'

export default (props) =>
    <FetchData path="/data/ds-12345/query/categorylevel1query">
        {({isFetching, isError, data}) => 
            <Card key="chartcontainerbarspendcategories" hoverable loading={isFetching} bodyStyle={{padding: 0}}>
                <LoaderIcon isFetching={isFetching} />
                {data?<CardGrid render={<Chart actions={props.actions} data={wrangler(data.data)}/>}/>:"Loading..."}
            </Card>
        }
    </FetchData>

const wrangler = (data) => {
    let chartData = data
    chartData = chartData.filter(item => item['Total Spend']>0).sort((a,b) => b['Total Spend']-a['Total Spend'])
    let categories = chartData.map(item => item.catlevel1)
    let series = chartData.map(item => parseFloat(item['Total Spend']))
    return ({
        categories,
        series
    })
}