import React from "react";
import View from './View'

export default class PricingContainer extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return <View signupPath={this.props.match.params.extra==="choose-a-plan"} {...this.props} />
    }
}
