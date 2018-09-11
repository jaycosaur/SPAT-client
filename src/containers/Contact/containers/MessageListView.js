import React from 'react'
import { Row, List, Avatar, Badge } from 'antd';
import { connect } from 'react-redux'
import * as contactActions from './../../../store/actions/contactActions'

const mockMessageData = [
    {
        id: 'id1',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Tues 7th Jan 2019",
        unread: true,
    },{
        id: 'id2',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Wed 27th March 2019",
        unread: false,
    },{
        id: 'id3',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Wed 27th March 2019",
        unread: true,
    },{
        id: 'id4',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Wed 27th March 2019",
        unread: false,
    },{
        id: 'id1',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Tues 7th Jan 2019",
        unread: true,
    },{
        id: 'id2',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Wed 27th March 2019",
        unread: false,
    },{
        id: 'id3',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Wed 27th March 2019",
        unread: true,
    },{
        id: 'id4',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Wed 27th March 2019",
        unread: false,
    },{
        id: 'id1',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Tues 7th Jan 2019",
        unread: true,
    },{
        id: 'id2',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Wed 27th March 2019",
        unread: false,
    },{
        id: 'id3',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Wed 27th March 2019",
        unread: true,
    },{
        id: 'id4',
        messageType: "Question",
        title: "Why has my spend gone up?",
        description: "We have noticed an increase in our property spend. Can you please advise mitigation strategies?",
        timeSubmit: "Wed 27th March 2019",
        unread: false,
    }
]

const MessageListView = (props) => {
  return (
    <div style={{padding: 8, overflow: "scroll", height: props.window.window.height - 64}}>
        <List
            dataSource={mockMessageData}
            renderItem={item => (
            <List.Item key={item.id}>
                <List.Item.Meta
                avatar={<Badge dot={item.unread}><Avatar size="large" icon="message"/></Badge>}
                title={<a onClick={e => props.selectConversation(item.id)}>{item.title}</a>}
                description={<small>Last Message: {item.timeSubmit}</small>}
                />
                <p style={{margin: 0}}>{item.unread?"OPEN":"CLOSED"}</p>
            </List.Item>
            )}
        />
    </div>
  )
}

export default connect((store) => {
    return {
        contact: store.contact,
        window: store.window
    }
    },contactActions)(MessageListView)

