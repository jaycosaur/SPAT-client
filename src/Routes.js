import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewUpload from "./containers/NewUpload";
import Datasets from "./containers/Datasets";
import Dashboard from "./containers/Dashboard";
import Contact from "./containers/Contact";
import MyProfile from "./containers/MyProfile";
import ResetPassword from "./containers/ResetPassword";
import AnalysisDashboard from "./containers/AnalysisDashboard";
import Features from "./containers/Features"
import Pricing from "./containers/Pricing"



import NotFound from "./containers/NotFound";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute key={'home'} path="/" exact component={Home} props={childProps} />

    <UnauthenticatedRoute key={'login'} path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute key={'resetpassword'} path="/login/resetpassword" exact component={ResetPassword} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <UnauthenticatedRoute path="/features" exact component={Features} props={childProps} />
    <UnauthenticatedRoute path="/pricing" exact component={Pricing} props={childProps} />


    <AuthenticatedRoute key={'analysisdashboard'} path="/analysisdashboard" exact component={AnalysisDashboard} props={childProps} />
    <AuthenticatedRoute key={'upload'} path="/datasets/upload" exact component={NewUpload} props={childProps} />
    <AuthenticatedRoute key={'dataset'} path="/datasets/:id" exact component={Datasets} props={childProps} />
    <AuthenticatedRoute key={1} path="/datasets/:id/dashboard" exact component={Dashboard} props={childProps} />
    <AuthenticatedRoute key={'contact'} path="/contact" exact component={Contact} props={childProps} />
    <AuthenticatedRoute key={'profile'} path="/myprofile" exact component={MyProfile} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;