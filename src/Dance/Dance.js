import React, { Component } from 'react';
import './Dance.css';

import Button from 'react-bootstrap/Button'

class Dance extends Component {

  handleClick = () => {
    this.props.onComponentClicked(this.props.href);
  }

  render () {
    return(
      <Button variant="secondary" size="lg" onClick={this.handleClick} style={{width:'15rem', marginTop:'5px'}}>
        Lets Dance!
      </Button>
    );
  }
}

export default Dance;
