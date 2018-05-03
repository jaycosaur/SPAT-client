import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './../../../components/dataloaders/LoaderIcon'
import Chart from './Chart'
import { Card } from 'antd'
import CardGrid from './../../../components/layout/CardGrid'
import { connect } from 'react-redux'
import { filterSelectCategory, filterDeselectCategory, fetchDataQuery } from './../../../../../store/actions/dashboardActions'

const chartKey = "categorylevel1query"


const wrangler = (data) => {
    if (data) {
        let chartData = data
        chartData = chartData.filter(item => item['Total Spend']>0).sort((a,b) => b['Total Spend']-a['Total Spend'])
        let categories = chartData.map(item => item.catlevel1)
        let series = chartData.map(item => parseFloat(item['Total Spend']))
        return ({
            categories,
            series
        })  
    }
    return null
    
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
                loading={!this.props.data.hasData&&!this.props.data.isError} bodyStyle={{padding: 0}}
            >
                <LoaderIcon onClick={this.props.fetchDataQuery} isFetching={this.props.data.isLoading} isError={this.props.data.isError} />
                {!this.props.data.isError?
                    <CardGrid render={<Chart {...this.props} data={this.props.data.hasData&&this.props.selector(this.props.data.data.data)}/>}/>
                    :
                    <CardGrid render={<h3>There was an error trying the fetch the data from our servers.<a onClick={this.props.fetchDataQuery}> Click here to try again.</a></h3>}/>
                }
            </Card>:"loading..."
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
        fetchDataQuery: () => {
            dispatch(fetchDataQuery(chartKey, "/data/ds-12345/query/categorylevel1query"))
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