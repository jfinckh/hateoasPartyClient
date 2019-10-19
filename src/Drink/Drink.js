import React, { Component } from 'react';
import './Drink.css';

import Button from 'react-bootstrap/Button'

class Drink extends Component {

  handleClick = () => {
    this.props.onComponentClicked(this.props.href);
  }

  render () {
    return(
      <Button variant="secondary" size="lg" onClick={this.handleClick} style={{width:'15rem', marginTop:'5px'}}>
        Trinken holen
      </Button>
    );
  }
}

export default Drink;
