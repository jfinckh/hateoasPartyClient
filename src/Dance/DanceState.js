import React, { Component } from 'react';
import './Dance.css';
import Card from 'react-bootstrap/Card'

import dance from '../resources/dance.jpg';

class DanceState extends Component {
  render () {
    return(
      <Card style={{ width: '40rem', height: '42rem' }}>
        <Card.Img variant="top" src={dance} />
        <Card.Body>
          <Card.Title>Fun Time!</Card.Title>
          <Card.Text>
            Wer sich das Leben mit Architekturmustern wie REST leichter macht,
            hat noch genug Zeit über zum Tanzen.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default DanceState;
