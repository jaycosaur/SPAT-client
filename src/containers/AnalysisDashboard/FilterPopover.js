
import React from "react";
import { Avatar } from 'antd';
import { connect } from 'react-redux'
import { toggleFilterShow, clearFilter } from './../../store/actions/dashboardActions'
import FilterClickComponent from './FilterClickComponent'

const FilterPopover = (props) => (
    <div style={{
        position: "fixed", 
                zIndex: 100, 
                right: 0, 
                top: 0, 
                marginRight: 10, 
                marginTop: 10
        }}>
        <FilterClickComponent />
        <Avatar 
            onClick={props.clearFilter} 
            size="large" 
            icon="delete"
            style={{
                marginLeft: 8,
                cursor: Object.keys(props.filters).filter(key => props.filters[key].active).length===0?"not-allowed":"pointer", 
                border: "solid 1px #fff", 
                backgroundColor:  Object.keys(props.filters).filter(key => props.filters[key].active).length===0?"gray":'red', 
                 }}/>
        <Avatar 
            onClick={props.toggleShow} 
            size="large" 
            icon={props.showFilter?"up":"filter"} 
            style={{
                marginLeft: 8,
                cursor: "pointer", 
                border: "solid 1px #fff", 
                backgroundColor:  Object.keys(props.filters).filter(key => props.filters[key].active).length===0?"gray":'#a0cf67', 
                 }}/>
    </div>
)

    
    

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleShow: (e) => {
            dispatch(toggleFilterShow())
        },
        clearFilter: (e) => dispatch(clearFilter())
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.dashboard.filters,
        showFilter: state.dashboard.filterShow
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPopover)

