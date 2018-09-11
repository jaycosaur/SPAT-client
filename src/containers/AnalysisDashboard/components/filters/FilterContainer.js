import React from 'react'
import { Card } from 'antd'
import FilterSelect from './FilterSelect'

export default (props) =>
    <Card 
        style={{width: "100%"}}
        bodyStyle={{padding: 0}}
        bordered={false}
        >
        {[
            <FilterSelect type={"category"}/>,
            <FilterSelect type={"time"}/>,
            <FilterSelect type={"account"}/>,
            <FilterSelect type={"vendor"}/>
        ].map((item, i )=>
            <Card.Grid key={i} style={{ width: '25%'}}>
                <FilterItem render={item} />
            </Card.Grid>
        )}
    </Card>

const FilterItem = (props) =>
    props.render