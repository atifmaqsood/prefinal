import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Food Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
          
          <Button as={Link} to="/cart" className='btn btn-info btn-lg'><FontAwesomeIcon icon={faCartArrowDown} /></Button>
          <Button as={Link} to="/login" className='btn btn-success mx-3 btn-lg'>Login</Button>
        
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}




export default Header