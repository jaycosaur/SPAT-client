import React from 'react';
import { Steps, Icon } from 'antd';
const Step = Steps.Step;

export default props => {  
    return (
        <div>
            <Steps style={{padding:'16px 100px'}}>
                <Step status={props.status==="Upload"?"process":"finish"} title="Upload" icon={<Icon type="cloud-upload-o" />} />
                <Step status={props.status==="Pending Processing"?"process":props.status==="Upload"?"wait":"finish"} title="Pending" icon={<Icon type="solution" />} />
                <Step status={props.status==="Processing"?"process":props.status!=="Processing Complete"?"wait":"finish"} title="Processing" icon={<Icon type="calculator" />} />
                <Step status={props.status==="Processing Complete"?"finish":"wait"} title="Ready to Analyse" icon={<Icon type="rocket" />} />
            </Steps>
            {props.children}
        </div>)
  };