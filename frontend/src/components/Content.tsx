import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

interface Props {
  messages: {
    id: number,
    user: string,
    message: string,
    own: boolean,
  }[]
}

const Sender: React.FC<{user: string}> = ({user}) => {
  return (
    <Col md={10} xs={10} className="w-sender">
      <span>{user}</span>
    </Col>
  )
}

const Message: React.FC<{message: string}> = ({message}) => {
  return (
    <Col md={10} xs={10} className="w-msg">
      <p>{message}</p>
    </Col>
  )
}

const Content: React.FC<Props> = ({messages}) => {

  let currentUserID = 0

  const msgs = messages.map((m, idx) => {
    
    const msgNodes = (
      <Row key={idx} className={`message ${m.own? 'own': 'others'}`}>
        {currentUserID !== m.id? <Sender user={m.user}/>: null}
        <Message message={m.message}/>
      </Row>
    )
    if (currentUserID !== m.id) {
      currentUserID = m.id
    }
    return msgNodes
  })

  return <Container id="content">
    {msgs}
  </Container>
}

export default Content