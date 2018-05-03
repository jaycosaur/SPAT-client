import React from 'react'
import { Avatar, Tooltip } from 'antd'

const leftStyle = {
    left: 0, 
    top: 0, 
}
const rightStyle = {
    right: 0,
    top: 0
}

export default (props) =>
  <Tooltip title="Click to refresh chart">
        <Avatar 
            icon={props.isFetching?'loading':props.isError?'cross':'check'} 
            onClick={props.onClick}
            size="small"
            style={{
                zIndex: 50, 
                background: props.isError?"red":"#95de64",
                color: '#fff', 
                position: "absolute", 
                display: "block",
                margin: 16,
                cursor: "pointer",
                ...props.right?rightStyle:leftStyle
                }}/>
    </Tooltip>