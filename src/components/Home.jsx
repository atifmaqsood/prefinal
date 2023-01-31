import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Products from './Products'
import Sidebar from './Sidebar'
import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <>
    
    <Container fluid>
      <Row>
        <Col style={{backgroundColor:"red"}} sm={3}><Sidebar/></Col>
        <Col sm={9}>

<Row>
  <Col className="py-3" sm={6}>
    <h2>Greate Products</h2>
  </Col>
  <Col sm={6} className="py-3"> <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select></Col>
</Row>

            <Products/>

            </Col>
      </Row>
      
    </Container>

    </>
  )
}

export default Home