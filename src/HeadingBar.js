import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'

import logo from './resources/logo.png';

class HeadingBar extends Component {

  handleBrandClick = () => {
    this.props.sendGetRequest(this.props.pageuri);
  }

  render () {
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={this.handleBrandClick}>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Pentasys-Party
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default HeadingBar;
