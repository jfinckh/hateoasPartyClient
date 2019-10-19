import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HeadingBar from './HeadingBar'
import LinksContainer from './LinksContainer/LinksContainer.js'
import StateContainer from './StateContainer/StateContainer.js'
import axios from "axios";

class App extends Component {

  pageuri = "http://localhost:8080/lobby";
  // default State object
  state = {
    links: [],
    state: ""
  };

  /**
  * Run when component got mounted.
  */
  componentDidMount() {
    this.sendGetRequest(this.pageuri);
  }

 /**
 * Sends a get-request to the link in the parameter and saves the response
 * in the state-object.
 */
  sendGetRequest = (href) => {
    axios
      .get(href)
      .then(response => {
        const newState = Object.assign({}, this.state, {
          links: response.data._links,
          state: response.data.state
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <HeadingBar sendGetRequest={this.sendGetRequest}
                    pageuri={this.pageuri}/>
        <Container>
          <Row>
            <Col>
              <StateContainer
                currentState={this.state.state}
                /></Col>
            <Col>
              <LinksContainer
                  sendGetRequest={this.sendGetRequest}
                  links={this.state.links}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
