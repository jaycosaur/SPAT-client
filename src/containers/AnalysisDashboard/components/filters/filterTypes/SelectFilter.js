import React, { Component } from 'react'
import { Select } from 'antd'
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i}>Vendor {i.toString(36) + i}</Option>);
}
export default class SelectFilter extends Component {
  render() {
    const children = this.props.children || this.props.data&&this.props.data.map(i => <Option key={i.key} value={i.value}>{i.label}</Option>)
    return (
        <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={this.props.handleSelect}
            value={this.props.value}
        >
            {children}
        </Select>
    )
  }
}
