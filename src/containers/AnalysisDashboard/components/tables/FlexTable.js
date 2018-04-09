import React from 'react'
import { Table } from 'antd';


export default class FlexTable extends React.PureComponent {
  state = {
    data: this.props.data
  };
  
  render() {
    const columns = [{
      title: 'Organisation',
      dataIndex: 'organisation',
      key: 'name',
    }, {
      title: '# Invoices',
      dataIndex: 'numberInvoices',
      key: 'age',
    }, {
      title: 'Total Value',
      dataIndex: 'totalInvoices',
      key: 'address'
    }]

    const header = this.props.data.header.map(item => {return {title: item, dataIndex: item, key: item}})
    
    return <Table columns={header} dataSource={this.state.data.data} size="middle" pagination={{ pageSize: 50 }} scroll={{ y: 240 }}/>;
  }
}