import { PureComponent } from 'react'
import { API } from "aws-amplify";

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
    API.get("spat", this.props.path)
      .then(res => this.setState({data: res, isFetching: false}))
      .catch(e => {
        this.setState({isError: e})
        console.log('failed @ '+this.props.path, {e})
      })
  }

  render() {
    return this.props.children(this.state)
  }
}


