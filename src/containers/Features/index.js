import React, { Component } from "react";
import { Link } from 'react-router-dom'

import { Row, Col, Table, Card, Button, Icon, Collapse } from 'antd';
import ScrollBasedBezier from './BezierCurve'
import ScrollBasedBezierUp from './BezierCurveUp'


const TrueIcon = <Icon type="check-circle-o" style={{textAlign: "center", color: "rgb(82, 196, 26)"}}/>
const FalseIcon = <Icon type="close-circle-o" style={{textAlign: "center", color: "rgb(255, 77, 79)"}}/>

const featureComparisonTableData = [
  {
    feature: "Classification of data through AI",
    standard: TrueIcon,
    premium: TrueIcon,
    tailored: TrueIcon,
  },{
    feature: "Unlimited access to analytics tools",
    standard: TrueIcon,
    premium: TrueIcon,
    tailored: TrueIcon,
  },{
    feature: "Unlimited uploads and downloads",
    standard: TrueIcon,
    premium: TrueIcon,
    tailored: TrueIcon,
  },{
    feature: "Inter-period trend analysis",
    standard: FalseIcon,
    premium: TrueIcon,
    tailored: TrueIcon,
  },{
    feature: "Advanced AI Analytics and Insights",
    standard: FalseIcon,
    premium: TrueIcon,
    tailored: TrueIcon,
  },{
    feature: "Early Access Features",
    standard: FalseIcon,
    premium: TrueIcon,
    tailored: TrueIcon,
  },{
    feature: "Data ingestion / client system integrations",
    standard: FalseIcon,
    premium: FalseIcon,
    tailored: TrueIcon,
  },{
    feature: "Custom built reports and dashboards",
    standard: FalseIcon,
    premium: FalseIcon,
    tailored: TrueIcon,
  },{
    feature: "Access to Developer / Integration APIs",
    standard: FalseIcon,
    premium: FalseIcon,
    tailored: TrueIcon,
  },
]

const FeatureSection = (props) => (
  <Row style={{padding: "30px 0", background: props.background, width: "100%", display: "flex", justifyContent: "center"}}>
    {props.children}
  </Row>
)

const DesktopView = (props) => (
      <div className="Features" style={{minHeight: "100vh", margin: "30px 0px"}}>
        <FeatureSection>
          <div style={{width: 1000}}>
            <div style={{textAlign: "center"}}><h1 style={{fontSize: "3.5em", color: "#0067ac", fontWeight: 800}}>Super Fast AI Powered Spend Analysis</h1></div>
            <div style={{display: "flex", justifyContent: "space-between", margin: 30}}>
              <FeatureCardGrid />
            </div>
          </div>
        </FeatureSection>
        <div style={{height: 200, width: "100%"}}>
          <div style={{position: "absolute",zIndex: 100, height: "100%", width: "100%"}}>
            <ScrollBasedBezier headerHeight={0} color="#a0cf67"/>
          </div>
          <div style={{position: "absolute",zIndex: 100, height: "100%", width: "100%"}}>
            <ScrollBasedBezierUp headerHeight={0} color="#54b948"/>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <FeatureSection background={"#54b948"}>
            <div style={{width: 700, paddingBottom: 120}}>
              <div style={{textAlign: "center"}}><h1 style={{fontSize: "4em", fontWeight: 700, color: "white"}}>What is under the hood?</h1></div>
              <div style={{textAlign: "center"}}><h2 style={{fontWeight: 300, color: "white", fontSize: "2em"}}>A full range of features and an affordable price point.</h2></div>
              <div style={{margin: "50px 0"}}>
                <Card style={{padding: 0}} bordered={false} bodyStyle={{padding: 0}}>
                  <FeatureComparisonTable />
                </Card>
              </div>
            </div> 
          </FeatureSection>
          <FeatureSection>
            <div style={{width: 1000, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "64px 0"}}>
              <div style={{textAlign: "center", fontSize: "2em"}}><h1 style={{fontWeight: 800}}>All these features and more!</h1></div>
              <div style={{textAlign: "center",margin: 32, marginBottom: 64}}><h2 style={{fontSize: "2em", fontWeight: 300}}>Technology that is smarter, faster, more comprehensive and much much simpler. Implemented in seconds not months.</h2></div>
              <Link to="/pricing" style={{width: "50%"}}><Button style={{width: "100%", height: "100%"}} type="primary" size="large"><h1 style={{ lineHeight: "80px", marginBottom: 0, color: "white"}}>Try for free.</h1></Button></Link>
            </div>
          </FeatureSection>
        </div>
      </div>
    )

