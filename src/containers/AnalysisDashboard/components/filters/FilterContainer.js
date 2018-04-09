import React from 'react'
import { Card } from 'antd'
import FilterSelect from './FilterSelect'

export default (props) =>
    <Card 
        bodyStyle={{padding: 0}}
        >
        {[
            <FilterSelect />,
            <FilterSelect />,
            <FilterSelect />,
            <FilterSelect />,
            <FilterSelect />,
            <FilterSelect />,
        ].map((item, i )=>
            <Card.Grid key={i} style={{ width: '50%'}}>
                <h4 style={{color: '#54b948'}}>On what?</h4>
                <FilterItem render={item} />
            </Card.Grid>
        )}
    </Card>

const FilterItem = (props) =>
    props.render