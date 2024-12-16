import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import books from ".//images/books.webp";
import Image from "react-bootstrap/Image";

export function IndexBookClubs() {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title
                style={{
                  width: "98rem",
                  display: "block",
                  margin: "0 auto",
                }}
              >
                Card title (will use props to populate from db)
              </Card.Title>
              <Row className="align-items-center">
                <Col xs={4} md={3}>
                  <Image
                    src={books}
                    style={{
                      width: "3rem",
                      display: "block",
                      margin: "0 auto",
                    }}
                    roundedCircle
                  />
                </Col>
                <Col xs={8} md={9}>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
