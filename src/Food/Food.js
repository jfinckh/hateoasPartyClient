import React, { Component } from 'react';
import './Food.css';

import Button from 'react-bootstrap/Button'

class Food extends Component {

  handleClick = () => {
    this.props.onComponentClicked(this.props.href);
  }

  render () {
    return(
      <Button variant="secondary" size="lg" onClick={this.handleClick} style={{width:'15rem', marginTop:'5px'}}>
        Essen holen
      </Button>
    );
  }
}

export default Food;
