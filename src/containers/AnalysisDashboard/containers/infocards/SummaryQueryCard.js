import React from 'react'
import FetchData from './../../components/dataloaders/FetchData'
import CardContainer from './../../components/infocards/CardContainer'

export default () => {
  return (
    <FetchData path="/data/ds-12345/query/summaryquery">
      {({isFetching, isError, data}) => 
        {
          let dataWrang = null
          if (data){
            dataWrang = data.header.map((item,i) => {return {title: item.toUpperCase(), value: data.data[0][item], accounting: i===0?true:false}})
          }
          return <CardContainer loading={isFetching} itemWidth="25%" data={dataWrang}/>
        }              
      }
    </FetchData>
  )
}

