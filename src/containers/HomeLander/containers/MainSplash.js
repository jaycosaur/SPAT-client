import React, {Component} from 'react'

import { Button, Row, Col, Icon } from 'antd';

import AutoTypewriter from './../../../components/AutoTypewriter'
import StyledButton from './../components/StyledButton'
import HomeSplashImage from './../components/HomeSplashImage'

const withViewport = (MyComponent) =>
    class componentName extends Component {
        constructor(props){
            super(props)
            this.state = { width: 0, height: 0}
        }
        componentDidMount() {
            this.updateWindowDimension();
            window.addEventListener('resize', this.updateWindowDimension)
        }
        componentWillMount() {
            window.removeEventListener('resize', this.updateWindowDimension)
        }
        updateWindowDimension = () => {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        render() {
            return (
                <MyComponent {...this.props} viewport={{width: this.state.width, height: this.state.height}} />
            )
        }
    }

const MainSplash = (props) =>
    <Row>
        <Row style={{padding: '0px 80px', paddingTop: "150px", color: '#fff', width: '95%'}}>
            <Col span={10} style={{paddingTop: 20}}>
                <h1 style={{color: '#54b948'}}>
                    Taking the <strong>
                        <AutoTypewriter 
                            textArray={['effort','time','guessing', 'risk']}
                            keyDelay={100} 
                            completeDelay={2000} 
                            blink
                            />
                    </strong>
                </h1>
                <h3 style={{color: '#54b948'}}>
                    out of spend analysis.
                </h3>
                <StyledButton onClickPath={"/signup"} text="Try it now"/>
            </Col>
            <Col span={14} style={{margin: 0, padding: 0}}>
                <HomeSplashImage /> 
            </Col>
        </Row>
        <div style={{
                width:0,
                height: 0,
                borderStyle: "solid",
                borderWidth: `0 0 80px ${props.viewport.width}px`,
                borderColor: "transparent transparent #a0cf67 transparent",
            }}/>
    </Row>
    

export default withViewport(MainSplash)
    

/*
<Row>
        <Row style={{padding: '40px 80px', color: '#fff', borderRadius: '0 0 100px 0', minHeight: '200px', width: '95%', background: 'rgb(22,85,151)'}}>
            <Col span={16}>
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
            <Col span={8}>
            </Col>
        </Row>
    </Row>
*/