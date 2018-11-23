import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/cover.css'
import './css/App.css';
import CoverHeader from './CoverHeader';

class App extends Component {
  render() {
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <CoverHeader />

      <main role="main" className="inner cover">
        <h1 className="cover-heading">We are getting married on</h1>
        <p className="lead">2nd December, 2018</p>
      </main>
    </div>
    );
  }
}

export default App;
