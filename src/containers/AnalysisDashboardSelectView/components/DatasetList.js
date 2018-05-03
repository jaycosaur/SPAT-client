import React from 'react'
import { List, Avatar, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setDatasetId } from './../../../store/actions/dashboardActions'

const DatasetList = (props) => {
    const computeAvatarStyle = (state) => {
      if(state === "Pending Processing"){
        return "#ffd666"
      }
      else if(state === "Processing"){
        return "#ffc069"
      }
      else if(state === "Processing Complete"){
        return "#73d13d"
      }
      else if(state === "Failed"){
        return "#ff4d4f"
      }
    }
  
    const bsStyleGen = (processState) => {
      switch(processState) {
        case "Pending Processing":
          return "solution";
  
        case "Processing":
          return "calculator";
  
        case "Processing Complete":
          return "rocket";
        
        case "Failed":
          return "close-circle-o";
  
        default:
          return "danger";
      }
    };
  
    return (
          <List
            loading={props.isLoading}
            itemLayout="horizontal"
            dataSource={props.datasets}
            renderItem={item => (
              <List.Item key={String(item.datasetId)}>
                <List.Item.Meta
                  avatar={<Avatar size="large" style={{color: computeAvatarStyle(item.state), backgroundColor: 'transparent', border: '2px solid', borderColor: computeAvatarStyle(item.state)}} icon={bsStyleGen(item.state)} />}                                     
                  title={
                    <Link to={`/analysisdashboard/${item.datasetId}`}>
                      {item.title.trim().split("\n")[0]}
                    </Link>
                  }
                  description={new Date(item.createdAt).toLocaleString() + " - " +item.description.toLocaleString()}
                />
                <span><strong>Ready to analyse</strong></span>
              </List.Item>
            )}
          />
    );
  }

  export default connect((store) => {
    return {
        dashboard: store.dashboard
    }
    })(DatasetList)

