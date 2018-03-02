import React from 'react';

import { Layout, Icon, Divider } from 'antd';
const { Footer } = Layout;

export default (props) => 
    <Footer style={{ textAlign: 'center', background: 'rgb(159,193,69)', color:'#fff'}}>
        <span style={{float: 'left'}}>
        <a style={{color: '#fff'}}><strong>Privacy Policy</strong></a>
        <Divider type="vertical"/>
        <a style={{color: '#fff'}}><strong>Terms of Use</strong></a>
        </span>
        <span style={{float: 'center'}}>
        SPAT and its encapsulated tools are developed by <strong>grosvenor.digital</strong> | Copyright © {new Date().getFullYear()}
        </span>
        <span style={{float:'right'}}>
        <Icon type="facebook" style={{ fontSize: '24px', padding:'0 16px'}}/>
        <Icon type="twitter" style={{ fontSize: '24px', padding:'0 16px'}}/>
        <Icon type="linkedin" style={{ fontSize: '24px', padding:'0 16px'}}/>
        </span>
    </Footer>