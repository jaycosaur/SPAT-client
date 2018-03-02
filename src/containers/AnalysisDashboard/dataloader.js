import React, { Component, createContext } from 'react'
import sampleData from './../../sampleDataset.json'

export const DataContext = createContext()

const orgSummaryData = Object.keys(sampleData).map(key => {
    const dataItem = sampleData[key]
    let totalInvoices = dataItem
        .map(x => parseFloat(x["Total Invoice"].replace(/[^\d.]/, '')))
        .reduce((acc,i) => 
            acc = acc + i
        )
    let numberInvoices = dataItem.length

    //"Category Level 1": "Courier Services",
    //"Category Level 2": "Freight Carriers",
    let categoryInfo = dataItem
        .map(x => [x["Category Level 1"],x["Category Level 2"],parseFloat(x["Total Invoice"].replace(/[^\d.]/, '')),key])
        .reduce((acc,i) => {
        let item = acc[i[0]]
        let value = item?item.totalValue:0.0
        let inv = item?item.totalInvoices:0.0
        acc = {
            ...acc,
            [i[0]]: {
                totalValue: value + i[2],
                totalInvoices: inv + 1,
            }
        }
        return acc
        }, {})
        return {
                organisation: key,
                numberInvoices: numberInvoices,
                totalInvoices: totalInvoices,
                categoryInfo: categoryInfo
        }
})

let categoryData = orgSummaryData.map(item => item.categoryInfo)
let reduceCategory = categoryData.reduce((acc, el) => {
    let cat1 = Object.keys(el)[0]
    let it = el[cat1]
    let sum = acc[cat1]?acc[cat1].sum:0.0 + it.totalValue
    let count = acc[cat1]?acc[cat1].count:0.0 + it.totalInvoices
    let obj = {
        ...acc,
        [cat1]: {
            sum: sum,
            count: count,
        }
    }
    return obj
},{})

const summaryData = {
  countOrganisations: Object.keys(orgSummaryData).length,
  sumSpend: orgSummaryData.map(j => j.totalInvoices).reduce((acc,i) => acc + i),
  countInvoices: orgSummaryData.map(j => j.numberInvoices).reduce((acc,i) => acc + i),
}

const data = {
    summary: summaryData,
    organisation: orgSummaryData,
    category: reduceCategory
}

export class DataLoader extends Component {
    state = {
        data: data,
        actions: (e) => console.log(e)
    }
    render() {
        return (
        <DataContext.Provider value={this.state}>
            {this.props.children}
        </DataContext.Provider>
        )
    }
}
