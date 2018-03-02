import React from 'react'
import { Tabs } from 'antd';

import EnterpriseDashboard from './containers/EnterpriseDashboard'
import OpportunitiesDashboard from './containers/OpportunitiesDashboard'
import VendorDashboard from './containers/VendorDashboard'

export default (props) =>
      <div>
        <Tabs size='small' type="line" defaultActiveKey="1" >
          <Tabs.TabPane tab="Enterprise Dashboard" key="1" style={{"padding":"15px 30px"}}>
            <EnterpriseDashboard data={props.data} actions={props.actions}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Vendor Dashboard" key="2">
            <VendorDashboard />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Opportunity Dashboard" key="3" disabled>
            <OpportunitiesDashboard />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Custom Dashboard 1" key="4" disabled>Content of Tab Pane 3</Tabs.TabPane>
          <Tabs.TabPane tab="Custom Dashboard 2" key="5" disabled>Content of Tab Pane 3</Tabs.TabPane>
        </Tabs>
      </div>
