import React from 'react'
import { Row } from 'antd';

export default (props) =>
    <Row 
        span={props.cardWidth} 
        style={{...props.extraStyles, margin: props.margin?props.margin:'30px 0', padding: props.padding?props.padding:'80px 0', background: props.backgroundColor?props.backgroundColor:'#d9d9d9', textAlign:'center'}} {...props}>
        {props.children}
    </Row>