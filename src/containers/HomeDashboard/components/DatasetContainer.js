import React from 'react'
import { Card, Button } from 'antd'
import { Link } from 'react-router-dom'

import DatasetList from './DatasetList'

export default (props) =>
    <Card title="Your Datasets"
        extra={<Link to="/datasets/upload"><Button
            icon="plus"
            type="primary"
            size="small"
            ghost
        > 
            Classify a new data set
        </Button></Link>}
        >
        <DatasetList {...props}/>
    </Card>