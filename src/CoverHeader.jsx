import React, { Component } from 'react';

class CoverHeader extends Component {

  render() {
    return (
      <header className="masthead">
        <div className="inner">
          <h3 className="masthead-brand text-danger font-weight-bold">Harveen Bhupinder</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className={`nav-link ${this.props.activeTab === 'home' ? 'active' : ''}`} href='/'>Home</a>
            <a className={`nav-link ${this.props.activeTab === 'shagun' ? 'active' : ''}`} href='/shagun'>Shagun</a>
            <a className={`nav-link ${this.props.activeTab === 'barat' ? 'active' : ''}`} href='/barat'>Barat</a>
          </nav>
        </div>
      </header>
    );
  }
}


export default CoverHeader;