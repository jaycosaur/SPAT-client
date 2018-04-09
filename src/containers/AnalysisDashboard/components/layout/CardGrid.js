import React from 'react'
import { Card } from 'antd'

export default (props) => 
    <Card.Grid className={props.className} style={{textAlign: "center", width: props.width?props.width:"100%", ...props.style}}>
        {props.render}
    </Card.Grid>