import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from './AdminSidebar'

function AddProduct() {
  return (
    <>
    
    <Container fluid className="px-3">
        <Row>
          <Col md={2} className="bg-light px-4 py-4">
            <AdminSidebar/>
          </Col>
          <Col md={10}>
            
              <h1 className="my-3 text-center">Add Product</h1>
              
              <Container>

             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum fugit eligendi vitae impedit sapiente incidunt saepe exercitationem consequatur dolorem debitis suscipit dicta facere doloribus, optio beatae at? Facilis, expedita provident laborum cumque quaerat mollitia aut hic dolores dicta nam sit accusantium inventore adipisci dolorem dolor. Voluptate tempora illum ducimus impedit.</p>

              </Container>

               

            
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default AddProduct