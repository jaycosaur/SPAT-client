import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class AutoTypewriter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        delay: null,
        counter: null,
        startTime: null,
        elapsed: 0,
        arrayItem: 0,
        readyToProgress: false,
      };
      this.callBack = this.callBack.bind(this)
    }


    callBack() {
        this.setState({
            arrayItem: (this.state.arrayItem<this.props.textArray.length-1)?this.state.arrayItem+1:0,
        })
    }
  
    render() {
      return (
        <span>
            <TextTypewriter key = {'text'} callBack={this.callBack} delay={this.props.keyDelay} wait={this.props.completeDelay} text={this.props.textArray[this.state.arrayItem]} erase blink/>
            <TextCursor key= {'cursor'} blink={this.props.blink}/>
        </span>
      );
    }
  }

AutoTypewriter.propTypes = {
    textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    keyDelay: PropTypes.number,
    completeDelay: PropTypes.number,
    blink: PropTypes.bool,
}

class TextTypewriter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        item: 0,
        startTime: null,
        elapsed: 0,
        displayText: '',
        completed: false,
        showIBar: true,
        isDeleting: false,
      };
    }
  
    componentDidMount = () => {
        this.timer = setInterval(this.tick, 10);
        this.setState({
            startTime: new Date(),
        })
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.text !== nextProps.text){
            this.setState({
                item: 0,                
                displayText: nextProps.text.slice(0,0),
                completed: false,
                isDeleting: false,
                isDeleted: false,
                startTime: new Date(),
            })
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    }

    updateText() {
        const counter = (this.state.item<this.props.text.length-1)?this.state.item+1:this.props.text.length-1
        this.setState({
            item: counter,
            displayText: this.props.text.slice(0,this.state.displayText.length+1)
        })
        if (this.state.displayText.length===this.props.text.length&&!this.state.completed){
            this.setState({
                completed: true
            })
        }
    }

    resetPrimaryTimer(){
        this.setState({
            startTime: new Date()
        })
    }

    deleteText(){
        let currentElement = this.state.item
        let nextElement = currentElement>0?currentElement-1:0
        this.setState({
            item: nextElement,
            displayText: this.state.displayText.slice(0,-1)
        })
        if ((this.state.displayText.length===0)&&this.state.completed){
            this.setState({
                isDeleted: true
            })
        }
    }

    tick = () => {
        this.setState({
            elapsed: new Date() - this.state.startTime,
        })

        //not completed and typing out
        if(!this.state.completed&&(this.state.elapsed >= this.props.delay)){
            this.updateText()
            this.resetPrimaryTimer()
        }

        // completed and waiting
        if(this.state.completed&&!this.state.isDeleting&&(this.state.elapsed >= this.props.wait)){
            this.setState({
                isDeleting: true,
            })
            this.resetPrimaryTimer()
        }

        // deleting
        if(this.state.isDeleting&&!this.state.isDeleted&&(this.state.elapsed >= 50)){
            this.deleteText()
            this.resetPrimaryTimer()
        }

        // fully deleted and waiting
        if(this.state.isDeleted&&(this.state.elapsed >= 200)){
            this.props.callBack()
        }

    }
  
    render() {
      return (
        this.state.displayText
      );
    }
  }

TextTypewriter.propTypes = {
    text: PropTypes.string.isRequired,
    delay: PropTypes.number,
    wait: PropTypes.number,
    callBack: PropTypes.function,
    erase: PropTypes.bool,
}

TextTypewriter.defaultProps = {
    delay: 100,
    wait: 2000
}

class TextCursor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startTime: null,
        elapsed: 0,
      };
    }
  
    componentDidMount = () => {
        this.timer = setInterval(this.tick, 10);
        this.setState({
            startTime: new Date(),
        })
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    }

    resetTimer(){
        this.setState({
            startTime: new Date()
        })
    }


    tick = () => {
        this.setState({
            elapsed: new Date() - this.state.startTime
        })

        if(this.state.elapsed >= 400 && this.props.blink) {
            this.setState({
                showIBar: !this.state.showIBar,
            })
            this.resetTimer()
        }
    }
  
    render() {
      return (
            this.state.showIBar?'|':''
      );
    }
  }

TextCursor.propTypes = {
    blink: PropTypes.bool
}
