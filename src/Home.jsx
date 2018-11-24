import React, { Component } from 'react';
import CoverHeader from './CoverHeader';
import CountDown from 'react-countdown-now';
import { Row, Col } from 'reactstrap';

class Home extends Component {

  renderer = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
    return (
      <span>{`${days}D ${hours}h ${minutes}m ${seconds}s to go`}</span>
    );
  }

  render() {
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <CoverHeader activeTab={this.props.activeTab} />

        <main role="main" className="mt-auto inner cover font-weight-bold">
          <Row>
            <Col>
              <h1 className="cover-heading">We are getting married on</h1>
              <p className="lead">2nd December, 2018</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <CountDown
                date={new Date("Sat Dec 2 2018 11:00:00")}
                renderer={this.renderer}
              />
            </Col>
          </Row>
        </main>
      </div>
    );
  }
}

export default Home;
