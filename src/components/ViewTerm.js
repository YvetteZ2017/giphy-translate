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
        if(this.props.gifs.length) {
            this.props.nextTerm();
        }
    }

    handlePrev() {
        if(this.props.gifs.length) {
            this.props.prevTerm();
        }
    }

    render() {
        return (
            <div className='term-view'>
                <div className='arrow'><a onClick={this.handlePrev}><i className="fas fa-angle-double-left fa-2x"></i></a></div>
                <p>{this.props.translate.term}</p>
                <div className='arrow'><a onClick={this.handleNext}><i className="fas fa-angle-double-right fa-2x"></i></a></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    translate: state.translate,
    gifs: state.gifs
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
  
