import React, { Component } from "react";
import { connect } from 'react-redux'
import { setDatasetId, fetchDatasetInformation } from './../../store/actions/dashboardActions'

import View from './view'
import FilterPopover from './FilterPopover'

import ReactHighcharts from 'react-highcharts'
require('highcharts-exporting')(ReactHighcharts.Highcharts) // raise this up to index
require('highcharts-offline-exporting')(ReactHighcharts.Highcharts) // raise this up to index

class AnalysisDashboard extends Component {
    state={
        activeFilters: [],
        isFullScreen: false
    }

    componentDidMount() {
        this.props.dispatch(setDatasetId(this.props.match.params.id))
        this.props.dispatch(fetchDatasetInformation(this.props.match.params.id))
    }

    render() {
        const fullScreenStyle = {
            position: "absolute",
            left: 0,
            top: 0,
            background: "#f0f2f5",
            minHeight: "100vh",
            maxWidth: "100%",
            marginTop: 64
        }
        return (
            <div className="AnalysisDashboard" style={this.props.dashboard.fullscreen?fullScreenStyle:{}}>
                <FilterPopover/>    
                <View />
            </div>
        )
    }
}

export default connect((store) => {
    return {
        dashboard: store.dashboard
    }
    })(AnalysisDashboard)



