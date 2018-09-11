import React from 'react'
import { Card, Timeline } from 'antd'

export default (props) => {
  return (
    <Card loading={props.isLoading} title="SPAT Product Roadmap">
      {
        props.data?<Timeline>
          {
            props.data.map((item, i) => (
              <Timeline.Item key={i} color="green"><strong>{item.title}</strong> - {item.content}</Timeline.Item>
            ))
          }
          </Timeline>
        :null
      }
      <p>Stay tuned to see more upcoming features.</p>
    </Card>
  )
}  