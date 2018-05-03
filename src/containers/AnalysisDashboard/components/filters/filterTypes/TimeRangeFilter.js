import React from 'react'
import { DatePicker } from 'antd'

import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const DateRange = (props) => {
  return (<DatePicker.RangePicker onChange={e => console.log(e)} />
  )
}

const MonthRange = (props) => {
    return (<DatePicker.MonthPicker onChange={e => console.log(e)} />
    )
  }


export default class TimeRangeContainer extends React.Component {
    state={
        filterType: "range"
    }

    onFilterTypeSelect = (e) => {
        this.setState({filterType: e.target.value})
    }

    render() {
        return (
            <div>
                <RadioGroup onChange={this.onFilterTypeSelect} value={this.state.filterType}>
                    <RadioButton value="month">Month</RadioButton>
                    <RadioButton value="daterange">Range</RadioButton>
                </RadioGroup>
                {this.state.filterType==="month"?<MonthRange />:<DateRange value={this.props.value}/>}
            </div>
        )
    }
}
