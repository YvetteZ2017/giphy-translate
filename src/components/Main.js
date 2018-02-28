import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, GifList, GifItem, GifModal, ViewTerm, ScrollToGrid, Home, ScrollToHome} from './';
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
        const gifsLoaded = this.props.gifs && this.props.gifs.length > 1;
        return (
        <div className="main-page">
            <Home />
            <div id='menu'>
                <ScrollToHome location={0} direction='up' enable='true' />
                <Input />
            </div>

            <div id='main-view'>
                <section id='section-view'>
                    <div className="flex-col">
                        <ViewTerm />
                        {
                            this.props.main ?
                            <GifItem image={this.props.main} main={true}/> :
                            <div className="place-holder"></div>
                        }
                    </div>
                    <ScrollToGrid location={2} enable={gifsLoaded.toString()}/>
                </section>
                <section id='section-search'>
                    <GifList />
                </section>
                <GifModal />
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        select: state.select,
        main: state.gifs[0],
        gifs: state.gifs
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleFetchList(term) {
        dispatch(fetchTranslateGif(term));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
