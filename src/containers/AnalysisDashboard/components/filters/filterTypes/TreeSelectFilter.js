import React, { Component } from 'react'
import { TreeSelect } from 'antd';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

/*const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-0',
    key: '0-0-0',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
  children: [{
    label: 'Child Node3',
    value: '0-1-0',
    key: '0-1-0',
    children: [{
        label: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      }, {
        label: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      }, {
        label: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      }],
  }, {
    label: 'Child Node4',
    value: '0-1-1',
    key: '0-1-1',
  }, {
    label: 'Child Node5',
    value: '0-1-2',
    key: '0-1-2',
  }],
}];*/

export default class Demo extends React.Component {
  render() {
    const tProps = {
      treeData: this.props.data,
      value: this.props.value,
      onChange: this.props.handleSelect,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: this.props.isLoading?'Fetching list...':'Select a Category',
      disabled: this.props.isLoading,
      style: {
        width: "100%",
      },
    };
    return <TreeSelect {...tProps} />;
  }
}