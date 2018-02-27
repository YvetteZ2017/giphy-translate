import React, { Component } from 'react';

  
class Scroll extends Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
        this.scrollDown = this.scrollDown.bind(this);
        this.scrollStep = this.scrollStep.bind(this);
    }

    scrollStep() {
        if (window.pageYOffset + (+this.props.scrollStepInPx) > window.innerHeight) {
            window.scroll(0, window.innerHeight);
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset + (+this.props.scrollStepInPx));
        console.log(window.innerHeight,window.pageYOffset, this.props.scrollStepInPx)
    }

    scrollDown() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render () {
        return <div className='arrow-down' onClick={this.scrollDown}>
                    <p>More</p>
                    <i className="fas fa-angle-double-down fa-2x"></i>
                </div>
        }
}

export default Scroll;