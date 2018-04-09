import React from 'react'
import FetchData from './../../components/dataloaders/FetchData'
import LoaderIcon from './../../components/dataloaders/LoaderIcon'
import BubbleChart from './../../components/charts/BubbleChart'
import { Card } from 'antd'

export default (props) =>
    <FetchData path="/query/1/organisation">
        {({isFetching, isError, data}) =>
            <Card bodyStyle={{ padding: 0 }} loading={isFetching}>
                <LoaderIcon isFetching={isFetching} />
                {!isFetching?<BubbleChart actions={props.actions} data={data.data}/>:"Loading..."}
            </Card>
        }
    </FetchData>
