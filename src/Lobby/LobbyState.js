import React, { Component } from 'react';
import './Lobby.css';
import Card from 'react-bootstrap/Card'

import entrance from '../resources/entrance.jpg';

class LobbyState extends Component {
  render () {
    return(
      <Card style={{ width: '40rem', height: '42rem' }}>
        <Card.Img variant="top" src={entrance} />
        <Card.Body>
          <Card.Title>Eingang</Card.Title>
          <Card.Text>
            <b>Merke:</b>
            <br/>
            Man benötigt nur die initiale URL der REST-API,
            in diesem Fall: "<u>http://localhost:8080/lobby</u>".
            Mit den Links aus der Antwort kann man sich durch die API navigieren.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default LobbyState;
