import React, { Component } from 'react';
import './Taxi.css';

import Button from 'react-bootstrap/Button'

class Taxi extends Component {

  handleClick = () => {
    this.props.onComponentClicked(this.props.href);
  }

  render () {
    return(
      <Button variant="secondary" size="lg" onClick={this.handleClick} style={{width:'15rem', marginTop:'5px'}}>
        Taxi!
      </Button>
    );
  }
}

export default Taxi;
