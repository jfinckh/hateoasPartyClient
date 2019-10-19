import React, { Component } from 'react';
import './Food.css';
import Card from 'react-bootstrap/Card'

import food from '../resources/food.jpg';

class FoodState extends Component {
  render () {
    return(
      <Card style={{ width: '40rem', height: '42rem' }}>
        <Card.Img variant="top" src={food} />
        <Card.Body>
          <Card.Title>N Guten!</Card.Title>
          <Card.Text>
            Als "Tischgebet" denken wir nochmals an die REST-Constraints: <br/> <br/>
            <ul className="listClass">
              <li>
                Client-Server-Modell
              </li>
              <li>
                Zustandslosigkeit
              </li>
              <li>
                Caching
              </li>
              <li>
                Layered System
              </li>
              <li>
                Einheitliche Schnittstelle
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default FoodState;
