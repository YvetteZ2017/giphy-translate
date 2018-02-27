import React, { Component } from 'react';
import { connect } from 'react-redux';

  
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
        if(this.props.gifs && this.props.gifs.length > 1) {
            if (window.pageYOffset + (+this.props.scrollStepInPx) > window.innerHeight - 200) {
                window.scroll(0, window.innerHeight - 200);
                clearInterval(this.state.intervalId);
            } else {
                window.scroll(0, window.pageYOffset + (+this.props.scrollStepInPx));
            }
        } else {
            clearInterval(this.state.intervalId);
        }
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

const mapStateToProps = (state) => {
    return {
        gifs: state.gifs
    }
}

export default connect(mapStateToProps)(Scroll);