import React from "react";
import View from './View'

export default class PricingContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedCard: 2
        }
    }

    selectCard = (i) => {
        this.setState({
            selectedCard: i
        })
    }

    render() {
        return <View signupPath={this.props.match.params.extra==="choose-a-plan"} selectCard={this.selectCard} selected={this.state.selectedCard}/>
    }
}
