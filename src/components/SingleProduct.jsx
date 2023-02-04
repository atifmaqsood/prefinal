import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import myImage from "../../src/images/f1.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ButtonGroup } from "react-bootstrap";

function SingleProduct() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={myImage} />
        <Card.Body>
          <Card.Title>Pistacho</Card.Title>
          <Card.Text>Rs750</Card.Text>
          <ButtonGroup>
            <Button variant="primary" className="mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
              <FontAwesomeIcon icon={faCartArrowDown} /> 
            </Button>
            <Button variant="primary" className="mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleProduct;
