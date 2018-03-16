import React from 'react'
import FullWidthDiv from './../components/FullWidthDiv'
import { Row, Icon } from 'antd';

export default () => {
  return (
    <FullWidthDiv backgroundColor='white' extraStyles={{color: '#54b948'}} margin="0" padding= "60px 0px">
        <div style={{display:"flex", justifyContent: "center"}}>
            <div style={{width: "70%"}}>
                <h3 style={{color:'#54b948', textAlign: "left", lineHeight: 1.5}}>
                    <strong>
                        "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas."
                    </strong>
                </h3>
                <div>
                    <p style={{textAlign: "left"}}>- Jacob Richter, A Top Bloke, Some amazingly super company</p>
                </div>
            </div>
        </div>
    </FullWidthDiv>
  )
}


