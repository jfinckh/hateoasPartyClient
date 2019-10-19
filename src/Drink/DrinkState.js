import React, { Component } from 'react';
import './Drink.css';
import Card from 'react-bootstrap/Card'

import beer from '../resources/beer.jpg';

class DrinkState extends Component {
  render () {
    return(
      <Card style={{ width: '40rem', height: '42rem' }}>
        <Card.Img variant="top" src={beer} />
        <Card.Body>
          <Card.Title>Prost!</Card.Title>
          <Card.Text>
            Auf Roy T. Fieldling, der in seiner Dissertation im Jahre 2000 REST beschrieben hat
            und deshalb als "Kopf hinter REST" gilt.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default DrinkState;
