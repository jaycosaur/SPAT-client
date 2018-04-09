import React from 'react'
import { Tabs, Icon, Affix, Avatar, Card } from 'antd';
import { Link } from 'react-router-dom'

import InformationPage from './views/InformationPage'
import EnterpriseDashboard from './views/EnterpriseDashboard'
import CategoryExploreDashboard from './views/CategoryExploreDashboard'
import VendorDashboard from './views/VendorDashboard'

import ReactHighcharts from 'react-highcharts'
require('highcharts-exporting')(ReactHighcharts.Highcharts) // raise this up to index
require('highcharts-offline-exporting')(ReactHighcharts.Highcharts) // raise this up to index

export default (props) =>
      <React.Fragment>
          <div style={{position: "fixed", top: 0, width: "100%", zIndex: 75, background: "rgb(159,193,69)", borderRadius: "0 0 32px 0", height: 64, display: "flex", alignItems: "center", paddingLeft: 16}}>
            {!props.isFullScreen&&<Avatar style={{background: "white", color: "rgb(159,193,69)", marginRight: 16}} icon="rollback"/>}
            <Avatar style={{background: "white", color: "rgb(159,193,69)", marginRight: 16}} onClick={props.toggleFullScreen} icon={props.isFullScreen?"shrink":"arrows-alt"}/>
            <span>
              <h4 style={{color: "white"}}>{"June / July 2017 Main Spend - Department of Departments".toUpperCase()}</h4>
              <p style={{color: "white", marginBottom: 0}}>Contains spend data for three out of the four departmental entities.</p>
            </span>
          </div>
        <Tabs size='small' type="line" defaultActiveKey="1" >
          <Tabs.TabPane tab={<Icon type="info-circle"/>} key="about" style={{"padding":"15px 30px"}}>
            <InformationPage data={props.data} actions={props.actions}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Enterprise Dashboard" key="1" style={{"padding":"15px 30px"}}>
            <EnterpriseDashboard data={props.data} actions={props.actions}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Vendor Dashboard" key="2" style={{"padding":"15px 30px"}}>
            <VendorDashboard />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Category Explore Dashboard" key="3" style={{"padding":"15px 30px"}}>
            <CategoryExploreDashboard />
          </Tabs.TabPane>
          <Tabs.TabPane 
            tab={<span>Custom Dashboards <Icon type="plus-circle-o" /></span>} 
            key="4" disabled>Content of Tab Pane 3</Tabs.TabPane>
        </Tabs>
      </React.Fragment>
