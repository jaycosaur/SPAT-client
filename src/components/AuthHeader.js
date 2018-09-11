import React, { Component } from 'react'
import { Button, Layout } from 'antd'
import { Link } from 'react-router-dom'

export default class HeaderBar extends Component {
    constructor(props){
      super(props)
      this.state = {
        isFocused: false,
        isHovered: false
      }
    }

    toggleHover = () => {
      this.setState((state) => {return {isHovered: !state.isHovered}})
    }

    render() {

        const headerStyle = { 
            background: '#fff', 
            paddingLeft: '16px', 
            color: '#000', 
            borderRadius: '0 0 32px 0',
            border: "1px solid #a0cf67",
            borderWidth: "0 1px 1px 0"
        }

      return (
        <Layout.Header 
            style={headerStyle}
            >
            <span style={{float: "right"}}>
                <TrialButton/>
                {/*<Tooltip placement="bottom" title={"Contact Now"}>
                    <Button onClick={e => console.log('click')} shape="circle" icon="phone" size="large" style={{color: "#a0cf67", background: "white", border: "1px solid #a0cf67", marginRight: "0.5em"}}/>
                </Tooltip>
                <Tooltip placement="bottom" title={"Have a question?"}>
                    <Button onClick={e => console.log('click')} shape="circle" icon="question" size="large" style={{color: "#a0cf67", background: "white", border: "1px solid #a0cf67", marginRight: "0.5em"}}/>
                </Tooltip>
                <Tooltip placement="bottom" title={"Alerts"}>
                    <Button onClick={e => console.log('click')} shape="circle" icon="warning" size="large" style={{color: "#a0cf67", background: "white", border: "1px solid #a0cf67"}}/>
      </Tooltip>*/}
            </span>
            <div>
                <span style={{fontSize: "1.2em"}}>SPAT by Grosvenor</span> | <span>AI-powered spend analysis.</span>
            </div>
        </Layout.Header>
      )
    }
  }

class TrialButton extends Component {
    constructor(props){
      super(props)
      this.state = {
        isHovered: false
      }
    }
    toggleHover = () => {
      this.setState((state) => {return {isHovered: !state.isHovered}})
    }

    render() {
      return (
        <Link to="/myprofile/subscription">
            <Button
                type="danger" 
                ghost 
                style={{marginRight: "0.5em"}}
                onMouseOver={this.toggleHover}
                onMouseLeave={this.toggleHover}
            >
                {!this.state.isHovered?'TRIAL EXPIRED':"SIGNUP NOW"}
            </Button>   
        </Link>   
      )
    }
  }

