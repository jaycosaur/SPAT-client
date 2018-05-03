import React from 'react'
import { Tabs, Icon, Affix, Card, Avatar } from 'antd';

import ProfileInformationView from './views/ProfileInformationView'
import SubscriptionInformationView from './views/SubscriptionInformationView'
import BillingInformationView from './views/BillingInformationView'

export default (props) =>
    <React.Fragment>
        <Affix offsetTop={0} style={{marginTop: -64}} onChange={affixed => console.log(affixed)}>
            <Card bordered={false} style={{background: "#54b948", borderRadius: 0}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <span style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <Avatar style={{ color: '#54b948', backgroundColor: 'white', marginRight: "1em" }} shape="circle" size="large" icon="user" />
                        <span style={{fontSize: "1.5em", color: "#fff"}}>Jacob Richter</span>
                    </span>
                    <span style={{color: "#fff"}}>Member since October 30, 2016</span>
                </div>
            </Card>
        </Affix>
        <Tabs type="line" defaultActiveKey="1" style={{}}>
          <Tabs.TabPane tab={<span><Icon type="idcard" /> Profile Information</span>} key="1" style={{"padding":"15px 30px"}}>
            <ProfileInformationView {...props} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span><Icon type="wallet" /> Subscription Information</span>} key="2" style={{"padding":"15px 30px"}}>
            <SubscriptionInformationView {...props} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span><Icon type="bank" /> Billing Information</span>} key="3" style={{"padding":"15px 30px"}}>
            <BillingInformationView {...props} />
          </Tabs.TabPane>
        </Tabs>
    </React.Fragment>