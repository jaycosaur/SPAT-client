import React from 'react'
import FetchData from './../../components/dataloaders/FetchData'
import LoaderIcon from './../../components/dataloaders/LoaderIcon'
import { Card } from 'antd'
import FlexTable from './../../components/tables/FlexTable'

export default (props) =>
    <FetchData path={props.path||"/data/ds-12345/query/categorylevel1query"}>
        {({isFetching, isError, data}) => {
            return (
                <Card bodyStyle={{padding: 8 }} loading={isFetching} hoverable>
                    <LoaderIcon right isFetching={isFetching} />
                    {!isFetching?<FlexTable actions={props.actions} data={data}/>:"Loading..."}
                </Card>
            )
        }}
    </FetchData >