const FeatureCardGrid = (props) => {
  const featureItems = [
    {
      title: "High ROI",
      image: "cloud",
      content: ["Microsoft Office integration","SIEM and eDiscovery", "Over 300,000 apps"]
    },{
      title: "Mobile Friendly.",
      image: "mobile",
      content: ["Microsoft Office integration","SIEM and eDiscovery", "Over 300,000 apps"]
    },{
      title: "Super Fast.",
      image: "rocket",
      content: ["Microsoft Office integration","SIEM and eDiscovery", "Over 300,000 apps"]
    },
  ]
  return (
    <React.Fragment>
      {featureItems.map((featureData, i)=> (
        <Card key={i} style={{width: props.width||"32%"}}>
          <h1 style={{textAlign: "center"}}>{featureData.title}</h1>
          <div style={{textAlign: "center", margin: 32}}><Icon style={{fontSize: "5em", color: "#a0cf67"}} type={featureData.image}/></div>
          <ul style={{padding: "0 20px", fontSize: "1.2em"}}>
            {featureData.content.map((feature, j) => <li key={j}>{feature}</li>)}
          </ul>
        </Card>
      ))}
    </React.Fragment>
  )
}


const FeatureComparisonTable = (props) => {
  
  const columns = [{
    title: 'Features',
    dataIndex: 'feature',
    key: 'feature',
    align: "left"
  }, {
    title: 'Standard',
    dataIndex: 'standard',
    key: 'standard',
    align: "center"
  }, {
    title: 'Premium',
    dataIndex: 'premium',
    key: 'premium',
    align: "center"
  },  {
    title: 'Tailored',
    dataIndex: 'tailored',
    key: 'tailored',
    align: "center"
  }];
  
  return (
    <Table 
      pagination={false}
      dataSource={featureComparisonTableData} 
      columns={columns} 
      />
  )
}

const FeatureComparisonTableMobilePremium = (props) => {
  const columns = [{
    title: 'Features',
    dataIndex: 'feature',
    key: 'feature',
    align: "left",
    width: "70%"
  }, {
    title: 'Premium',
    dataIndex: 'premium',
    key: 'premium',
    align: "center",
    width: "30%"
  }];
  
  return (
    <Table 
      pagination={false}
      dataSource={featureComparisonTableData} 
      columns={columns} 
      />
  )
}

const FeatureComparisonTableMobileTailored = (props) => {
  const columns = [{
    title: 'Features',
    dataIndex: 'feature',
    key: 'feature',
    align: "left",
    width: "70%"
  }, {
    title: 'Tailored',
    dataIndex: 'tailored',
    key: 'tailored',
    align: "center",
    width: "30%"
  }];
  
  return (
    <Table 
      pagination={false}
      dataSource={featureComparisonTableData} 
      columns={columns} 
      />
  )
}

const FeatureComparisonTableMobileStandard = (props) => {
  const columns = [{
    title: 'Features',
    dataIndex: 'feature',
    key: 'feature',
    align: "left",
    width: "70%"
  }, {
    title: 'Standard',
    dataIndex: 'standard',
    key: 'standard',
    align: "center",
    width: "30%"
  }];
  
  return (
    <Table 
      pagination={false}
      dataSource={featureComparisonTableData} 
      columns={columns} 
      />
  )
}

const MobileView = (props) => (
  <div className="Features" style={{minHeight: "100vh", margin: "12px 0px"}}>
    <FeatureSection>
        <div>
          <div style={{textAlign: "center", padding: "0 1em", paddingBottom: "1em"}}><h1 style={{fontSize: "2.5em", color: "#0067ac", fontWeight: 800}}>Super Fast AI Powered Spend Analysis</h1></div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", margin: 8, marginTop: 24}}>
            <FeatureCardGrid width="100%"/>
          </div>
        </div>
    </FeatureSection>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <FeatureSection background={"#54b948"}>
        <div style={{width: "100%"}}>
          <div style={{textAlign: "center"}}><h1 style={{fontSize: "3em", fontWeight: 700, color: "white"}}>What is under the hood?</h1></div>
          <div style={{textAlign: "center"}}><h2 style={{fontWeight: 300, color: "white", fontSize: "1.5em"}}>A full range of features and an affordable price point.</h2></div>
          <div style={{marginTop: "50px"}}>
            <Card style={{padding: 0}} bordered={false} bodyStyle={{padding: 0}}>
              <Collapse accordion>
                <Collapse.Panel header="Standard Features" key="1" style={{padding: 0}}>
                  <FeatureComparisonTableMobileStandard />
                </Collapse.Panel>
                <Collapse.Panel header="Premium Features" key="2">
                  <FeatureComparisonTableMobilePremium />
                </Collapse.Panel>
                <Collapse.Panel header="Tailored Features" key="3">
                  <FeatureComparisonTableMobileTailored />
                </Collapse.Panel>
              </Collapse>
            </Card>
          </div>
        </div> 
      </FeatureSection>
      <FeatureSection>
        <div style={{width: "90%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "8px 0"}}>
          <div style={{textAlign: "center",margin: 32, marginBottom: 64}}><h2 style={{fontSize: "1.5em", fontWeight: 300}}>Technology that is smarter, faster, more comprehensive and much much simpler. Implemented in seconds not months.</h2></div>
          <Link to="/pricing" style={{width: "50%"}}><Button style={{width: "100%", height: "100%"}} type="primary" size="large"><h2 style={{ lineHeight: "40px", marginBottom: 0, color: "white"}}>Try for free.</h2></Button></Link>
        </div>
      </FeatureSection>
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