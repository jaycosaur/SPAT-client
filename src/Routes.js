import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable"

import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./containers/Home";
import Pricing from "./containers/Pricing/"
import NotFound from "./containers/NotFound";
import ServerError from "./containers/ServerError"
import Login from "./containers/Login/"
import Signup from "./containers/Signup/"
import ResetPassword from "./containers/ResetPassword/"
import SlowLoader from './components/SlowLoading'

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

const AsyncProfile = Loadable({
  loader: () => import("./containers/MyProfile"),
  loading: MyLoadingComponent
})

const AsyncNewUpload = Loadable({
  loader: () => import("./containers/NewUpload/"),
  loading: MyLoadingComponent
})

const AsyncAnalysisDashboard = Loadable({
  loader: () => import("./containers/AnalysisDashboard/"),
  loading: MyLoadingComponent
})

const AsyncAnalysisDashboardSelectView = Loadable({
  loader: () => import("./containers/AnalysisDashboardSelectView/"),
  loading: MyLoadingComponent
})

const AsyncDatasets = Loadable({
  loader: () => import("./containers/Datasets/"),
  loading: MyLoadingComponent
})

const AsyncContact = Loadable({
  loader: () => import("./containers/Contact/"),
  loading: MyLoadingComponent
})

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute key={'home'} path="/" exact component={Home} props={childProps} />

    <UnauthenticatedRoute key='login' path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute key='resetpassword' path="/login/resetpassword" exact component={ResetPassword} props={childProps} />
    <UnauthenticatedRoute key='signup' path="/signup" exact component={Signup} props={childProps} />
    <UnauthenticatedRoute key='signup' path="/signup/:plan" exact component={Signup} props={childProps} />
    <UnauthenticatedRoute key='pricing' path="/pricing" exact component={Pricing} props={childProps} />
    <UnauthenticatedRoute key='pricing' path="/pricing/:extra" signupPath exact component={Pricing} props={childProps} />
    <UnauthenticatedRoute key='about' path="/about" signupPath exact component={SlowLoader} props={childProps} />

    <AuthenticatedRoute key={'analysisdashboard'} path="/analysisdashboard" exact component={AsyncAnalysisDashboardSelectView} props={childProps} />
    <AuthenticatedRoute key={'analysisdashboard'} path="/analysisdashboard/:id" component={AsyncAnalysisDashboard} props={childProps} />
    <AuthenticatedRoute key={'upload'} path="/datasets/upload" exact component={AsyncNewUpload} props={childProps} />
    <AuthenticatedRoute key={'dataset'} path="/datasets/:id" exact component={AsyncDatasets} props={childProps} />
    <AuthenticatedRoute key={'contact'} path="/contact" exact component={AsyncContact} props={childProps} />
    <AuthenticatedRoute key={'profile'} path="/myprofile" exact component={AsyncProfile} props={childProps} />

    { /* Finally, catch all unmatched routes */ }
    <Route key="notfound" component={NotFound} />
  </Switch>;