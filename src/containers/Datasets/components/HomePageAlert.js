import React from 'react'
import { Alert } from 'antd'

export default (props) => {
return (
    <Alert
        message="Warning"
        description="This application is under very active development. Changes will frequently occur on a day to day basis."
        type="warning"
        showIcon
        closable
        style={{ marginBottom: 16 }}
    />)
}  