import React from 'react'
import FetchData from './../../components/dataloaders/FetchData'
import LoaderIcon from './../../components/dataloaders/LoaderIcon'
import { Card } from 'antd'
import DataTable from './../../components/tables/DataTable'

export default (props) =>
    <FetchData path="/query/1/organisation">
        {({isFetching, isError, data}) =>
            <Card bodyStyle={{padding: 0 }} loading={isFetching} hoverable>
                <LoaderIcon right isFetching={isFetching} />
                {!isFetching?<DataTable actions={props.actions} data={data.data}/>:"Loading..."}
            </Card>
        }
    </FetchData >
