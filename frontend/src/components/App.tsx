import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
//import logo from './../logo.svg';
import './../App.css';

function App() {
  return (
    <div className="App">
      <Container id="container">
        <Container id="content"> {/*content*/}
          <Row>
              <Col>Left if others</Col>
          </Row>
          <Row>
            <Col>Right if mine</Col>
          </Row>
          <Row>
              <Col>Left if others</Col>
          </Row>
          <Row>
            <Col>Right if mine</Col>
          </Row>
          <Row>
              <Col>Left if others</Col>
          </Row>
          <Row>
            <Col>Right if mine</Col>
          </Row>
          <Row>
              <Col>Left if others</Col>
          </Row>
          <Row>
            <Col>Right if mine</Col>
          </Row>
          <Row>
              <Col>Left if others</Col>
          </Row>
          <Row>
            <Col>Right if mine</Col>
          </Row>
          <Row>
              <Col>Left if others</Col>
          </Row>
          <Row>
            <Col>Right if mine</Col>
          </Row>
        </Container>
        <Container id="controls"> {/*actions*/}
          <Row> 
            <Col>Textbox</Col>
            <Col>Send Button</Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
