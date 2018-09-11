import React from 'react'
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'antd'
import * as contactActions from './../../../store/actions/contactActions'

const SideBarHeader = (props) => {
  return (
    <div style={{ background: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1em 1em", height: 64, borderBottom: "1px solid #eee",position: "sticky", top: 0}}>
        <span style={{fontSize: "1.2em", lineHeight: "2em"}}><Icon type="message" /> Contact Center</span>
        <Button onClick={props.createConversation} type="primary" shape="circle" icon="plus"/>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    return {
        contact: state.contact
    }
}

export default connect(mapStateToProps, contactActions)(SideBarHeader)