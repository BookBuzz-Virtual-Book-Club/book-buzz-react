import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const ChatBox = (props) => {
  return (
    <Container fluid>
      <Row className="justify-content-left">
        <Col xs={12} sm={10} md={8} lg={6} xl={3}>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Welcome to BookBuzz</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Want a quick book summary? Just type the title and author, and the BookBuzzBot will provide an overview! Let's get started!"
                  />
                </Form.Group>
              </Form>
              <Button variant="outline-warning" onClick={props.handleCloseLogin}>
                Submit (not set up yet)
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
