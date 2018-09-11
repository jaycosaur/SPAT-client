import { Component } from 'react'
import { connect } from 'react-redux'
import * as windowActions from './../store/actions/windowActions'

class WindowDimensionsContainer extends Component {
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions = () => {
        this.props.setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    render() {
        return (this.props.children)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

export default connect(mapStateToProps, windowActions)(WindowDimensionsContainer)


