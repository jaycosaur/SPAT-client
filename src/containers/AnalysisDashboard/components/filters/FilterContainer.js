import React from 'react'
import { Card } from 'antd'
import FilterSelect from './FilterSelect'

export default (props) =>
    <Card 
        bodyStyle={{padding: 0, display: "flex", flexDirection: "row", flexWrap: "wrap"}}
        >
        {[
            <FilterSelect type={"category"}/>,
            <FilterSelect type={"time"}/>,
            <FilterSelect type={"account"}/>,
            <FilterSelect type={"vendor"}/>,
            <FilterSelect />,
            <FilterSelect />,
        ].map((item, i )=>
            <Card.Grid key={i} style={{ width: '50%'}}>
                <FilterItem render={item} />
            </Card.Grid>
        )}
    </Card>

const FilterItem = (props) =>
    props.render