import React, { Component } from 'react';
import ScrollHOC from './ScrollHOC';

class ScrollToHome extends Component {
    render () {
        return (
            <div className="link-home" onClick={this.props.onClick}>
                <h2>GIFI TRANSLATE</h2>
                <div className="home-icon"><i className="fab fa-sistrix fa-4x"></i></div>
            </div>
            )
    }
}

export default ScrollHOC(ScrollToHome);