import React, { Component } from 'react';
import CoverHeader from './CoverHeader';
import { Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import grewalFarmImg from './media/grewalFarm.png';
import grewalLocation from './media/grewalFarmLocation.png';

class Shagun extends Component {

  render() {
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column no-background-image">
        <CoverHeader activeTab={this.props.activeTab} />

        <main role="main" className="cover font-weight-bold">
          <Row className="white-opacity-row rounded">
            <Col md={3}>
              <Image className="grewal-farm-image" src={grewalFarmImg} thumbnail />
            </Col>
            <Col md={6} className='text-danger mt-auto mb-auto'>
              <h1>Grewal Farms</h1>
              <p className='text-light'>The Shagun ceremony will commense at 11:00 AM on 1<sup>st</sup> December, 2018. Follow the link to navigate to the location</p>
            </Col>
            <Col md={3} className='mt-auto mb-auto'>
              <a href="https://www.google.co.in/maps/place/Grewal+Farms/@31.6687075,74.9067036,15z/data=!4m5!3m4!1s0x0:0xf6795e98acbd7ee7!8m2!3d31.6687075!4d74.9067036">
                <Image className="grewal-farm-image" src={grewalLocation} thumbnail />
              </a>
            </Col>
          </Row>
        </main>
      </div>
    );
  }
}

export default Shagun;
