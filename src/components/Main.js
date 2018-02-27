import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Input, GifList, GifItem, GifModal, ViewTerm, Scroll } from './';
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
            <div id='menu'>
                <Link className="link-home" style={{textDecoration: "none"}} to="/">
                    <h2>GIFI TRANSLATE</h2>
                    <div className="home-icon"><i className="fab fa-sistrix fa-4x"></i></div>
                </Link>
                <Input />
            </div>

            <div id='main-view'>
                <section id='section-view'>
                    <div className="flex-col">
                        <ViewTerm />
                        {
                            this.props.main ?
                            <GifItem image={this.props.main} main={true} id='main-image'/> :
                            <div className="place-holder"></div>
                        }
                    </div>
                    <Scroll scrollStepInPx="50" delayInMs="20"/>
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
        main: state.gifs[0]
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleFetchList(term) {
        dispatch(fetchTranslateGif(term));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);

// <div className='arrow-down'>
// <p>More</p>
// <i className="fas fa-angle-double-down fa-2x"></i>
// </div>