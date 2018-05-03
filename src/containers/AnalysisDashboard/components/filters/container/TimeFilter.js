import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './../../../components/dataloaders/LoaderIcon'
import { Card } from 'antd'
import { connect } from 'react-redux'
import { filterSelectTime, filterDeselectTime, fetchDataQuery } from './../../../../../store/actions/dashboardActions'
import TimeRangeFilter from './../filterTypes/TimeRangeFilter'
import moment from 'react-moment'

const chartKey = "timeFilter"

const wrangler = (data) => {
    return data
}

class FilterWrapper extends React.Component {
    componentDidMount() {
        this.props.fetchDataQuery()
    }

    render() {
        return (
            this.props.data?
                <TimeRangeFilter 
                    handleSelect={this.props.handleSelect} 
                    handleDeselect={this.props.handleDeselect} 
                    value={[this.props.filterState.to, this.props.filterState.from]} isLoading={this.props.data.isLoading} data={this.props.data&&this.props.data.data&&this.props.selector(this.props.data.data.data)}/>
            :"loading..."
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
            dispatch(fetchDataQuery(chartKey, "/data/ds-12345/query/vendorlist"))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.dashboard.dataQueries[chartKey],
        filterState: state.dashboard.filters.time,
        selector: (data) => wrangler(data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterWrapper)