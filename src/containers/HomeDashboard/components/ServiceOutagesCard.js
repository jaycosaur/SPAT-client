import React from 'react'
import { Card } from 'antd'

export default (props) => {
  return (
    <Card loading={props.isLoading} title="Service Outages">
        {
        props.data?props.data.map((item, i) => (
          <div key={i}>
            <p>{item.content}</p>
          </div>
        )):"No planned outages."
      }
    </Card>
  )
}  