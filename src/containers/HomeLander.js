import React, { Component } from "react";
import PropTypes from 'prop-types'

import { Button, Row, Col, Icon } from 'antd';

import AutoTypewriter from './../components/AutoTypewriter'

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

const FullWidthDiv = (props) =>
    <Row span={props.cardWidth} style={{...props.extraStyles, margin: props.margin?props.margin:'30px 0', padding: props.padding?props.padding:'40px 0', background: props.backgroundColor?props.backgroundColor:'#d9d9d9', textAlign:'center'}} {...props}>
        {props.children}
    </Row>

FullWidthDiv.propTypes = {
    backgroundColor: PropTypes.string
}

const ContentBiCard = (props) =>
    <FullWidthDiv margin='30px 80px' type='flex' justify="space-around" align="middle" backgroundColor='transparent'>
            <Col span={6} order={props.reverseOrder?2:1} style={{textAlign:'left'}}>
                <h1 style={{paddingBottom: '0px'}}><strong>{props.title}</strong></h1>
                <p>{props.body}</p>
            </Col>
            <Col span={14} order={props.reverseOrder?1:2} style={{textAlign:'left'}}>
                <img src={props.imageLink} style={{borderRadius: '4px'}} alt='BiCard'/>
            </Col>
    </FullWidthDiv>

ContentBiCard.propTypes = {
    imageLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    reverseOrder: PropTypes.bool
}

export default class HomeLander extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
  }

  render() {
    return (
      <div>
        <Row>
          <Row style={{padding: '40px 80px', color: '#fff', borderRadius: '0 0 100px 0', minHeight: '200px', width: '95%', background: 'rgb(22,85,151)'}}>
            <Col span={8}>
              <img src="https://preview.ibb.co/caa4zw/largelogo.png" width="100%" alt="largelogo" border="0"/>
            </Col>
            <Col span={16}  style={{padding: '20px 80px'}}>
              <h1 style={{color: '#fff'}}>
                Taking the <strong>
                    <AutoTypewriter 
                        textArray={['effort','time','GL', 'guessing']}
                        keyDelay={100} 
                        completeDelay={2000} 
                        blink
                        />
                </strong>
              </h1>
              <h1 style={{color: '#fff'}}>
                out of spend analysis.
              </h1>
              <Button ghost style={{marginTop:'20px'}} size='large' href="/signup" onClick={this.handleDatasetClick}>Try it now</Button>
            </Col>
          </Row>
        </Row>
        <FullWidthDiv backgroundColor='none' type='flex' justify='center' padding='16px 0'>
            <h2 style={{textAlign:'center', maxWidth: '70%', color: 'rgb(22,85,151)'}}><strong>Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</strong></h2>
        </FullWidthDiv>
        <FullWidthDiv backgroundColor='none' type='flex' padding='16px 200px'>
            <h2 style={{textAlign:'left', color: 'rgb(22,85,151)'}}>
                <AutoTypewriter 
                    textArray= {data.map(item => {return item.body})} 
                    keyDelay={20} 
                    completeDelay={2000} 
                    />
            </h2>
        </FullWidthDiv>
        <FullWidthDiv>
            <ContentBiCard imageLink={data[0].link} title={data[0].title} body={data[0].body}/>
            <ContentBiCard reverseOrder imageLink={data[1].link} title={data[1].title} body={data[1].body}/>
            <ContentBiCard imageLink={data[2].link} title={data[2].title} body={data[2].body}/>
            <ContentBiCard reverseOrder imageLink={data[3].link} title={data[3].title} body={data[3].body}/>
        </FullWidthDiv>

        <FullWidthDiv backgroundColor='#1a9ed9' extraStyles={{color: '#fff'}}>
            <h3 style={{color:'#fff'}}><strong>OVERRIDE THE DIGITAL DIVIDE</strong></h3>
            <h1 style={{color:'#fff'}}><strong>Capitalize on low hanging fruit</strong></h1>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
            </Row>
            <Row type='flex' justify='center'>
                <p style={{maxWidth: '50%'}}>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </Row>
            <Row type='flex' justify='center'>
                <a href='#' style={{color:'#fff'}}>Learn more <Icon type='arrow-right' /></a>
            </Row>
        </FullWidthDiv>
        <FullWidthDiv>
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
}