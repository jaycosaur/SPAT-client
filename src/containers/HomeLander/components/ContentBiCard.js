import React from 'react'
import PropTypes from 'prop-types'
import FullWidthDiv from './FullWidthDiv'
import { Col } from 'antd';
import MacWindow from './../../../components/MacWindow'


const ContentBiCard = (props) =>
    <FullWidthDiv margin='0px 40px' type='flex' justify="space-around" align="middle" backgroundColor='transparent'>
            <Col span={6} order={props.reverseOrder?2:1} style={{textAlign:'left'}}>
                <h2 style={{paddingBottom: '0px', color: "white"}}><strong>{props.title}</strong></h2>
                <p style={{color: "white"}}>{props.body}</p>
            </Col>
            <Col span={14} order={props.reverseOrder?1:2} style={{textAlign:'left'}}>
                <MacWindow>
                    <img src={props.imageLink} alt='BiCard'/>
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