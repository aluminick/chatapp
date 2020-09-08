import React, {useState} from 'react';
import {Container} from 'react-bootstrap'
//import logo from './../logo.svg';
import './../App.scss';
import Content from './Content'
import Controls from './Controls'
import UserSet from './UserSet'
import {messagesMock} from '../data-mock'

function App() {
  const [username, setUsername] = useState('')
  
  return (
    <div className="App">
      <Container id="container">
        {username?
            <>
              <Content messages={messagesMock}/>
              <Controls />
            </>
          :<UserSet setUsername={setUsername}/>}
      </Container>
    </div>
  );
}

export default App;
