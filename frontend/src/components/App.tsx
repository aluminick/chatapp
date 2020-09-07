import React, {useState} from 'react';
import {Container} from 'react-bootstrap'
//import logo from './../logo.svg';
import './../App.scss';
import Content from './Content'
import Controls from './Controls'
import {messagesMock} from '../data-mock'

function App() {
  return (
    <div className="App">
      <Container id="container">
        <Content messages={messagesMock}/>
        <Controls />
      </Container>
    </div>
  );
}

export default App;
