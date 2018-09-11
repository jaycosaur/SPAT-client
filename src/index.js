import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Amplify from "aws-amplify"
import config from './config'

// Redux related 

import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import store from './store/store'
import { Provider } from "react-redux"

syncHistoryWithStore(browserHistory, store)
//const history = syncHistoryWithStore(browserHistory, store)

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "spat",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();