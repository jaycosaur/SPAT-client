import React from 'react'
import { Tabs, Icon, Affix, Card, Avatar } from 'antd';

import Profile from './containers/Profile'

export default (props) =>
    <React.Fragment>
        <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
            <Card bordered={false} style={{background: "#54b948"}}>
                <Avatar style={{ color: '#54b948', backgroundColor: 'white' }} shape="circle" size="large" icon="user" />
                Jacob Richter
                Member since October 30, 2016
            </Card>
        </Affix>
        <Tabs size='large' type="line" defaultActiveKey="1" style={{}}>
          <Tabs.TabPane tab="Profile Information" key="1" style={{"padding":"15px 30px"}}>
            <Profile {...props} />
            <Profile {...props} />
            <Profile {...props} />
            <Profile {...props} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Subscription Information" key="2" style={{"padding":"15px 30px"}}>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Billing Information" key="3" style={{"padding":"15px 30px"}}>
          </Tabs.TabPane>
        </Tabs>
    </React.Fragment>
