import React from 'react'
import PropTypes from 'prop-types';
import { Row } from 'antd'

export default class MessageItem extends React.Component {
    static propTypes = {
        requiredAny: PropTypes.any.isRequired,
    }
    render() {
        return (
            <Row style={{textAlign: this.props.primary?"right":"left", width: "100%"}}>
                <Row>
                    <p style={{margin: 0}}>{this.props.userId}</p>
                </Row>
                <Row>
                    <div style={{
                        margin: "4px -8px", 
                        borderRadius: this.props.primary?"24px 8px 24px 24px":"8px 24px 24px 24px", 
                        padding: "16px", 
                        color: "white", 
                        maxWidth: "60%",
                        fontWeight: 200,
                        background: this.props.primary?"#54b948":"#0093d0",
                        textAlign: "left",
                        float: this.props.primary?"right":"left"
                        }}
                        >
                        <p style={{margin: 0}}>{this.props.message}</p>
                    </div>
                </Row>
                <Row>
                    <p style={{margin: 0}}><small>{this.props.timestamp}</small></p>
                </Row>
            </Row>
        )
    }
}