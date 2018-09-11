import React from 'react'
import { Avatar, Tooltip, Icon, Badge } from 'antd'

const leftStyle = {
    left: 0, 
    top: 0, 
}
const rightStyle = {
    right: 0,
    top: 0
}

export default (props) =>
    <div style={{position: "absolute", display: "block", ...props.right?rightStyle:leftStyle, margin: 16, zIndex: 50}}>
        <Tooltip title="Click to refresh chart">
            <Avatar 
                icon={props.isFetching?'loading':props.isError?'cross':'check'} 
                onClick={props.onClick}
                size="small"
                style={{
                    background: props.isError?"red":"#95de64",
                    color: '#fff', 
                    cursor: "pointer",
                    }}/>
        </Tooltip>
        <Tooltip title="Ask a question about this info">
            <Avatar 
                icon="message"
                onClick={e => console.log(e)}
                size="small"
                style={{
                    background: "#fff",
                    border: "solid 1px #95de64",
                    color: '#95de64', 
                    cursor: "pointer",
                    marginLeft: 8
                    }}/>
        </Tooltip>
        {props.drillUp&&<Tooltip title="Click to drill up on data.">
            <Avatar 
                icon="arrow-up"
                onClick={props.drillUp}
                size="small"
                style={{
                    background: "#fff",
                    border: "solid 1px #95de64",
                    color: '#95de64', 
                    cursor: "pointer",
                    marginLeft: 8
                    }}/>
        </Tooltip>}
        {props.drillDown&&<Tooltip title={`Click to drill down on data to level ${props.dataLevel||1}.`}>
            <Avatar 
                icon="arrow-down"
                onClick={props.drillDown}
                size="small"
                style={{
                    background: "#fff",
                    border: "solid 1px #95de64",
                    color: '#95de64', 
                    cursor: "pointer",
                    marginLeft: 8
                    }}/>
        </Tooltip>}

    </div>
  