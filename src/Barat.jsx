import React, { Component } from 'react';
import CoverHeader from './CoverHeader';

class Barat extends Component {

  render() {
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column no-background-image">
        <CoverHeader activeTab={this.props.activeTab} />

        <main role="main" className="inner cover font-weight-bold">
        </main>
      </div>
    );
  }
}

export default Barat;
