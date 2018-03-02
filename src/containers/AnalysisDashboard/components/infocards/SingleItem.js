import React from 'react'
import { Row, Card } from 'antd'

export default (props) => {
    var formatter = new Intl.NumberFormat('en-US', {});
      
    return (
        <Card bordered={false} loading={props.loading} style={{padding: 0}} bodyStyle={{padding: 0}}>
            <Row type="flex" justify="center" align="top">
                <span>
                    {props.accounting&&<span style={{fontSize:"20px", fontWeight:'500', position: 'relative', top: '-13px'}}>$</span>}
                    <span style={{fontSize:"38px"}}>{formatter.format(props.value)}</span>
                    {props.accountingh&&<span style={{fontSize:"20px", fontWeight:'500', position: 'relative', top: '-13px'}}>.34</span>}
                </span>
            </Row>
            <Row>
                <span style={{textAlign:'center', color: 'rgba(0, 0, 0, 0.45)'}}>
                    {props.title}
                </span>
            </Row>
        </Card>
    )
}
