import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

export const RegisterModal = (props) => {
  return (
    <Modal show={props.showRegister} onHide={props.handleCloseRegister}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="John" defaultValue="First" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Smith" defaultValue="Last" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
            <Form.Label>Email Address</Form.Label>
            <InputGroup hasValidation>
              <Form.Control type="text" placeholder="jsmith@example.com" aria-describedby="inputGroupPrepend" required />
              <Form.Control.Feedback type="invalid">Please input an email address.</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom05">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="p@ssWord" required />
            <Form.Control.Feedback type="invalid">Please set a password.</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button onClick={props.handleCloseRegister} type="submit" variant="outline-warning">
          Create Account
        </Button>
      </Modal.Body>
    </Modal>
  );
};