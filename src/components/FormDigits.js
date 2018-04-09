import React, { Component } from 'react'

import { Form, Icon, Input, Button, Card } from 'antd';

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfDigits: 6,
            confirmCode: "",
            focusedInput: 0
        }
    }

    handleChange = (event) => {
        this.setState({
            confirmCode: event.target.value
        })
    }
    

    render() {
        const arr = [...Array(this.state.numberOfDigits).keys()]
        return (
        <Card>
            <Input value={this.state.confirmCode.toUpperCase()} onChange={this.handleChange} style={{width: 400, height: 150, fontSize: "80px"}}/>
        </Card>
        )
    }
}