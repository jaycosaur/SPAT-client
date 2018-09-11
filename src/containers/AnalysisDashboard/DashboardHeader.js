import React from 'react'
import { Avatar } from 'antd';
import { connect } from 'react-redux'
import { toggleFullscreen } from './../../store/actions/dashboardActions'
import { Link } from 'react-router-dom'
import FilterContainer from './components/filters/FilterContainer'

const DashboardHeader = (props) => ( 
    <div style={{position: "fixed", top: 0, width: "100%", zIndex: 75}}>
        <div style={{ background: "rgb(159,193,69)", paddingLeft: "16px", width: "100%", height: 64, display: "flex", alignItems: "center", boxShadow: "0px 2px 4px -2px #000"}}>
            <Link to="/analysisdashboard" ><Avatar style={{cursor: "pointer"}} onClick={props.toggleFullscreen} style={{background: "white", color: "rgb(159,193,69)", marginRight: 16}} icon="rollback"/></Link>
            <Avatar style={{cursor: "pointer", background: "white", color: "rgb(159,193,69)", marginRight: 16}} onClick={props.toggleFullscreen} icon={props.dashboard.fullscreen?"shrink":"arrows-alt"}/>
            {props.dashboard.dataset.info&&<span>
                <h4 style={{color: "white"}}>{props.dashboard.dataset.info.title.toUpperCase()}</h4>
                <p style={{color: "white", marginBottom: 0}}>{props.dashboard.dataset.info.description}</p>
            </span>}
        </div>
        {props.showFilter&&<div style={{boxShadow: "0px 2px 4px -2px #000"}}><FilterContainer /></div>}
    </div>)


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleFullscreen: () => {
            dispatch(toggleFullscreen())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dashboard: state.dashboard,
        showFilter: state.dashboard.filterShow
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader)