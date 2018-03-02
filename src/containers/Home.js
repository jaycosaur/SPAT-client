import React from "react";

import HomeLander from './HomeLander'
import HomeDashboard from './HomeDashboard'

export default (props) => 
      <div className="Home">
        {props.isAuthenticated ? <HomeDashboard {...props}/> : <HomeLander {...props}/>}
      </div>