import React from 'react'
import { Card } from 'antd'

export default (props) => 
    <Card bordered={false} className={props.className} style={{textAlign: "center", width: props.width?props.width:"100%", ...props.style}}>
        {props.render}
    </Card>