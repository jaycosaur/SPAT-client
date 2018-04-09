import React from "react";
import { Icon } from 'antd'

export default () =>
  <div className="NotFound" style={{paddingTop: 150, textAlign: "center", margin: "0 auto", width: 500, minHeight: "100vh",display: "flex", justifyContent: "center"}}>
    <div>
      <Icon type='frown-o' style={{fontSize: 160, marginBottom: 32}}/>
      <h3>Artifical intelligence is great, but we seem to be having trouble loading that page ...</h3>
      <p>Please give the page a refresh and if you continue to see this error please let one of our super helpful engineers know.</p>
    </div>
  </div>