import React from 'react'
import CardContainer from './../../components/infocards/CardContainer'
import PropTypes from 'prop-types'
 import { connect } from 'react-redux'
import { filterSelectCategory, filterDeselectCategory, fetchDataQuery } from './../../../../store/actions/dashboardActions'
const chartKey = "enterprise-dashboard-alt-card"

const wrangler = (data) => {
    let dataWrang = null
    if (data) {
      dataWrang = data.data.map((item,i) => {return {title: item.key.toUpperCase(), value: Math.round(item.value), accounting: item.currency==="true"?true:false}})
    }
    return dataWrang
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
            ?<CardContainer isFetching={!this.props.data.hasData&&!this.props.data.isError} itemWidth="50%" data={this.props.data.hasData&&this.props.selector(this.props.data.data)}/>
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
            dispatch(fetchDataQuery(chartKey, "/data/ds-12345/query/altinformationquery", filters))
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
