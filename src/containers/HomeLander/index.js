import React from "react";
import PropTypes from 'prop-types'

import { Button, Row, Col, Icon } from 'antd';

import MacWindow from './../../components/MacWindow'
import FullWidthDiv from './components/FullWidthDiv'
import ContentBiCard from './components/ContentBiCard'
import MainSplash from './containers/MainSplash'
import FeatureGrid from './containers/FeatureGrid'
import QuoteContainer from './containers/QuoteContainer'

const data = [
    {
        'link': 'https://preview.ibb.co/n5jxKw/Screen_Shot_2018_01_06_at_10_5_45_pm.png',
        'title':'Sustainable potentialities',
        'body': 'Holistically pontificate installed base portals after maintainable products.'
    },
    {
        'link': 'https://preview.ibb.co/ko9Wew/Screen_Shot_2018_01_06_at_10_57_28_pm.png',
        'title':'Top-line web services',
        'body': 'Holisticly predominate extensible testing procedures for reliable supply chains.'
    },
    {
        'link': 'https://preview.ibb.co/cm4a6b/Screen_Shot_2018_01_06_at_10_57_10_pm.png',
        'title':'Clicks-and-mortar solutions',
        'body': 'Completely synergize resource taxing relationships via premier niche markets.'
    },
    {
        'link':'https://preview.ibb.co/ko9Wew/Screen_Shot_2018_01_06_at_10_57_28_pm.png',
        'title':'Revolutionary ROI',
        'body': 'Efficiently unleash cross-media information without cross-media value.'
    }
  ];

export default (props) => {
    return (
      <div>
        <MainSplash />
        
        <FullWidthDiv backgroundColor="#a0cf67" padding="0px" margin="0px">
            <FullWidthDiv backgroundColor='none' type='flex' justify='center' padding='16px 0'>
                <h1 style={{textAlign:'center', maxWidth: '70%', color: 'white'}}><strong>Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</strong></h1>
            </FullWidthDiv>
            <ContentBiCard imageLink={data[0].link} title={data[0].title} body={data[0].body}/>
            <ContentBiCard reverseOrder imageLink={data[1].link} title={data[1].title} body={data[1].body}/>
            <ContentBiCard imageLink={data[2].link} title={data[2].title} body={data[2].body}/>
            <ContentBiCard reverseOrder imageLink={data[3].link} title={data[3].title} body={data[3].body}/>
        </FullWidthDiv>
        <FeatureGrid />
        <FullWidthDiv backgroundColor='#1a9ed9' extraStyles={{color: '#fff'}} margin="0px">
            <h3 style={{color:'#fff'}}><strong>OVERRIDE THE DIGITAL DIVIDE</strong></h3>
            <h1 style={{color:'#fff'}}><strong>Capitalize on low hanging fruit</strong></h1>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
            </Row>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </Row>
            <Row type='flex' justify='center'>
                <a href='google.com' style={{color:'#fff'}}>Learn more <Icon type='arrow-right' /></a>
            </Row>
        </FullWidthDiv>
        <QuoteContainer />
        <FullWidthDiv margin="0">
            <ContentBiCard imageLink='https://preview.ibb.co/n5jxKw/Screen_Shot_2018_01_06_at_10_5_45_pm.png' title='Work together on a whole new level.' body='Professionally cultivate one-to-one customer service with robust ideas.'/>
        </FullWidthDiv>
        <FullWidthDiv backgroundColor='none'>
            <h1 style={{paddingBottom: '0px'}}><strong>Elevate your analytics and strategy</strong></h1>
            <h4><strong>Take the GL and effort out of spend analytics</strong></h4>
            <Button size='large' type='primary' style={{marginTop:'30px'}}>Try it now</Button>  
        </FullWidthDiv>
      </div>
    );
}