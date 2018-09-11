import React from 'react'
import TableView from './containers/TableDataFetch'
import EditableTableView from './components/EditableTableView'

export default (props) => {
  return (
    <div style={{padding: 40}}>
        <div>Explorer: {props.match.params.id}</div>
        <div style={{background: "white"}}><TableView /></div>
    </div>
  )
}
