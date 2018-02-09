import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { translateNext, translatePrev } from '../store';


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
                <p className='term'>{this.props.translate.term}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    translate: state.translate
})

const mapDispatchToProps = (dispatch) => ({
    prevTerm() {
        store.dispatch(translatePrev())
    },
    nextTerm() {
        store.dispatch(translateNext())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewTerm);
  
