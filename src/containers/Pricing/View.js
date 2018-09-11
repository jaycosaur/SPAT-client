import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Transition } from 'react-transition-group' // ES6
import { connect } from 'react-redux'
import * as unauthActions from './../../store/actions/unauthActions'

import { List, Button, Card, Row, Col, Icon } from 'antd';

import tierData from './tierData'

const data = [
    'Classification of data through AI',
    'Access to analytics tools',
    'Trend analysis',
    'One-on-one expert analysis',
    'Early access features',
    'Customised reports',
  ];

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out, height ${duration}ms`,
  opacity: 0,
  height: 0
}

const transitionStyles = {
  entering: { opacity: 0, height:0 },
  entered:  { opacity: 1, height: "100%" },
  exiting: { opacity: 1, height: "100%" },
  exited: { opacity: 0, height:0 },
};

const PricingCard = (props) =>
    <Col key={props.item} span={props.cardWidth} style={{padding: !props.noPad&&'0 8px', marginBottom: props.marginBottom}}>
        <Card onClick={props.onSelect} hoverable style={{borderColor: props.selected?'rgb(159,193,69)':null}}>
            <Row style={{textAlign:'center', padding: '20px'}}>
                <h3 style={{paddingBottom: '0px'}}><strong>{props.data.title}</strong></h3>
                <Row type="flex" justify="center" align="top">
                    <span>
                        <span style={{fontSize:"30px", fontWeight:'500', position: 'relative', top: '-20px'}}>$</span>
                        <span style={{fontSize:"58px"}}>{props.data.price}</span>
                        <span style={{ fontSize:"30px", fontWeight:'500', position: 'relative', top: '-20px'}}> {props.data.unit||"month"}</span>
                    </span>
                </Row>
                <h4 style={{paddingTop: '10px', color: 'rgb(159,193,69)'}}>{props.data.subtitle}</h4>
            </Row>
            <Row style={{paddingLeft: '16px', paddingRight: '16px', display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <strong>
                    <a onClick={props.handleToggleFeatures} style={{textAlign: "center", marginBottom: 16}}>
                        {props.showFeatures?<span><Icon type="bars" /> Hide Features</span>:<span><Icon type="bars" /> Show Features</span>}
                    </a>
                </strong>
                {<Transition in={props.showFeatures} timeout={duration}>
                    {(state) => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            <List
                                key="feature-list"
                                dataSource={data}
                                renderItem={(item, i) => (
                                <List.Item>
                                    {props.data.points[i]
                                        ?
                                        <Icon type='check-circle-o' style={{fontSize: '20px', color: '#52c41a', paddingRight: '30px'}}/>
                                        :
                                        <Icon type='cross-circle-o' style={{fontSize: '20px', color: '#ff4d4f', paddingRight: '30px'}}/>
                                    }
                                    {item}
                                </List.Item>)}
                            />
                        </div>
                    )}
                </Transition>}
            </Row>
            {<Row style={{textAlign:'center'}}>
                <Link to={`/signup/${props.type}`}><Button style={{marginTop: '30px', marginBottom: '30px', width: 250}} size='large' type='primary'>{props.data.freeTrial?`Try it free`:`Choose ${props.data.title} Plan`}</Button></Link>
                <h4>{props.data.condition}</h4>
            </Row>}
        </Card>
    </Col>

const DesktopView = (props) =>(
      <div className="Pricing" style={{padding:'30px 0', paddingBottom: 100}}>
        <FullWidthDiv backgroundColor='none' type='flex' justify='center' padding='16px 0' margin='16px 0'>
            <div style={{width: '100%',textAlign:'center', maxWidth: '70%', color: 'rgb(22,85,151)'}}>
                <h2 style={{color: 'rgb(22,85,151)', fontSize: "2em", fontWeight: 200}}><strong>Try for free on up to 1000 rows.</strong></h2>
                <h1 style={{color: 'rgb(22,85,151)', fontSize: "3em", fontWeight: 800}}><strong>Spend Analysis done right the first time.</strong></h1>
            </div>
        </FullWidthDiv>
        <FullWidthDiv backgroundColor='none' type='flex' justify='center' padding='0px 0' margin='0px 0'>
            <Row type="flex" justify="center" style={{marginBottom:'16px', color:'rgb(159,193,69)'}}>
                <span>
                    <strong>Most Popular</strong>
                </span>
            </Row>
        </FullWidthDiv>
        <Row style={{padding:'0px 0'}} gutter={32} type='flex' justify='center' align='middle'>
            <PricingCard showFeatures={props.showPackageFeatures} handleToggleFeatures={props.togglePackageFeatures} type={"standard"} onSelect={e => props.selectPricePackage(1)} key={1} item={1} selected={props.selectedPackage===1} data={tierData[0]} cardWidth={7}/>
            <PricingCard showFeatures={props.showPackageFeatures} handleToggleFeatures={props.togglePackageFeatures} type={"premium"} onSelect={e => props.selectPricePackage(2)} key={2} item={2} selected={props.selectedPackage===2} data={tierData[1]} cardWidth={7}/>
            <PricingCard showFeatures={props.showPackageFeatures} handleToggleFeatures={props.togglePackageFeatures} type={"tailored"} onSelect={e => props.selectPricePackage(3)} key={3} item={3} selected={props.selectedPackage===3} data={tierData[2]} cardWidth={7}/>
        </Row>
        <Row style={{padding:'0px 0', marginTop: 8}} gutter={32} type='flex' justify='center' align='middle'>
            <Col span={21} style={{padding:'0 4px'}}>
                <Card hoverable bodyStyle={{textAlign: 'center', padding: "30px 30px"}}>
                    <p style={{fontSize: "1.5em"}}><strong>Looking for a one off or ad-hoc analysis?</strong> Whilst we don't provide this we know someone who does!</p>
                    <p style={{fontSize: "1em"}}>Please get in touch with <a rel="noopener noreferrer" href="https://www.grosvenor.com.au/contact" target="_blank">Grosvenor Management Consulting.</a></p>
                </Card>
            </Col>
        </Row>
      </div>)

const MobileView = (props) =>(
    <div className="Pricing" style={{padding:'30px 0', paddingBottom: 12}}>
      <FullWidthDiv backgroundColor='none' type='flex' justify='center' padding='0px 0px' margin='16px 0'>
          <div style={{width: '90%', textAlign:'center', color: 'rgb(22,85,151)'}}>
              <h2 style={{color: 'rgb(22,85,151)', fontSize: "1.5em", fontWeight: 200}}><strong>Try for free on up to 1000 rows.</strong></h2>
              <h1 style={{color: 'rgb(22,85,151)', fontSize: "2em", fontWeight: 800}}><strong>Spend Analysis done right the first time.</strong></h1>
          </div>
      </FullWidthDiv>
      <Row style={{padding:'0px 0'}} gutter={32} type='flex' justify='center' align='middle'>
          <PricingCard noPad showFeatures={props.showPackageFeatures} handleToggleFeatures={props.togglePackageFeatures} type={"standard"} onSelect={e => props.selectPricePackage(1)} key={1} item={1} selected={props.selectedPackage===1} data={tierData[0]} cardWidth={21}/>
          <PricingCard noPad showFeatures={props.showPackageFeatures} handleToggleFeatures={props.togglePackageFeatures} type={"premium"} onSelect={e => props.selectPricePackage(2)} key={2} item={2} selected={props.selectedPackage===2} data={tierData[1]} cardWidth={21}/>
          <PricingCard noPad showFeatures={props.showPackageFeatures} handleToggleFeatures={props.togglePackageFeatures} type={"tailored"} onSelect={e => props.selectPricePackage(3)} key={3} item={3} selected={props.selectedPackage===3} data={tierData[2]} cardWidth={21}/>
      </Row>
      <Row style={{padding:'0px 0', marginTop: 8}} gutter={32} type='flex' justify='center' align='middle'>
          <Col span={21} style={{padding:0}}>
              <Card hoverable bodyStyle={{textAlign: 'center', padding: "30px 30px"}}>
                  <p style={{fontSize: "1.5em"}}><strong>Looking for a one off or ad-hoc analysis?</strong> Whilst we don't provide this we know someone who does!</p>
                  <p style={{fontSize: "1em"}}>Please get in touch with <a rel="noopener noreferrer" href="https://www.grosvenor.com.au/contact" target="_blank">Grosvenor Management Consulting.</a></p>
              </Card>
          </Col>
      </Row>
    </div>)

const FullWidthDiv = (props) =>
    <Row span={props.cardWidth} style={{...props.extraStyles, margin: props.margin?props.margin:'30px 0', padding: props.padding?props.padding:'40px 0', background: props.backgroundColor?props.backgroundColor:'#d9d9d9', textAlign:'center'}} {...props}>
        {props.children}
    </Row>

FullWidthDiv.propTypes = {
    backgroundColor: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
    return {
        showPackageFeatures: state.unauth.showPackageFeatures,
        selectedPackage: state.unauth.selectedPackage
    }
}

const View = (props) => {
    switch(props.window.device){
        case "desktop":
            return <DesktopView {...props}/>
        default:
            return <MobileView {...props}/>
    }
}
    

export default connect(mapStateToProps, unauthActions)(View)