
import React from "react";
import { Popover, Avatar, Switch } from 'antd';
import { connect } from 'react-redux'

const FilterPopover = (props) => Object.keys(props.filters).filter(key => props.filters[key].active).length===0
    ?
    <Avatar size="large" icon="filter" style={{ backgroundColor: 'gray', position: "fixed", zIndex: 100, right: 0, top: 0, marginRight: 10, marginTop: 10 }}/>
    :
    <Popover content={<FilterContent filters={props.filters} closeHandler={null&&props.actions.categoryDeselect}/>} placement="leftTop">
        <Avatar size="large" icon="filter" style={{ border: "solid 1px #fff", backgroundColor: '#a0cf67', position: "fixed", zIndex: 100, right: 0, top: 0, marginRight: 10, marginTop: 10 }}/>
    </Popover>

const FilterContent = (props) => (
    <div style={{width: 140}}>
        {Object.keys(props.filters).map(filterKey => (
            <div>
                {filterKey} {props.filters[filterKey].items&&props.filters[filterKey].items.length>0&&`(${props.filters[filterKey].items.length} active)`} : <Switch checked={props.filters[filterKey].active}/>
            </div>
        ))}
    </div>
)

export default connect((store) => {
    return {
        filters: store.dashboard.filters
    }
    })(FilterPopover)


