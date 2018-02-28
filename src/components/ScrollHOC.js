import React, { Component } from 'react';


const scrollDownStepInPx=50, delayInMs=20;
const ScrollHOC = (Wrapped) => {
    return class Scroll extends Component {
        constructor() {
            super();
            this.state = {
                intervalId: 0
            };
            this.scroll = this.scroll.bind(this);
            this.scrollDownStep = this.scrollDownStep.bind(this);
            this.scrollUpStep = this.scrollUpStep.bind(this);
        }

        scrollDownStep() {
            const location = this.props.location;
            if(this.props.enable) {
                if (window.pageYOffset + scrollDownStepInPx > location * window.innerHeight) {
                    window.scroll(0, location * window.innerHeight);
                    clearInterval(this.state.intervalId);
                } else {
                    window.scroll(0, window.pageYOffset + scrollDownStepInPx);
                }
            } else {
                clearInterval(this.state.intervalId);
            }
        }

        scrollUpStep() {
            const location = this.props.location;
            if(this.props.enable) {
                if (window.pageYOffset - scrollDownStepInPx < location * window.innerHeight) {
                    window.scroll(0, location * window.innerHeight);
                    clearInterval(this.state.intervalId);
                } else {
                    window.scroll(0, window.pageYOffset - scrollDownStepInPx);
                }
            } else {
                clearInterval(this.state.intervalId);
            }
        }

        scroll() {
            if(this.props.direction === 'up') {
                let intervalId = setInterval(this.scrollUpStep, delayInMs);
                this.setState({ intervalId });
            } else {
                let intervalId = setInterval(this.scrollDownStep, delayInMs);
                this.setState({ intervalId });
            }
        }

        render () {
            return <Wrapped onClick={this.scroll} {...this.props}/>
        }
    }
}

export default ScrollHOC;