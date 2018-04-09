import { Select, Row, Icon, Tooltip } from 'antd';
import React, { PureComponent } from 'react'
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}


export default class FilterSelect extends PureComponent {
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    return (
        <Row>
          <div style={{textAlign: "left"}}>
            <Tooltip title="Clear Filter">
              <span style={{float: "right"}}><Icon type="delete" /></span>
            </Tooltip>
          </div>
          <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              onChange={this.handleChange}
          >
              {children}
          </Select>
        </Row>
    )
  }
}
