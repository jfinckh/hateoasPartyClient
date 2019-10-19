import React, { Component } from 'react';
import './Taxi.css';
import Card from 'react-bootstrap/Card'

import taxi from '../resources/taxi.jpg';

class TaxiState extends Component {
  render () {
    return(
      <Card style={{ width: '40rem', height: '42rem' }}>
        <Card.Img variant="top" src={taxi} />
        <Card.Body>
          <Card.Title>Müde?</Card.Title>
          <Card.Text>
            Zum Abschluss, lasst uns nocheinmal einen Blick auf die Vorteile werfen,
            die wir durch die Verwendung von REST inklusive HATEOAS gewonnen haben.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TaxiState;
