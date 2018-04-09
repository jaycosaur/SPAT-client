import React, { Component } from 'react'
import { Progress } from 'antd'

export default class SlowLoader extends Component {
    constructor(props){
        super(props)
        this.state = {
            elapsed: 0
        }
    }

    componentDidMount() {
        this.setState({start: new Date()})
        this.timer = setInterval(this.tick, 50);

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({elapsed: new Date() - this.state.start});
    }
  render() {
    const elapsed = Math.round(this.state.elapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    const seconds = (elapsed / 10).toFixed(1);
    let tag = ""
    let percent = 0
    if (seconds < 1) {
        percent = 20
        tag = "Finding your profile."
    } else if (seconds < 2) {
        percent = 40
        tag = "Loading your settings."
    } else if (seconds < 3) {
        percent = 70
        tag = "Catching the Alpacas."
    } else if (seconds < 5) {
        percent = 90
        tag = "Forcing an unexpected reboot."
    } else {
        percent = 100
        tag = "Ready to Rock 'n' Roll!"
        setTimeout(e => this.props.history.push('/'),2000)
    }

    return (
      <div style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <Progress type="circle" percent={Math.ceil(seconds*4)/4*20} />
            <h2 style={{marginTop: 20, color: "#54b948"}}>{tag}</h2>
      </div>
    )
  }
}

