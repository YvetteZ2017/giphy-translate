import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from './Input';
import GifList from './GifList';
import GifModal from './GifModal';
import { fetchTranslateGif } from '../store/';

class Main extends Component {
    constructor(props) {
        super(props);
        this.clickToFetch = this.clickToFetch.bind(this);
    }

    clickToFetch(ev) {
        ev.preventDefault();
        this.props.handleFetchList(this.props.select);
    }

    render() {
        return (
        <div className="App">
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Input />
            
            <button onClick={this.clickToFetch}>Fetch</button>
           
            <GifList />
            <GifModal />
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        select: state.select,
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleFetchList(term) {
        dispatch(fetchTranslateGif(term));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
