import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';

import Input from './Input';
import GifList from './GifList';
import { fetchList } from '../store/';

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
            <p className="App-intro">
            Main gifs
            </p>
            <Link to="/">
            <h1>Home</h1>
            </Link>
            <Input />
            <button onClick={this.clickToFetch}>Fetch</button>
            <GifList />
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
        dispatch(fetchList(term));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
