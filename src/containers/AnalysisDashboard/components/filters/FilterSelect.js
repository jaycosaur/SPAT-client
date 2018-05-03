import { Select, Row, Avatar, Tooltip, DatePicker } from 'antd';
import React, { PureComponent } from 'react'

import SelectFilter from './filterTypes/SelectFilter'
import TreeSelectFilter from './filterTypes/TreeSelectFilter'
import CategoryFilter from './container/CategoryFilter'
import VendorFilter from './container/VendorFilter'
import TimeFilter from './container/TimeFilter'

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i}>Vendor {i.toString(36) + i}</Option>);
}

const title = (item) => {
  switch(item){
    case "category":
      return "On What?"
    case "time":
      return "When?"
    case "account":
      return "By Who?"
    case "vendor":
      return "With Who?"
    default:
      return item?item[0].toUpperCase+item.slice[0]:"Blank!?!?!"
  }
}

//const subTitle = (subTitle)

export default class FilterSelect extends PureComponent {
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  handleClear = () => {
    console.log('Cleared filter!')
  }

  render() {
    let FilterComponent = null
    switch(this.props.type){
      case "time":
        FilterComponent = TimeFilter
        break
      case "category":
        FilterComponent = CategoryFilter
        break
      case "vendor":
        FilterComponent = VendorFilter
        break
      default: 
        FilterComponent = SelectFilter
    }
    return (
        <Row>
          <h4 style={{color: '#54b948'}}>{title(this.props.type)}</h4>
          <div style={{textAlign: "left"}}>
            <Tooltip title="Clear Filter">
              <span style={{float: "right"}}><Avatar icon="delete" size="small" style={{cursor: "pointer", background: "none", color: "rgb(204, 204, 204)"}} onClick={this.handleClear}/></span>
            </Tooltip>
          </div>
          <FilterComponent />
        </Row>
    )
  }
}