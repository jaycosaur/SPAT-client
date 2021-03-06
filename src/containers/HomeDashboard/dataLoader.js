import React, { Component } from 'react'
import { invokeApig } from '../../libs/awsLib';

export const withDataLoader = (InjectedComponent, dataPath) =>
  {
    return class withDataLoader extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          datasets: [],
        };
      }
    
      async componentDidMount() {
        if (!this.props.isAuthenticated) {
          return;
        }
      
        try {
          const results = await this.datasets();
          this.setState({ datasets: results });
        } catch (e) {
          alert(e);
        }
    
        this.setState({ isLoading: false });
      }
      
      datasets() {
        return invokeApig({ path: dataPath });
      }

      render() {
        return (
          <InjectedComponent {...this.state}/>
        )
      }
    }
  }

export class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      datasets: [],
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
  
    try {
      const results = await this.datasets();
      this.setState({ datasets: results });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }
  
  datasets() {
    return invokeApig({ path: this.props.fetchPath });
  }

  render() {
    return this.props.children(this.state)
  }
}