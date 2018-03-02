import React from 'react'
import { Table } from 'antd';


export default class DataTable extends React.Component {
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
    
    return <Table columns={columns} dataSource={this.state.data} size="middle" pagination={{ pageSize: 50 }} scroll={{ y: 240 }}/>;
  }
}