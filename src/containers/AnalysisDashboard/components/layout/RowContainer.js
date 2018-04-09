import React from 'react'
import { Row } from 'antd'

export default (props) => {
  return (
    <Row key={props.key} style={{ paddingBottom: 16 }} gutter={16}>
        {props.children}
    </Row>
  )
}
