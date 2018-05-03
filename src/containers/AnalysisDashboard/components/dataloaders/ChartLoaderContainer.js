import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './../../../components/dataloaders/LoaderIcon'
import Chart from './Chart'
import { Card } from 'antd'
import CardGrid from './../../../components/layout/CardGrid'

export default class ChartLoaderContainer extends React.Component {
    static propTypes = {
        handleSelect: PropTypes.func.isRequired, 
        handleDeselect: PropTypes.func.isRequired,
        queryPath: PropTypes.string.isRequired,
        chartKey: PropTypes.string.isRequired,
        selector: PropTypes.func.isRequired,
        fetchDataQuery: PropTypes.func.isRequired,
        data: PropTypes.shape({
            isLoading: PropTypes.bool,
            path: PropTypes.string,
            data: PropTypes.shape({
                header: PropTypes.array,
                data: PropTypes.array
            })
        })
    }

    static displayName = `WithChartLoaderContainer(${this.props.chartKey})`

    componentDidMount() {
        this.props.fetchDataQuery(this.props.chartKey, this.props.queryPath)
    }

    render() {
        return (
            this.props.data?<Card 
                key="chartcontainerbarspendcategories" 
                loading={this.props.data.isLoading} bodyStyle={{padding: 0}}
            >
                <LoaderIcon isFetching={this.props.data.isLoading} />
                <CardGrid render={<Chart {...this.props} data={this.props.selector(this.props.data.data.data)}/>}/>
            </Card>:"loading..."
        )
    }
}