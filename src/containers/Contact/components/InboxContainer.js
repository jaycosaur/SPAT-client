
import React, { Component } from "react";
import Moment from 'react-moment';

import { Card, List, Input, Button, Divider, Avatar, Popover } from 'antd';

const sampleMessageJson = [{
    messageId: "asdfsdaf786234gof078",
    userId: "Edmund Peterson",
    message: "I'm having difficulty with this thing ...",
    timestamp: 1519174747,
    isRead: true,
    },{
    messageId: "asdfsdaf7asdfsdaf8",
    userId: "Derek - SPAT Support",
    message: "Here why don't you try to add them first.",
    timestamp: 1519178347    ,
    isRead: true,
    isAdmin: true
  },{
    messageId: "asdsdfgdfgdsfgf0asdf78",
    userId: "Jacob Goose",
    message: "Great that worked! Thanks so much.",
    timestamp: 1519179123,
    isRead: true,
  }]

const sampleMessagesJson = [{
    id: "asdfsdaf786234gof078",
    message: "I'm having difficulty with this thing ...",
    timestamp: 1519174747,
    },{
    id: "asdfsdaf7asdfsdaf8",
    message: "Here why don't you try to add them first.",
    timestamp: 1519178347,
  },{
    id: "asdsdfgdfgdsfgf0asdf78",
    message: "Great that worked! Thanks so much.",
    timestamp: 1519178547,
    isResolved: true
  }]


export default class InboxContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      selectedItem: false,
    }
  }

  handleMessageSelect = (messageId) =>{
    this.setState({
      selectedItem : messageId
    })
  }

  handleBackToInbox = () => {
    this.setState({
      selectedItem: null
    })
  }

  render() {
    const title = 
      <span>
        <Button disabled={!this.state.selectedItem} size="small" shape="circle" icon="rollback" style={{background: this.state.selectedItem&&"#1a9ed9", color: this.state.selectedItem&&"#fff"}} onClick={e => this.handleBackToInbox()}/>
        <span style={{marginLeft: 16}}>Inbox {this.state.selectedItem&&("> Message ID: "+this.state.selectedItem)}</span>
      </span>
    return (
      <Card title={title} extra = {this.state.selectedItem&&(this.state.selectedItem.isResolved?"Ticket Resolved":"Ticket Open")} bodyStyle={{padding: 0}}>
        {!this.state.selectedItem
          ?<MessageList handleMessageSelect = {this.handleMessageSelect} data={sampleMessagesJson} key="messagelist"/>
          :<MessageBox data={sampleMessageJson} key="message"/>}
      </Card>
    )
  }
}

class MessageList extends Component {
  render() {
    return (
      <List
        style={{padding: "0px 16px"}}
        dataSource={this.props.data}
        renderItem={item => (
          <List.Item key={item.id} onClick={e => this.props.handleMessageSelect(item.id)}>
            <List.Item.Meta
              avatar={<Avatar icon="message" style={{background: "#a0cf67"}}/>}
              title={<a onClick={e => this.props.handleMessageSelect(item.id)}><Moment format="ddd DD MMM 'YY hh:mm:ss a">{item.timestamp}</Moment></a>}
              description={item.message}
            />
            {item.isResolved?"Ticket Resolved":"Ticket Open"}
          </List.Item>
        )}
      />
    )
  }
}

class MessageBox extends Component {
  render() {
    return (
      <Card bordered={false} style={{padding: 0}} bodyStyle={{padding: 0}}>
        <Card bordered={false} style={{margin: 0}} bodyStyle={{paddingTop: 0, paddingBottom: 0}}>
          {this.props.data.map(item => <MessageBubble key={item.messageId} data={item}/>)}
        </Card>
        <Divider />
        <Card bordered={false} style={{margin: 0}} bodyStyle={{padding: 8}}>
          <Input.TextArea 
            rows={4} 
            placeholder="Write your message."
          /> 
          <Button style= {{marginTop: 8, float: "right", background: "#a0cf67", color: "white"}}>Send Message</Button>
        </Card>
      </Card>
    )
  }
}

class MessageBubble extends Component {
  render() {
    const shiftRight = this.props.data.isAdmin
    return (
      <div style={{float: shiftRight?"right":"left"}}>
        <div style={{textAlign: shiftRight?"right":"left"}}>
          {this.props.data.userId}
        </div>
        <Popover placement="topLeft" content={<span>Message sent on <Moment format="ddd DD MMM YYYY hh:mm:ss a">{this.props.data.timestamp}</Moment></span>}>
          <div style={{margin: "4px -4px", borderRadius: "24px", padding: "8px 16px", color: "white", background: shiftRight?"#54b948":"#0093d0"}}>
              {this.props.data.message}
          </div>
        </Popover>
        <div style={{textAlign: shiftRight?"right":"left"}}>
          <Moment fromNow>{this.props.data.timestamp}</Moment>
        </div>
      </div>
    )
  }
}
