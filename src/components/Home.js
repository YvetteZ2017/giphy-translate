import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
          <img className="home-gif" src={'./cat.gif'} alt="Giphy~"/>
          <h1 className="home-title">GIPHY TRANSLATE</h1>
          <Link to="/main">
            <p className="start">START</p>
          </Link>
      </div>
    );
  }
}

export default Home;
