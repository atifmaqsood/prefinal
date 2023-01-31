import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from '../../src/images/f1.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


function SingleProduct() {
  return (
    <>

    <Card >
      <Card.Img variant="top"  src={myImage} />
      <Card.Body>
        <Card.Title>Pistacho</Card.Title>
        <Card.Text>
          Rs750
        </Card.Text>
        <Button variant="primary"><FontAwesomeIcon icon={faCartArrowDown} /> Add to cart</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default SingleProduct