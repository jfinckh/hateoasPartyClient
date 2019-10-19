import React, { Component } from 'react';
import './LinksContainer.css';
import Drink from '../Drink/Drink.js'
import Food from '../Food/Food.js'
import Dance from '../Dance/Dance.js'
import Taxi from '../Taxi/Taxi.js'

import Card from 'react-bootstrap/Card'

class LinksContainer extends Component {
  render () {
    return(
      <Card style={{ width: '20rem', height: '42rem' }}>
        <Card.Body>
          <Card.Text>
            <br/>
            {
              this.props.links['getDrink'] !== undefined ?
                  <Drink onComponentClicked={this.props.sendGetRequest}
                         href={this.props.links['getDrink'].href}
                   />
               : null
            }
            {
              this.props.links['getFood'] !== undefined ?
                  <Food onComponentClicked={this.props.sendGetRequest}
                        href={this.props.links['getFood'].href}/>
              : null
            }
            {
              this.props.links['startDance'] !== undefined ?
                  <Dance onComponentClicked={this.props.sendGetRequest}
                        href={this.props.links['startDance'].href}/>
              : null
            }
            {
              this.props.links['getTaxi'] !== undefined ?
                  <Taxi onComponentClicked={this.props.sendGetRequest}
                        href={this.props.links['getTaxi'].href}/>
              : null
            }
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default LinksContainer;
