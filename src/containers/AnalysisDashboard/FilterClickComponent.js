import React from 'react'
import { connect } from 'react-redux'
import { Avatar } from 'antd'
import { fetchDataQuery } from './../../store/actions/dashboardActions'

class FilterRefetchData extends React.Component {
    state = {
        filters: null,
        lastFilterClick: null
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.filters != prevState.filters){
            return {
                lastFilterClick: Date.now(),
                filters: nextProps.filters
            }
        } else {
            return null
        }
    }
    handleClick = () => {
        this.props.queries&&Object.keys(this.props.queries).map(key => {
            let keyData = this.props.queries[key]
            this.props.fetchDataQuery(key, keyData.path, this.props.filters)
        })
    }

    handleRefreshErrors = () => {
        this.props.queries&&Object.keys(this.props.queries).map(key => {
            let keyData = this.props.queries[key]
            if(keyData.isError){
                this.props.fetchDataQuery(key, keyData.path, this.props.filters)
            }
        })
    }

    render() {
        const isLoading = this.props.queries&&Object.keys(this.props.queries).map(key => this.props.queries[key].isLoading).filter(i => i).length > 0
        const isError = this.props.queries&&Object.keys(this.props.queries).map(key => this.props.queries[key].isError).filter(i => i).length > 0
        this.handleRefreshErrors()
        return (
            <Avatar 
                onClick={this.handleClick}
                size="large" 
                icon={!isLoading?(isError?"warning":"sync"):"loading"} 
                style={{
                    cursor: "pointer", 
                    border: "solid 1px #fff", 
                    backgroundColor: isLoading?"gray":(isError?'gold':'#a0cf67'), 
                    }}/>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchDataQuery: (chartKey, chartPath, filters) => {
            dispatch(fetchDataQuery(chartKey, chartPath, filters))
        }
    }
}

export default connect((store) => {
    return {
        filters: store.dashboard.filters,
        queries: store.dashboard.dataQueries
    }
    }, mapDispatchToProps)(FilterRefetchData)
