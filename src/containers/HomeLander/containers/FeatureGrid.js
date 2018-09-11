import React from 'react'
import { Icon, Card } from 'antd';

export default () => {
  return (
    <div style={{background: "white", padding: "36px 0px"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: 60, paddingBottom: 60}}>
            <h1 style={{textAlign: "center", fontWeight: "800", fontSize: '3em'}}>Say goodbye to the Frankenstein spreadsheets.</h1>
            <h2 style={{textAlign: "center", fontWeight: "400", width: "70%", fontSize: '1.75em'}}>Technology that is smarter, faster, more comprehensive and much much simpler. Implemented in seconds not months.</h2>
        </div>
        <div style={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <FeatureItem 
                icon = "dot-chart" 
                title="Feature 1" 
                subtitle="Some excellent feature 1 subtitle" 
                body="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. "/>
            <FeatureItem 
                icon = "dashboard" 
                title="Feature 2" 
                subtitle="Some excellent feature 2 subtitle" 
                body="Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing."/>
            <FeatureItem 
                icon = "clock-circle-o" 
                title="Feature 3" 
                subtitle="Some excellent feature 3 subtitle" 
                body="Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains."/>
            <FeatureItem 
                icon = "layout" 
                title="Feature 4" 
                subtitle="Some excellent feature 4 subtitle" 
                body="Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions."/>
            <FeatureItem 
                icon = "rocket" 
                title="Feature 5" 
                subtitle="Some excellent feature 5 subtitle" 
                body="Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. "/>
        </div>
    </div>
  )
}

const FeatureItem = (props) =>
    <Card style={{margin: 16, width: "30%", minWidth: 300, padding: 20, textAlign: "center", background: "#a0cf67"}} bodyStyle={{padding: 8, color: "#fff"}}>
        <Icon style={{fontSize: 120, marginBottom: 40}} type={props.icon} />
        <h2 style={{color: "#fff"}}>{props.subtitle}</h2>
        <p style={{padding: 20}}>{props.body}</p>
    </Card>