import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import FullWidthDiv from './FullWidthDiv'
import { Col } from 'antd';
import MacWindow from './../../../components/MacWindow'

const ContentBiCard = (props) =>
    <FullWidthDiv padding='0px 0px' margin='0px 40px' type='flex' justify="space-around" align="middle" backgroundColor='transparent'>
        <Col span={10} order={props.reverseOrder?2:1} style={{textAlign:'left',padding: '0 30px'}}>
            <h2 style={{paddingBottom: '0px', color: props.textColor||"white", fontSize: '3em'}}><strong>{props.title}</strong></h2>
            <p style={{color: props.textColor||"white", fontSize: '1.5em'}}>{props.body}</p>
        </Col>
        <Col span={14} order={props.reverseOrder?1:2} style={{textAlign:'left', padding: 16}}>
            <MacWindow>
                <img src={props.imageLink} width="100%" alt='BiCard'/>
            </MacWindow>
        </Col>
    </FullWidthDiv>

ContentBiCard.propTypes = {
    imageLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    reverseOrder: PropTypes.bool
}

export default ContentBiCard