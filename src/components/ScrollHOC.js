import React, { Component } from 'react';


const scrollStepInPx=50, delayInMs=20;
const ScrollHOC = (Wrapped) => {
    return class Scroll extends Component {
        constructor() {
            super();
            this.state = {
                intervalId: 0
            };
            this.scrollDown = this.scrollDown.bind(this);
            this.scrollStep = this.scrollStep.bind(this);
        }

        scrollStep() {
            const location = this.props.location;
            console.log('enable', this.props.enable)
            if(this.props.enable) {
                if (window.pageYOffset + scrollStepInPx > location * window.innerHeight) {
                    window.scroll(0, location * window.innerHeight);
                    clearInterval(this.state.intervalId);
                } else {
                    window.scroll(0, window.pageYOffset + scrollStepInPx);
                }
            } else {
                clearInterval(this.state.intervalId);
            }
        }

        scrollDown() {
            let intervalId = setInterval(this.scrollStep, delayInMs);
            this.setState({ intervalId: intervalId });
        }

        render () {
            return <Wrapped onClick={this.scrollDown} {...this.props}/>
        }
    }
}

export default ScrollHOC;