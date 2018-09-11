import React from 'react'
import {Button, Card, Input} from 'antd'

export default () => {
  return (
    <div style={{padding: 8, borderTop: "1px solid #eee", background: "white", height: 160}}>
        <Input.TextArea 
            rows={4} 
            placeholder="Write your message."
            autoFocus
            style={{border: "none", outline: "none", borderRadius: "0px"}}
            /> 
        <Button size="large" type="dashed" style={{float: "right", marginTop: 8}}>Send Message</Button>
    </div>
  )
}
