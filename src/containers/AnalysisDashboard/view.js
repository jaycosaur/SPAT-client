import React from 'react'
import { Tabs, Icon, Menu } from 'antd';
import { connect } from 'react-redux'
import { handleDashboardChange } from './../../store/actions/dashboardActions'
import { Route, Switch, Link } from "react-router-dom";
import Loadable from "react-loadable"

import DashboardHeader from './DashboardHeader'

import ServerError from "./../../containers/ServerError"


const MyLoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return null;
  }
  // Handle the error state
  else if (error) {
    return <ServerError />;
  }
  else {
    return null;
  }
};

const AsyncInformation = Loadable({
  loader: () => import("./views/InformationPage"),
  loading: MyLoadingComponent
})

const AsyncEnterprise = Loadable({
  loader: () => import("./views/EnterpriseDashboard"),
  loading: MyLoadingComponent
})

const AsyncCategory = Loadable({
  loader: () => import("./views/CategoryExploreDashboard"),
  loading: MyLoadingComponent
})

const AsyncVendor = Loadable({
  loader: () => import("./views/VendorDashboard"),
  loading: MyLoadingComponent
})


const View = (props) =>
      <React.Fragment>
        <DashboardHeader />
        <Menu
          selectedKeys={props.dashboard.dashboard}
          mode="horizontal"
          onClick={e => props.dispatch(handleDashboardChange(e.key))}
          style={{display: "flex", justifyContent: "space-between"}}
        >
          <Menu.Item key="about">
            <Link to={`/analysisdashboard/${props.dashboard.datasetId}/information`}><Icon type="info-circle"/> Information</Link>
          </Menu.Item>
          <Menu.Item key="enterprise">
            <Link to={`/analysisdashboard/${props.dashboard.datasetId}/enterprise`}><Icon type="layout" /> Enterprise</Link>
          </Menu.Item>
          <Menu.Item key="vendor">
            <Link to={`/analysisdashboard/${props.dashboard.datasetId}/vendor`}><Icon type="layout" /> Vendor</Link>
          </Menu.Item>
          <Menu.Item key="category">
            <Link to={`/analysisdashboard/${props.dashboard.datasetId}/category`}><Icon type="layout" /> Category Explore</Link>
          </Menu.Item>
          <Menu.Item key="extra" disabled>
            <Icon type="plus-circle-o" /> Custom Dashboards
          </Menu.Item>
        </Menu>
        <div style={{"padding":"15px 30px"}}>
          <Switch>
            <Route key="enterprise" path="/analysisdashboard/:id/enterprise" exact component={AsyncEnterprise} />
            <Route key="information" path="/analysisdashboard/:id/information" exact component={AsyncInformation} />
            <Route key="vendor" path="/analysisdashboard/:id/vendor" exact component={AsyncVendor} />
            <Route key="category" path="/analysisdashboard/:id/category" exact component={AsyncCategory} />
            <Route key="enterprise" path="/analysisdashboard/:id/"  component={AsyncEnterprise} />
          </Switch>
        </div>

        {/*<Tabs size='small' type="line" activeKey={props.dashboard.dashboard} onChange={e => props.dispatch(handleDashboardChange(e))}>
          <Tabs.TabPane tab={<Icon type="info-circle"/>} key="about" style={{"padding":"15px 30px"}}>
            <InformationPage data={props.data} actions={props.actions}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Enterprise Dashboard" key="enterprise" style={{"padding":"15px 30px"}}>
            <EnterpriseDashboard data={props.data} actions={props.actions}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Vendor Dashboard" key="vendor" style={{"padding":"15px 30px"}}>
            <VendorDashboard />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Category Explore Dashboard" key="category" style={{"padding":"15px 30px"}}>
            <CategoryExploreDashboard />
          </Tabs.TabPane>
          <Tabs.TabPane 
            tab={<span>Custom Dashboards <Icon type="plus-circle-o" /></span>} 
            key="4" disabled
            >
            Content of Tab Pane 3
          </Tabs.TabPane>
</Tabs>*/}
      </React.Fragment>

export default connect((store) => {
  return {
      dashboard: store.dashboard
  }
  })(View)