import React from "react";
import { Icon } from 'antd'

export default () =>
  <div className="NotFound" style={{paddingTop: 100, textAlign: "center", margin: "0 auto", width: 500}}>
    <Icon type='frown-o' style={{fontSize: 160, marginBottom: 32}}/>
    <h3>Whilst artifical intelligence maybe able to do a lot, it certainly cannot find that page you are looking for ...</h3>
    <p>If you continue to see this error, please let one of our super helpful engineers know by sending an email to <a href="mailto:support@grosvenor.digital">support@grosvenor.digital.com</a> detailing what you did immediately prior to this happening.</p>
  </div>