import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from './Input';
import GifList from './GifList';
import GifItem from './GifItem';
import GifModal from './GifModal';
import ViewTerm from './ViewTerm';
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
            <div className="flex">
                <Input />
                <div className="flex-col">
                    <ViewTerm />
                    {
                        this.props.main && <GifItem image={this.props.main} main={true} className='main-image'/>
                    }
                </div>
            </div>
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
        main: state.gifs[0]
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleFetchList(term) {
        dispatch(fetchTranslateGif(term));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
