import React, { Component } from "react";
import { Link } from 'react-router-dom'

import { Row, Col, Table, Card, Button, Icon, Divider } from 'antd';
import PeopleImage from './Image'

const AboutSection = (props) => (
  <Row style={{margin: "30px 0"}}>
    {props.children}
  </Row>
)

const DesktopView = (props) => (
      <div className="Features" style={{minHeight: "100vh", background: "white"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
         <TopSection />
         <ContentSection />
        </div>
      </div>
    )

const TopSection = (props) => (
  <Row style={{width: "100%", background: "#0093d0", height: 400, padding: 30}}>
    <Col span={10} style={{height: "100%"}}>
      <div style={{height: "100%", margin: "auto"}}>
        <PeopleImage />
      </div>
    </Col>
    <Col span={14} style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1 style={{fontSize: "3em", color: "white", textAlign: "center"}}>Frequently Asked Questions and Resources</h1>
      <h2 style={{fontSize: "1.5em", color: "white", textAlign: "center", fontWeight: 300}}>A list of the most frequently asked questions about SPAT and links to our product documents and related whitepapers.</h2>
    </Col>
  </Row>
)

const qaArray = [
  {
    question: "Proactively envisioned multimedia based expertise and cross-media growth strategies?",
    answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
  },{
    question: "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing?",
    answer: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
  },{
    question: "Holistically pontificate installed base portals after maintainable products?",
    answer: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
  },{
    question: "Phosfluorescently engage worldwide methodologies with web-enabled technology?",
    answer: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration."
  },{
    question: "Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking?",
    answer: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI."
  },{
    question: "Completely pursue scalable customer service through sustainable potentialities?",
    answer: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions."
  },{
    question: "Bring to the table win-win survival strategies to ensure proactive domination?",
    answer: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service."
  },{
    question: "User generated content in real-time will have multiple touchpoints for offshoring?",
    answer: "Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables."
  },
]
const ContentSection = (props) => (
  <Row style={{width: "90%", marginTop: 50}} gutter={32}>
    <Col span={16}>
      <div>
        {qaArray.map((item, i) => (
          [<QAContainer itemKey={i} {...item}/>,
          <Divider />]
        ))}
      </div>
    </Col>
    <Col span={8}>
      <Card bordered={false} style={{background: "rgba(0, 0, 0, 0.05)"}}>
        <h2 style={{fontWeight: 300}}>Other Helpful Resources</h2>
        <p><a>Super helpful resource one <Icon type="select" /></a></p>
        <p><a>Super helpful resource two <Icon type="select" /></a></p>
        <p><a>Super helpful resource three <Icon type="select" /></a></p>
        <p><a>Super helpful resource four <Icon type="select" /></a></p>
        <p><a>Super helpful resource five <Icon type="select" /></a></p>
        <p><a>Super helpful resource six <Icon type="select" /></a></p>
        <p><a>Super helpful resource seven <Icon type="select" /></a></p>
        <p><a>Super helpful resource eight <Icon type="select" /></a></p>
        <p><a>Super helpful resource nine <Icon type="select" /></a></p>
      </Card>
      <Card bordered={false} style={{height: 400, marginTop: 32, background: "rgba(0, 0, 0, 0.05)"}}>
        <h2 style={{fontWeight: 300}}>Subscribe to our news?</h2>
      </Card>
    </Col>
  </Row>
)

const ContentSectionMobile = (props) => (
  <Row style={{width: "100%", marginTop: 50}} gutter={32}>
      <div>
        {qaArray.map((item, i) => (
          [<QAContainer itemKey={i} {...item}/>,
          <Divider />]
        ))}
      </div>
  </Row>
)

const TopSectionMobile = (props) => (
  <Row style={{width: "100%", background: "#0093d0", height: 400, padding: 30}}>
    <Col span={24} style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1 style={{fontSize: "2em", color: "white", textAlign: "center"}}>Frequently Asked Questions and Resources</h1>
      <h2 style={{fontSize: "1.5em", color: "white", textAlign: "center", fontWeight: 300}}>A list of the most frequently asked questions about SPAT and links to our product documents and related whitepapers.</h2>
    </Col>
  </Row>
)

const QAContainer = (props) => (
  <div key={props.itemKey} style={{marginBottom: 16}}>
    <TypeContainer question text={props.question} />
    <TypeContainer text={props.answer} />
  </div>
)

const TypeContainer = (props) => (
  <Row style={{marginBottom: 16}}>
    <Col span={2}>
      <h1 style={{textAlign: "center", margin: 0, padding: 0, color: props.question&&"#0067ac"}}>{props.question?"Q":"A"}.</h1>
    </Col>
    <Col span={22} style={{height: "100%", display: "flex", alignItems: "center"}}>
      <div style={{lineHeight: "30px", marginTop: 4}}>
        {props.question?<h3 style={{fontWeight: 700, color: "#0067ac"}}>{props.text}</h3>:<p>{props.text}</p>}
      </div>
    </Col>
  </Row>
)

const MobileView = (props) => (
  <div className="Features" style={{minHeight: "100vh", background: "white"}}>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
     <TopSectionMobile />
     <ContentSectionMobile />
    </div>
  </div>
)

const View = (props) => {
  switch(props.window.device){
      case "desktop":
          return <DesktopView {...props}/>
      default:
          return <MobileView {...props}/>
  }
}
  

export default View