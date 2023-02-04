import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import UserSidebar from "./UserSidebar";

function ChangePassword() {
  return (
    <>
      <Container fluid className="px-3">
        <Row>
          <Col md={2} className="bg-light px-4 py-4">
            <UserSidebar />
          </Col>
          <Col md={10}>
            <h1 className="my-3 text-center">ChangePassword</h1>
            <Container className="px-5 my-4">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control type="password" placeholder="Old Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="New Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ChangePassword;
