import React from 'react'
import MessageItem from './../components/MessageItem'
import Moment from 'react-moment'

const dataWrangler = (data) => ({
    ...data,
    primary: data.isAdmin,
    timestamp: <Moment unix>{data.timestamp}</Moment>,
})

export default (props) => {
  return (
    <div>
      {props.messages.map(message => <MessageItem {...dataWrangler(message)}/>)}
    </div>
  )
}
