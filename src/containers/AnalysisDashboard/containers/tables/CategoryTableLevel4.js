import React from 'react'
import FetchData from './../../components/dataloaders/FetchData'
import LoaderIcon from './../../components/dataloaders/LoaderIcon'
import { Card } from 'antd'
import FlexTable from './../../components/tables/FlexTable'
import CardContainer from './../../components/infocards/CardContainer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterSelectCategory, filterDeselectCategory, fetchDataQuery } from './../../../../store/actions/dashboardActions'

const chartKey = "category-dashboard-category-level4"

const wrangler = (data) => {
    return data
}

class SummaryQueryCard extends React.Component {
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
        this.props.fetchDataQuery(this.props.filters)
    }

    shouldComponentUpdate(nextProps) {
        const lastFetch = this.props.data&&this.props.data.fetchTime
        const newFetch = nextProps.data&&nextProps.data.fetchTime
        if((this.props.data==null&&nextProps.data!=null)
            ||(lastFetch !== newFetch&&newFetch!=null)||(this.props.data.isLoading ==! nextProps.data.isLoading)
        )
            {
            return true
        } else {
            return false
        }

    }

    render() {
        return (
            this.props.data
            ?
            <Card bodyStyle={{padding: 8 }} loading={!this.props.data.hasData&&!this.props.data.isError} hoverable>
                <LoaderIcon right isFetching={!this.props.data.hasData&&!this.props.data.isError} />
                <FlexTable actions={this.props.actions} data={this.props.data.hasData&&this.props.selector(this.props.data.data)}/>
            </Card>            
            :"loading..."
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSelect: (e) => {
            dispatch(filterSelectCategory([e.point.category]))
        },
        handleDeselect: (e) => {
            dispatch(filterDeselectCategory(e))
        },
        fetchDataQuery: (filters) => {
            dispatch(fetchDataQuery(chartKey, "/data/ds-12345/query/categorylevel4query", filters))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.dashboard.dataQueries[chartKey],
        selector: (data) => wrangler(data),
        filters: state.dashboard.filters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryQueryCard)
