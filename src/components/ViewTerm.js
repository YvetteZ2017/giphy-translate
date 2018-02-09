import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWordToTranslate, fetchTranslateGif, getNextTerm, getPrevTerm } from '../store';


class ViewTerm extends Component {
    constructor() {
        super();
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext() {
        this.props.nextTerm();
    }

    handlePrev() {
        this.props.prevTerm();
    }

    render() {
        return (
            <div className='term-view'>
                <button onClick={this.handlePrev}>Previous</button>
                <button onClick={this.handleNext}>Next</button>
                <p className='term'>{this.props.translate}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedTerm: state.translate
})

const mapDispatchToProps = (dispatch) => ({
    prevTerm() {
        dispatch(getPrevTerm());
    },
    nextTerm() {
        dispatch(getNextTerm());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewTerm);
  
