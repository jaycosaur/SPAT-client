import React from 'react'
import { Icon } from 'antd'

const leftStyle = {
    left: 0, 
    top: 0, 
}
const rightStyle = {
    right: 0,
    top: 0
}

export default (props) =>
    <Icon 
        type={props.isFetching?'loading':'check-circle'} 
        style={{
            zIndex: 50, 
            color: '#95de64', 
            position: "absolute", 
            display: "block",
            margin: 16,
            ...props.right?rightStyle:leftStyle
            }}/>