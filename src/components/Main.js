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
        <div className="main-page">
            <section id='section-translate'>
            <Link className="link-home" to="/">
                <h2>GIPHY TRANSLATE</h2>
                <div className="home-icon"><i className="fab fa-sistrix fa-4x"></i></div>
            </Link>
            <div className="flex">
                <Input />
                <div className="flex-col">
                    <ViewTerm />
                    {
                        this.props.main && <GifItem image={this.props.main} main={true} id='main-image'/>
                    }
                </div>
            </div>
            <div className='arrow-down'>
                <i className="fas fa-angle-double-down fa-2x"></i>
            </div>
            </section>
            <section id='section-search'>
                <GifList />
            </section>
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
