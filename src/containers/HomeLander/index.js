import React from "react";

import { Button, Row, Card, Col } from 'antd';
import { Link } from 'react-router-dom'

import FullWidthDiv from './components/FullWidthDiv'
import ContentBiCard from './components/ContentBiCard'
import MainSplash from './containers/MainSplash'
import FeatureGrid from './containers/FeatureGrid'

import ScrollBasedBezier from './components/BezierCurve'
import ScrollBasedBezierUp from './components/BezierCurveUp'

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

const DesktopHomeLander = (props) => {
    return (
      <div style={{background: "#fff"}}>
        <MainSplash window={props.window}/>
        <FullWidthDiv backgroundColor="#a0cf67" padding="0px" margin="0px">
            <FullWidthDiv backgroundColor='none' type='flex' justify='center' padding='30px 0'>
                <h1 style={{textAlign:'center', maxWidth: '70%', color: 'white', fontSize: '4em', fontWeight: 800}}>Top-line web services</h1>
                <h1 style={{textAlign:'center', maxWidth: '70%', color: 'white', fontSize: '2.2em', fontWeight: 300}}>Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</h1>
            </FullWidthDiv>
            <ContentBiCard imageLink={data[0].link} title={data[0].title} body={data[0].body}/>
            <ContentBiCard reverseOrder imageLink={data[1].link} title={data[1].title} body={data[1].body}/>
            <ContentBiCard imageLink={data[2].link} title={data[2].title} body={data[2].body}/>
            <ContentBiCard reverseOrder imageLink={data[3].link} title={data[3].title} body={data[3].body}/>
            <div style={{height: 128}}/>
        </FullWidthDiv>
        <FeatureGrid />
        <ClientSlider />
        <ProductTotalBar />
        <FullWidthDiv margin="0" backgroundColor="white">
            <ContentBiCard textColor="#0093d0" imageLink='https://preview.ibb.co/n5jxKw/Screen_Shot_2018_01_06_at_10_5_45_pm.png' title='Work together on a whole new level.' body={<div><p>Professionally cultivate one-to-one customer service with robust ideas.</p><Link to="/pricing"><Button size='large' type='primary' ghost style={{marginTop:'30px'}}>Try it now</Button></Link></div>}/>
        </FullWidthDiv>
      </div>
    );
}

const MobileHomeLander = (props) => {
    return (
      <div style={{background: "#fff"}}>
        <MainSplash window={props.window}/>
        <FeatureGrid />
        <ProductTotalBar />
        <FullWidthDiv margin="0" backgroundColor="white">
            <ContentBiCard textColor="#0093d0" imageLink='https://preview.ibb.co/n5jxKw/Screen_Shot_2018_01_06_at_10_5_45_pm.png' title='Work together on a whole new level.' body={<div><p>Professionally cultivate one-to-one customer service with robust ideas.</p><Link to="/pricing"><Button size='large' type='primary' ghost style={{marginTop:'30px'}}>Try it now</Button></Link></div>}/>
        </FullWidthDiv>
      </div>
    );
}

const ClientItem = (props) => (
    <Card bordered={false} style={{width: "80%"}} bodyStyle={{padding: 0}}>
        <Row>
            <Col span={12}>
                <img src="https://placeimg.com/350/250/tech" width="100%"/>
            </Col>
            <Col span={12}>
                <div style={{padding: 32, textAlign: "left"}}>
                    <h1 style={{color: "rgba(0,0,0,0.65)"}}><strong>University of Canberra</strong></h1>
                    <h1 style={{color: "#54b948"}}><strong>"</strong>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.<strong>"</strong></h1>
                    <h3 >DANIELE FARNEDI, CTO</h3>
                    <h3><a>Read more</a></h3>
                </div>
            </Col>
        </Row>
    </Card>
)

const ClientSlider = (props) => (
    <FullWidthDiv margin="0" extraStyles={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
        <ClientItem />
    </FullWidthDiv>
    )

const ProductTotalBar = (props) => (
    <FullWidthDiv margin="0" backgroundColor="#0093d0" extraStyles={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
        <div>
            <h2 style={{fontSize: "3em", color: "#fff"}}><strong>Used by over 100 organisations across Australia.</strong></h2>
            <h1 style={{fontSize: "2em", color: "#fff"}}>To classify over $10,000,000,000 of spend across 120,000 suppliers.</h1>
        </div>
    </FullWidthDiv>
    )


const View = (props) => {
    switch(props.window.device){
        case "desktop":
            return <DesktopHomeLander {...props}/>
        default:
            return <MobileHomeLander {...props}/>
    }
}
    

export default View