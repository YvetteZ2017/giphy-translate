import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Giphy App</h1>
        </header>
        <p className="App-intro">
          Hello!
        </p>
        <Link to="/main">
          <h1>Start Translate</h1>
        </Link>
      </div>
    );
  }
}

export default Home;
