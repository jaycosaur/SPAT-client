import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './../../../components/dataloaders/LoaderIcon'
import Chart from './Chart'
import { Card } from 'antd'
import CardGrid from './../../../components/layout/CardGrid'
import { connect } from 'react-redux'
import { filterSelectTime, filterDeselectTime, fetchDataQuery } from './../../../../../store/actions/dashboardActions'
const chartKey = "time"

const wrangler = (data) => {
    return data.map(item => [new Date(item["Transaction Date"]).getTime(),parseFloat(item["Total Spend"])]).sort((a,b) => a[0]-b[0])
}

class ChartContainer extends React.Component {
    static propTypes = {
        handleSelect: PropTypes.func.isRequired, 
        handleDeselect: PropTypes.func.isRequired,
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

    componentDidMount() {
        this.props.fetchDataQuery()
    }

    render() {
        return (
            this.props.data?<Card 
                key="chartcontainerbarspendcategories" 
                loading={this.props.data.isLoading} bodyStyle={{padding: 0}}
            >
                <LoaderIcon isFetching={this.props.data.isLoading} />
                {this.props.data.data&&<CardGrid render={<Chart {...this.props} data={this.props.data.data&&this.props.selector(this.props.data.data.data)}/>}/>}
            </Card>:"loading..."
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSelect: (e) => {
            dispatch(filterSelectTime(e))
        },
        handleDeselect: (e) => {
            dispatch(filterDeselectTime(e))
        },
        fetchDataQuery: () => {
            dispatch(fetchDataQuery(chartKey, "/data/ds-12345/query/timequery"))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.dashboard.dataQueries[chartKey],
        selector: (data) => wrangler(data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)