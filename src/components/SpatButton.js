import React, { Component } from 'react'
import { Button } from 'antd'

const colors = {
  primary: "#0093d0",
  accent: "#a0cf67",
  primaryDark: "#0067ac",
  accentDark: "#54b948",
  white: "#fff"
}

export default class SpatButton extends Component {
    constructor(props){
      super(props)
      this.state= {
        isHovered : false
      }
    }
  
    render(){
      const sm = {}
      const md = []
      const lg = []

      const width = ""
      const height = ""
      const expandRatio = ""
      const borderColor = ""
      const background = ""
      const fontSize = ""
      const fontWeight = ""
      const lineHeight = ""

      
    
      const baseStyle = 
        {
          width: 180, 
          height: 40, 
          background: "none", 
          borderColor: "#ff8099", 
          color: "#ff8099", 
          fontSize: "120%", 
          fontWeight: "300", 
          lineHeight: "40px",
          margin: "auto"
        }
  
      const secondaryStyle = 
        { 
          ...baseStyle,
          background: "#ff8099", 
          borderColor: "#ff8099", 
          color: "#fff", 
        }
  
      const baseHover = {
        ...baseStyle,
        borderColor: "#fff", 
        color: "#fff", 
      }
  
      const secondaryHover = {
        ...secondaryStyle,
        background: "#fff", 
        borderColor: "#fff", 
        color: "#ff8099", 
      }
  
      const buttonStyle = !this.props.secondary?baseStyle:secondaryStyle
      const hoverStyle = !this.props.secondary?baseHover:secondaryHover
  
      return (
          <Button 
            onMouseOver = {e => this.setState({ isHovered: true})} 
            onMouseLeave = {e => this.setState({ isHovered: false})} 
            onClick = {this.props.onClick}
            style={!this.state.isHovered?buttonStyle:hoverStyle} 
            htmlType = {this.props.htmlType}
            >
            {this.props.text}
          </Button>
      )
    }
  }