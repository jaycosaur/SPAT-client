import React from 'react'
import { List, Avatar, Badge } from 'antd'
import { Link } from 'react-router-dom'

export default (props) => {
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
                  avatar={<Badge status="success" dot><Avatar size="large" style={{color: computeAvatarStyle(item.state), backgroundColor: 'transparent', border: '2px solid', borderColor: computeAvatarStyle(item.state)}} icon={bsStyleGen(item.state)} /></Badge>}                                     
                  title={
                    <Link to={`/datasets/${item.datasetId}`}>
                      {item.title.trim().split("\n")[0]}
                    </Link>
                  }
                  description={new Date(item.createdAt).toLocaleString() + " - " +item.description.toLocaleString()}
                />
                <span>{item.state.toLocaleString()}</span>
              </List.Item>
            )}
          />
    );
  }