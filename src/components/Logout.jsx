import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSidebar from './UserSidebar'

function Logout() {
  return (
    <>
    
    
    <Container fluid className='px-3'>

       <Row>
        <Col  md={2} className="bg-light px-4 py-4">
          <UserSidebar/>
        </Col>
        <Col md={10}>
          
    <h1 className='my-3 text-center'>Logout</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ut?
        </Col>
       </Row>

    </Container>

    </>
  )
}

export default Logout