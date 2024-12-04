import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const LoginModal = (props) => {
  return (
    <>
      <Modal show={props.showLogin} onHide={props.handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email Address
              </Form.Label>
              <Col sm="10">
                <Form.Control type="emailAddress" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={props.handleCloseLogin}>
            Submit (not set up yet)
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


