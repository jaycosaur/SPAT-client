import React from 'react'
import { Card } from 'antd'
import Moment from 'react-moment'

export default (props) => {
  return (
    <Card loading={props.isLoading} title="Latest News">
      {
        props.data?props.data.map((item, i) => (
          <div key={i}>
            <p><strong>Posted on <Moment unix format="DD/MM/YYYY">{(item.posted/1000)}</Moment></strong></p>
            <p>{item.content}</p>
            <p style={{textAlign: "right"}}><strong>{item.author}</strong></p>
          </div>
        )):"No news to show."
      }
    </Card>
  )
}  