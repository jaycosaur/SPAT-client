import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable"

import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./containers/Home";
import Features from "./containers/Features"
import Pricing from "./containers/Pricing"
import NotFound from "./containers/NotFound";
import Login from "./containers/Login/";
import Signup from "./containers/Signup/";
import ResetPassword from "./containers/ResetPassword/";


const MyLoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
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
    <UnauthenticatedRoute key='features' path="/features" exact component={Features} props={childProps} />
    <UnauthenticatedRoute key='pricing' path="/pricing" exact component={Pricing} props={childProps} />

    <AuthenticatedRoute key={'analysisdashboard'} path="/analysisdashboard" exact component={AsyncAnalysisDashboard} props={childProps} />
    <AuthenticatedRoute key={'upload'} path="/datasets/upload" exact component={AsyncNewUpload} props={childProps} />
    <AuthenticatedRoute key={'dataset'} path="/datasets/:id" exact component={AsyncDatasets} props={childProps} />
    <AuthenticatedRoute key={'contact'} path="/contact" exact component={AsyncContact} props={childProps} />
    <AuthenticatedRoute key={'profile'} path="/myprofile" exact component={AsyncProfile} props={childProps} />

    { /* Finally, catch all unmatched routes */ }
    <Route key="notfound" component={NotFound} />
  </Switch>;