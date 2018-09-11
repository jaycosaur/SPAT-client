import React from "react";
import { Col, Row } from 'antd';

import SideBarView from './containers/SideBarView'
import InboxView from './containers/InboxView'

export default (props) => (
  <div className="contact" style={{maxHeight: "100vh",position: "absolute", top: 0}}>
    <Row>
        <Col md={8} style={{height: "100vh", background: "#fff", padding: 0, borderRight: "1px solid #eee", borderLeft: "1px solid #eee"}}>
          <SideBarView />
        </Col>
        <Col md={16} xs={24} style={{height: "100vh",padding: 0, background: "#fff"}}>
          <InboxView/>
        </Col>
    </Row>
  </div>
)

//<Col md={15} xs={24}>
//            <ContactForm {...props}/>
//</Col>