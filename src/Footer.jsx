import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import logo from './/images/bookBuzzLogo.png'; 

const linkStyle = {
  color: 'black', 
  textDecoration: 'none'
}
export function Footer() {

  return(
    <footer>
      <Container fluid>
        <Row className='bg-warning text-black p-4'>
          <Col>
            <Stack>
              <Image
                src={logo}
                alt='BookBuzz Logo'
                rounded
                width={80}
                height={80} 
              />
              <p>© 2024</p>
            </Stack>
          </Col>
          <Col>
            <h4>Genres <br/></h4>
            <a href='#fuction' style={linkStyle}>Fiction</a><br/>
            <a href='#scienceFiction' style={linkStyle}>Science Fiction</a><br/>
            <a href='#Romance' style={linkStyle}>Romance</a><br/>
            <a href='#Memior' style={linkStyle}>Memior & Autobiography</a><br/>
            <a href='#Mystery' style={linkStyle}>Mystery</a><br/>
            <a href='#YA' style={linkStyle}>YA</a><br/>
            <a href='#genreList' style={{ color: 'black' }}>See full list</a><br/>
          </Col>
          <Col>
           <h4> Get to know us!</h4> 
            <a href='#about' style={linkStyle}>About Us</a><br/>
            <a href='#blog' style={linkStyle}>Blog</a><br/>
            <a href='#communityGuidelines' style={linkStyle}>Community Guidelines</a><br/>
            <a href='#resources' style={linkStyle}>Resources Library</a><br/>
            <a href='#support' style={linkStyle}>Support</a><br/>
            <a href='#contactUs' style={linkStyle}>Contact Us</a><br/>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}