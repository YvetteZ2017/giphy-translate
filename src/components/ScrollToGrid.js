import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollHOC from './ScrollHOC';

class ScrollToGrid extends Component {
    render () {
        return <div className='arrow-down' onClick={this.props.onClick}>
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

export default connect(mapStateToProps)(ScrollHOC(ScrollToGrid));