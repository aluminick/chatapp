import React, {useRef, useState} from 'react'
import {Container, Col, Row, Jumbotron,
  Button, InputGroup, FormControl, Alert,
} from 'react-bootstrap'

const UserSet: React.FC<{setUsername: Function}> = ({setUsername}) => {
  const usernameEl = useRef<HTMLInputElement>(null)
  const [showerr, setShowErr] = useState(false)
  return (
    <Container>
      <Col>
        <Row>
        <Jumbotron>
          <h1>chatapp!</h1>
          <p>
          https://allanime.site/anime/L3zwkb2DcKc933nLp/Appare_Ranman_/episodes/sub/1
            <em>Note: Refreshing the page will bring you back here and deletes all your previous messages from your view.</em>
          </p>

          <InputGroup size="lg" className="mb-3">
            <FormControl
              placeholder="Username"
              aria-label="Username"
              maxLength={10}
              ref={usernameEl}
            />
          </InputGroup>
          {
            showerr? (
              <Alert variant="danger" onClose={() => setShowErr(false)} dismissible>
                <p>Opps! Invalid username</p>
              </Alert>
            ): null
          }
          <Button size="lg" variant="primary" onClick={() => {
            let username = (usernameEl.current && usernameEl.current.value) || ''
            if (username.trim()) {
              setShowErr(false)
              setUsername(username.trim())
            } else {
              setShowErr(true)
            }
          }}>Enter</Button>
        </Jumbotron>
        </Row>
      </Col>
    </Container>
  )
}

export default UserSet