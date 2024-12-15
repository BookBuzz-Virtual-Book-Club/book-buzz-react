import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const ChatBox = (props) => {
  return (
    <>
    < br/>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Welcome to BookBuzz</Card.Title>
          <Form>
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Want a quick book summary? Just type the title and author, and the BookBuzzBot will provide an overview! Let's get started!" />
      </Form.Group>
          </Form>
          <Button variant="outline-warning" onClick={props.handleCloseLogin}>
          Submit (not set up yet)</Button>
        </Card.Body>
      </Card>
    </>
  );
};


