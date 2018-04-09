import React, { PureComponent } from "react";
import { Tag, Popover, Avatar, Affix, Card } from 'antd';
import { DashboardProvider, DashboardConsumer } from './store/'

import View from './view'

export default class AnalysisDashboard extends PureComponent {
    state={
        activeFilters: [],
        isFullScreen: false
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
    toggleFullScreen = () => {
        this.setState((state) => {return {isFullScreen: !state.isFullScreen}})
    }
    closeHandler = (e) => {
        let arr = this.state.activeFilters
        arr.splice(e,1)
        this.setState({
            activeFilters: arr
        })
    }

    componentDidMount() {
        this.setState({
            datasetId: this.props.match.params.id
        })
    }

    render() {
        const fullScreenStyle = {
            position: "absolute",
            left: 0,
            top: 0,
            background: "#f0f2f5"
        }
        return (
            <div className="AnalysisDashboard" style={this.state.isFullScreen?fullScreenStyle:{}}>
                <DashboardProvider>
                    <DashboardConsumer>
                        { context =>
                            <FilterPopover
                                activeFilters={context.filter.category} 
                                actions={context.actions}/>
                        }
                    </DashboardConsumer>
                    <DashboardConsumer>
                        { context =>
                            <View toggleFullScreen={this.toggleFullScreen} isFullScreen={this.state.isFullScreen} datasetId={this.state.datasetId} actions={context.actions}/>
                        }
                    </DashboardConsumer>
                </DashboardProvider>
            </div>
        )
    }
}

const FilterContent = (props) =>
            <div style={{width: 140}}>
                {props.activeFilters.length>0&&props.activeFilters.map((item, key) =>
                    <Tag key={key} closable onClose={e => {e.preventDefault();props.closeHandler({type:'category', index: key})}}>{item}</Tag>
                )}
            </div>

const FilterPopover = (props) =>
            !props.activeFilters.length>0
                ?
                <Avatar size="large" icon="filter" style={{ backgroundColor: 'gray', position: "fixed", zIndex: 100, right: 0, top: 0, marginRight: 10, marginTop: 10 }}/>
                :
                <Popover content={<FilterContent activeFilters={props.activeFilters} closeHandler={props.actions.categoryDeselect}/>} placement="leftTop">
                    <Avatar size="large" icon="filter" style={{ border: "solid 1px #fff", backgroundColor: '#a0cf67', position: "fixed", zIndex: 100, right: 0, top: 0, marginRight: 10, marginTop: 10 }}/>
                </Popover>

