import React, { Component } from 'react';
import './StateContainer.css';

import DanceState from '../Dance/DanceState.js'
import DrinkState from '../Drink/DrinkState.js'
import FoodState from '../Food/FoodState.js'
import LobbyState from '../Lobby/LobbyState.js'
import TaxiState from '../Taxi/TaxiState.js'

class StateContainer extends Component {
  render () {
    return(
      <div>
          {
            this.props.currentState === "DRINK" ?
                <DrinkState/>
             : null
          }
          { this.props.currentState === "TAXI" ?
                <TaxiState/>
             : null
          }
          { this.props.currentState === "FOOD" ?
                <FoodState/>
             : null
          }
          { this.props.currentState === "DANCE" ?
                <DanceState/>
             : null
          }
          { this.props.currentState === "LOBBY" ?
                <LobbyState/>
             : null
          }
      </div>
    );
  }
}

export default StateContainer;
