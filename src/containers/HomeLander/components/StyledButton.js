import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

class StyledButton extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            isHovered: false
        }
    }
    onClick = (e) => {
        this.props.history.push(this.props.onClickPath)
    }
  render() {

    const style={
        borderRadius: "100px",
        padding: "10px 20px",
        color: "white",
        fontSize: "200%",
        fontWeight: "500",
        background: "#a0cf67",
        border: "2px solid #a0cf67"
    }
    const hoverStyle = {
        ...style,
        background: "transparent",
        color: "#a0cf67"
    }

    return (
        <button 
            style={this.state.isHovered?hoverStyle:style} 
            onMouseEnter={e => this.setState({isHovered: true})} 
            onMouseLeave={e => this.setState({isHovered: false})}
            onClick={this.onClick}>
            <span>
                {this.props.text}
            </span>
        </button>
    )
  }
}

export default withRouter(StyledButton)