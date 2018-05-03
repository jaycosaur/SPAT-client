import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './../../../components/dataloaders/LoaderIcon'
import { Card } from 'antd'
import { connect } from 'react-redux'
import { filterSelectCategory, filterDeselectCategory, fetchDataQuery } from './../../../../../store/actions/dashboardActions'
import TreeSelectFilter from './../filterTypes/TreeSelectFilter'

const chartKey = "categoryFilter"

const produceChildren = (arr) => {
    let mappedArr = arr.reduce((arrNew, row)=>{
        if(arrNew.filter(k => k.label===row[0]).length===1){return [...arrNew]}
        let childrenArr = arr.filter(i => i.length>1)
        childrenArr = childrenArr&&childrenArr.filter(i => i[0]===row[0])
        childrenArr = childrenArr&&childrenArr.map(j => j.slice(1))
        let obj = {
                label: row[0],
                value: row[0],
                key: row[0],
                children: childrenArr.length>0&&produceChildren(childrenArr)
            }
        return [...arrNew, obj]
    },[])
    return mappedArr
}

const wrangler = (data) => {
    let filteredArr = data.filter(i => i["categoryLevel1"]&&i["categoryLevel1"].length>0)
    let newArray = filteredArr.map(item => Object.keys(item).map(i => item[i]))
    return produceChildren(newArray)
}

class FilterWrapper extends React.Component {
    componentDidMount() {
        this.props.fetchDataQuery()
    }

    render() {
        return (
            this.props.data?
                <TreeSelectFilter 
                    handleSelect={this.props.handleSelect} 
                    handleDeselect={this.props.handleDeselect} 
                    value={this.props.filterState.items}
                    isLoading={this.props.data.isLoading} data={this.props.data&&this.props.data.data&&this.props.selector(this.props.data.data.data)}/>
            :"loading..."
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSelect: (e) => {
            dispatch(filterSelectCategory(e))
        },
        handleDeselect: (e) => {
            dispatch(filterDeselectCategory(e))
        },
        fetchDataQuery: () => {
            dispatch(fetchDataQuery(chartKey, "/data/ds-12345/query/categorylist"))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.dashboard.dataQueries[chartKey],
        filterState: state.dashboard.filters.category,
        selector: (data) => wrangler(data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterWrapper)