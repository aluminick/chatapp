import React from 'react';
import {Container, Row, Col,
  InputGroup, FormControl, Button} from 'react-bootstrap'

const Controls: React.FC<{}> = () => {
  return <Container id="controls">
  <Row> 
    <Col md={10} xs={8}>
      <InputGroup>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
    </Col>
    <Col md={2} xs={4} id="w-btn-send">
      <Button size="lg" id="btn-send">Send</Button>
    </Col>
  </Row>
</Container>
}

export default Controls