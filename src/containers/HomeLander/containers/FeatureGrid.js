import React from 'react'
import { Icon } from 'antd';

export default () => {
  return (
    <div style={{background: "white"}}>
        <div style={{textAlign: "center", padding: 40, fontWeight: "500"}}><h1>Check out these great features!</h1></div>
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
    <div style={{margin: 16, width: "40%", minWidth: 300, padding: 20, textAlign: "center"}}>
        <Icon style={{fontSize: 120, marginBottom: 40}} type={props.icon} />
        <h4 style={{fontWeight: 600}}>{props.title}</h4>
        <h5>{props.subtitle}</h5>
        <p style={{padding: 20}}>{props.body}</p>
    </div>