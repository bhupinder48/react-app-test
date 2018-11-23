import React, { Component } from 'react';

class CoverHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand text-danger font-weight-bold">Harveen Bhupinder</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="/">Shagun</a>
            <a className="nav-link" href="/">Barat</a>
          </nav>
        </div>
      </header>
    );
  }
}


export default CoverHeader;