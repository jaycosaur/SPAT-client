import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './../../../components/dataloaders/LoaderIcon'
import { Card } from 'antd'
import { connect } from 'react-redux'
import { filterSelectVendor, filterDeselectVendor, fetchDataQuery } from './../../../../../store/actions/dashboardActions'
import SelectFilter from './../filterTypes/SelectFilter'

const chartKey = "vendorFilter"

const wrangler = (data) => {
    return data.filter(item => item.vendor).map(item=>{
        return {label: item.vendor, value: item.vendor, key: item.vendor}
    })
}

class FilterWrapper extends React.Component {
    componentDidMount() {
        this.props.fetchDataQuery()
    }

    render() {
        return (
            this.props.data?
                <SelectFilter handleSelect={this.props.handleSelect} handleDeselect={this.props.handleDeselect} value={this.props.filterState.items} isLoading={this.props.data.isLoading} data={this.props.data&&this.props.data.data&&this.props.selector(this.props.data.data.data)}/>
            :"loading..."
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSelect: (e) => {
            dispatch(filterSelectVendor(e))
        },
        handleDeselect: (e) => {
            dispatch(filterDeselectVendor(e))
        },
        fetchDataQuery: () => {
            dispatch(fetchDataQuery(chartKey, "/data/ds-12345/query/vendorlist"))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.dashboard.dataQueries[chartKey],
        filterState: state.dashboard.filters.vendors,
        selector: (data) => wrangler(data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterWrapper)