import React from 'react'
import { Avatar } from 'antd';
import { connect } from 'react-redux'
import { toggleFullscreen } from './../../store/actions/dashboardActions'
import { goBack } from 'react-router-redux'

const DashboardHeader = (props) => ( 
    <div style={{position: "fixed", top: 0, width: "100%", zIndex: 75, background: "rgb(159,193,69)", borderRadius: "0 0 32px 0", height: 64, display: "flex", alignItems: "center", paddingLeft: 16}}>
      {null&&<Avatar style={{cursor: "pointer"}} onClick={props.toggleFullscreen}style={{background: "white", color: "rgb(159,193,69)", marginRight: 16}} icon="rollback"/>}
      <Avatar style={{cursor: "pointer", background: "white", color: "rgb(159,193,69)", marginRight: 16}} onClick={props.toggleFullscreen} icon={props.dashboard.fullscreen?"shrink":"arrows-alt"}/>
      {props.dashboard.dataset.info&&<span>
        <h4 style={{color: "white"}}>{props.dashboard.dataset.info.title.toUpperCase()}</h4>
        <p style={{color: "white", marginBottom: 0}}>{props.dashboard.dataset.info.description}</p>
      </span>}
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
        dashboard: state.dashboard
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader)