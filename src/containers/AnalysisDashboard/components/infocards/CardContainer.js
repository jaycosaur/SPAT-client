import React from 'react'
import { Card } from 'antd'
import SingleItem from './SingleItem'

export default (props) =>
    props.data?
    <Card 
        hoverable 
        loading={props.isFetching} 
        bodyStyle={{padding: 0}} 
        >
        {props.data.map((item,i) => <CardGrid key={i} width={props.itemWidth} render={<SingleItem value={item.value} title={item.title} accounting={item.accounting} />}/>)}
    </Card>
    :
    <Card 
        hoverable 
        loading={props.isFetching} 
        bodyStyle={{padding: 0}} 
        >
    </Card>

const CardGrid = (props) => 
    <Card.Grid className={props.className} style={{textAlign: "center", width: props.width?props.width:"100%", ...props.style}}>
        {props.render}
    </Card.Grid>