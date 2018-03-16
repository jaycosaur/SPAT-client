import { PureComponent } from 'react'
import { invokeApig } from "./../../../../libs/awsLib";

export default class FetchData extends PureComponent {
  state = {
    isFetching: true,
    isError: false,
    data: null
  }

  componentWillMount(){
    this.fetch()
  }

  fetch = async() => {
    invokeApig({path: this.props.path})
      .then(res => this.setState({data: res, isFetching: false}))
      .then(e => console.log('fetched @ '+this.props.path))
      .catch(e => {
        this.setState({isError: e})
        console.log('failed @ '+this.props.path)
      })
  }

  render() {
    return this.props.children(this.state)
  }
}


