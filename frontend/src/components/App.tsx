import React from 'react';
import {Container} from 'react-bootstrap'
//import logo from './../logo.svg';
import './../App.scss';
import Content from './Content'
import Controls from './Controls'

const messagesMock = [
  {
    "user": "user1",
    "message": "hello world",
    "own": true,
  },
  {
    "user": "user2",
    "message": "hello world",
    "own": false,
  },
  {
    "user": "user3",
    "message": "hello world",
    "own": true,
  },
  {
    "user": "user4",
    "message": "hello world",
    "own": false,
  },
  {
    "user": "user5",
    "message": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quisquam aliquam optio odit vitae dolorum quidem corrupti voluptates illo, asperiores accusamus facere tempora! Accusantium, odio omnis dignissimos eaque accusamus quidem.",
    "own": false,
  },
  {
    "user": "user6",
    "message": "hello world",
    "own": true,
  },
  {
    "user": "user5",
    "message": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quisquam aliquam optio odit vitae dolorum quidem corrupti voluptates illo, asperiores accusamus facere tempora! Accusantium, odio omnis dignissimos eaque accusamus quidem.",
    "own": true,
  },
  {
    "user": "user6",
    "message": "hello world",
    "own": true,
  },
  {
    "user": "user6",
    "message": "asdfsadfasdjfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsadfasdf",
    "own": false,
  },
]

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
