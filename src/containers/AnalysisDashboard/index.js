import React, { Component } from "react";
import { Tag, Popover, Avatar } from 'antd';
import { DataLoader, DataContext } from './dataloader'
import "./AnalysisDashboard.css"

import View from './view'


export default class AnalysisDashboard extends Component {
    state={
        activeFilters: []
    }

    handleClick = (e) => {
        if (e.eventType === "select"){
            this.setState({
                activeFilters: [ ...this.state.activeFilters, [e.type,e.value,e.type + ": "+ e.value]]
            })
        } else if (e.eventType === "deselect"){
            this.setState({
                activeFilters: this.state.activeFilters.filter(item => item[0]!==e.type)
            })
        }
            
    }

    closeHandler = (e) => {
        let arr = this.state.activeFilters
        arr.splice(e,1)
        this.setState({
            activeFilters: arr
        })
    }

    render() {
        return (
            <div className="AnalysisDashboard">
                <DataLoader>
                        <FilterPopover 
                            activeFilters={this.state.activeFilters.map(i=>i[2])} 
                            closeHandler={this.closeHandler}/>
                    <DataContext.Consumer>
                        { context =>
                            <View actions={context.actions} data={context.data}/>
                        }
                    </DataContext.Consumer>
                </DataLoader>
            </div>
        )
    }
}

const FilterContent = (props) =>
            <div style={{width: 140}}>
                {props.activeFilters.length>0&&props.activeFilters.map((item, key) =>
                    <Tag key={item} closable onClose={e => {e.preventDefault();props.closeHandler(key)}}>{item}</Tag>
                )}
            </div>

const FilterPopover = (props) =>
            !props.activeFilters.length>0
                ?
                <Avatar size="large" icon="filter" style={{ backgroundColor: 'gray', position: "fixed", zIndex: 2000, right: 0, top: 0, marginRight: 10, marginTop: 10 }}/>
                :
                <Popover content={<FilterContent activeFilters={props.activeFilters} closeHandler={props.closeHandler}/>} placement="leftTop">
                    <Avatar size="large" icon="filter" style={{ backgroundColor: '#a0cf67', position: "fixed", zIndex: 2000, right: 0, top: 0, marginRight: 10, marginTop: 10 }}/>
                </Popover>

