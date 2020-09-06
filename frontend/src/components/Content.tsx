import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

interface Props {
  messages: {
    user: string,
    message: string,
    own: boolean,
  }[]
}

const Content: React.FC<Props> = ({messages}) => {
  console.log(messages)
  const msgs = messages.map((m, idx) => {
    return (
      <Row key={idx} className={`message ${m.own? 'own': 'others'}`}>
        <Col md={10} xs={10} className="w-msg">
          <p>{m.message}</p>
        </Col>
      </Row>
    )
  })

  return <Container id="content">
    {msgs}
  </Container>
}

export default Content