import React, { Component } from 'react';
import ScrollHOC from './ScrollHOC';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
          <img className="home-gif" src={'./cat.gif'} alt="Giphy~"/>
          <h1 className="home-title">GIFI TRANSLATE</h1>
          <ScrollStart location={1} enable='true'/>
      </div>
    );
  }
}

class ScrollStartContent extends Component {
  render() {
    return (
      <div className="start-scroll" onClick={this.props.onClick}>
        <p className="start">START</p>
      </div>
    )
  }
}

const ScrollStart = ScrollHOC(ScrollStartContent);

export default Home;
