import React from 'react'
import FetchData from './../../components/dataloaders/FetchData'
import LoaderIcon from './../../components/dataloaders/LoaderIcon'
import { Card } from 'antd'
import FlexTable from './../../components/tables/FlexTable'

export default (props) =>
    <FetchData path="/data/ds-12345/query/invoicepoquery">
        {({isFetching, isError, data}) => {
            console.log(data)
            return (
                <Card bodyStyle={{padding: 0 }} loading={isFetching} hoverable>
                    <LoaderIcon right isFetching={isFetching} />
                    {!isFetching?<FlexTable actions={props.actions} data={data}/>:"Loading..."}
                </Card>
            )
        }
        }
    </FetchData >
