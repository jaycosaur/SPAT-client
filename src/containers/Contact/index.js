import React from "react";
import { Col, Row } from 'antd';

import "./Contact.css";
import ContactForm from './components/ContactForm'
import InboxContainer from './components/InboxContainer'

export default (props) => (
  <div className="contact">
    <Row gutter={16}>
        <Col md={12} xs={24}>
            <InboxContainer  {...props}/>
        </Col>
        <Col md={12} xs={24}>
          <ContactForm {...props}/>
        </Col>
    </Row>
  </div>
)