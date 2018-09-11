import React from 'react'
import { Card } from 'antd'
import SingleItem from './SingleItem'

export default (props) =>
    <Card 
        loading={props.isFetching} 
        bodyStyle={{padding: 0}} 
        bordered={false}
        >
        {!props.data&&"loading..."}
        {props.data&&props.data.map((item,i) => <CardGrid key={i} width={props.itemWidth} render={<SingleItem value={item.value} title={item.title} accounting={item.accounting} />}/>)}
    </Card>

const CardGrid = (props) => 
    <Card.Grid key={props.key} className={props.className} style={{textAlign: "center", width: props.width?props.width:"100%", ...props.style}}>
        {props.render}
    </Card.Grid>