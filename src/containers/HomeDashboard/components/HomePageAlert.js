import React from 'react'
import { Alert } from 'antd'

export default (props) => {
    return (
        props.data?props.data.map(item => (
            <Alert
                key={item.key}
                message={item.title}
                description={item.content}
                type={item.type}
                showIcon
                closable={item.closable}
                style={{ marginBottom: 16 }}
            />)):null
        )
}  