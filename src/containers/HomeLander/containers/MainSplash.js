import React, {Component} from 'react'
import { Row, Col } from 'antd';

import AutoTypewriter from './../../../components/AutoTypewriter'
import StyledButton from './../components/StyledButton'
import HomeSplashImage from './../components/HomeSplashImage'

const withScroll = (MyComponent) =>
    class componentName extends Component {
        constructor(props){
            super(props)
            this.state = { scrollY: 0 }
        }
        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll, { passive: true })
        }
        componentWillMount() {
            window.removeEventListener('scroll', this.handleScroll)
        }
        handleScroll = (event) => {
            this.setState({
                scrollY: event.path[1].scrollY
            })
          }
        render() {
            return (
                <MyComponent {...this.props} scrollY={this.state.scrollY} />
            )
        }
    }
const MainSplash = (props) =>
        <Row>
            <Row style={{padding: '0px 80px', paddingTop: "100px", color: '#fff', width: '95%', height: props.window.window.height-62}}>
                <Col span={16} style={{paddingTop: 0, zIndex: 10}}>
                    <h1 style={{color: '#54b948', fontSize: '5em', marginBottom: '0em'}}>
                        Taking the <strong>
                            <AutoTypewriter 
                                textArray={['effort','time','guessing', 'risk']}
                                keyDelay={100} 
                                completeDelay={2000} 
                                blink
                                />
                        </strong>
                    </h1>
                    <h3 style={{color: '#54b948', fontSize: '3.5em'}}>
                        out of spend analysis.
                    </h3>
                    <StyledButton onClickPath={"/signup"} text="Try it free"/>
                </Col>
                <Col span={18} style={{position: 'absolute', right: 0 ,margin: 0, padding: 0, paddingTop: 20}}>
                    <HomeSplashImage /> 
                </Col>
            </Row>
            {false&&<div style={{
                    width:0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: `0 0 ${100*(1-(props.scrollY/props.window.window.height)*2)}px ${props.window.window.width}px`,
                    borderColor: "transparent transparent #a0cf67 transparent",
                }} onScroll={e=> console.log(e)}/>}
        </Row>

const MobileSplash = (props) =>
        <Row style={{padding: '0px 1em', paddingTop: "62px", color: '#fff', width: '100%'}}>
            <Row style={{margin: 0, padding: 0, paddingTop: 0}}>
                <HomeSplashImage /> 
            </Row>
            <Row style={{paddingTop: 80, marginBottom: 80, zIndex: 10, textAlign: "center"}}>
                <h1 style={{color: '#54b948', fontSize: '2.8em', marginBottom: '0em'}}>
                    Taking the <strong>
                        <AutoTypewriter 
                            textArray={['effort','time','guessing', 'risk']}
                            keyDelay={100} 
                            completeDelay={2000} 
                            />
                    </strong>
                </h1>
                <h3 style={{color: '#54b948', fontSize: '2em', marginBottom: "2em"}}>
                    out of spend analysis.
                </h3>
                <StyledButton onClickPath={"/signup"} text="Try it free"/>
            </Row>
        </Row>

const View = (props) => {
    switch(props.window.device){
      case "desktop":
        return <MainSplash {...props}/>
      default:
        return <MobileSplash {...props}/>
    }
  }
    
export default withScroll(View)
