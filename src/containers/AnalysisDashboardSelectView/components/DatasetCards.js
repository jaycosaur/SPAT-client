import React, { PureComponent } from 'react'
import { Avatar, Card, Icon } from 'antd'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
      props.datasets.map(item =>
        <DatasetCard {...item} />
        )
      )
  }

  
class DatasetCard extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      isHovered: false
    }
  }

  toggleHoveredState = () => {
    this.setState({isHovered: true})
  }

  toggleUnhoveredState = () => {
    this.setState({isHovered: false})
  }

  render() {
    return (
        <Card 
          onMouseEnter={this.toggleHoveredState}
          onMouseLeave={this.toggleUnhoveredState}
          hoverable	
          key={String(this.props.datasetId)} 
          style={{width: 400, margin: 16}}
          actions={[
            <Link key="1" to={`/analysisdashboard/${this.props.datasetId}`}><span><Icon type="rocket" /> Analyse</span></Link>,
            <Link key="2" to={`/datasets/${this.props.datasetId}`}><span><Icon type="solution" /> View</span></Link>
            ]}
          >
            <Card.Meta
              avatar={<Avatar size={this.state.isHovered?"large":null} style={{background: this.state.isHovered?"#54b948":null}} icon="rocket"/>}
              title={this.props.title.trim().split("\n")[0]}
              description={this.props.description.toLocaleString()+' - Uploaded on: '+new Date(this.props.createdAt).toLocaleString()}
              />
        </Card>
    )
  }
}
  