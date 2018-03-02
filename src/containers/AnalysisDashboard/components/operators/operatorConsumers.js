import React, { Component } from 'react'
import { DataContext } from './../../dataloader'

export default (props) =>  {
    switch(this.props.operation){
      case "TOTAL_SPEND":
        return ""
      case "COUNT_SUPPLIERS":
        return ""
      case "COUNT_TRANSACTIONS":
        return ""
      case "COUNT_PURCHASEORDERS":
        return ""
      default:
        return "Error! You must select a data operation!!!"
    }
  }

const totalSpend = (data) => ""

const countSuppliers = (data) => ""

const countTransactions = (data) => ""

const countPurchaseOrders = (data) => ""

