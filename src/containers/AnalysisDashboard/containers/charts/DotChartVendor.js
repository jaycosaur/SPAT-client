

import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './../../components/dataloaders/LoaderIcon'
import { Card } from 'antd'
import CardGrid from './../../components/layout/CardGrid'
import { connect } from 'react-redux'
import { filterSelectVendor, filterDeselectVendor, fetchDataQuery } from './../../../../store/actions/dashboardActions'
import BubbleChart from './../../components/charts/BubbleChart'

const chartKey = "organisationDotChart"

const wrangler = (data) => data.map(item => {
    return {
        ...item,
        isOutlier: Math.random() > 0.9
    }
})

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
                style={{alignSelf: "stretch"}}
            >
                <LoaderIcon isFetching={this.props.data.isLoading} />
                <CardGrid render={
                    <BubbleChart {...this.props} data={this.props.data.data&&this.props.selector(this.props.data.data.data)}/>
                } />
            </Card>:"loading..."
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
            dispatch(fetchDataQuery(chartKey, "/query/1/organisation"))
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