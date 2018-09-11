import React from 'react'
import { Table } from 'antd';


export default class FlexTable extends React.PureComponent {
  state = {
    data: this.props.data
  };
  
  render() {
    const header = this.props.data&&this.props.data.header.map((item,i) => {return {title: item, dataIndex: item, width: 150}})
    return <Table columns={header} dataSource={this.state.data&&this.state.data.data} size="middle" pagination={{ pageSize: 50 }} scroll={{ y: 480 }}/>;
  }
}