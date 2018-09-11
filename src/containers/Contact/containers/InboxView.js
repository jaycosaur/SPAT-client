import { connect } from 'react-redux'
import React from 'react'
import { Avatar } from 'antd'

import InboxMessageContainer from './InboxMessageContainer'
import MessageWriteContainer from './MessageWriteContainer'

import * as contactActions from './../../../store/actions/contactActions'

const messageSelector = (state) => state.conversationMessages&&state.conversationMessages.messages

const InboxView = (props) => {
  return (
    <div>
        <div style={{background: "white", height: 64, padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center",borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 50, width: "100%"}}>
            <Avatar icon="message" size="large" />
            <h3 style={{margin: 0}}>Why has my spend gone up?</h3>
            <p style={{margin: 0}}>Originally posted: Tues 7th Jan 2019</p>
        </div>
        <div style={{padding: "16px 32px", height: props.window.window.height-64-160, width: "100%", overflow:"scroll"}}>
            {props.contact.showConversation&&<InboxMessageContainer messages={messageSelector(props.contact)}/>}
            {props.contact.showNewConversation&&<div>New Message!</div>}
        </div>
        <MessageWriteContainer />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    return {
        contact: state.contact,
        window: state.window
    }
}

export default connect(mapStateToProps, contactActions)(InboxView)