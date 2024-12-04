import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import logo from './/images/bookBuzzLogo.png'
import { Nav } from 'react-bootstrap'

export function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
            <img
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="Book Buzz Logo"
            />     
          <Navbar.Brand href="#home"></Navbar.Brand>

            <Nav className='me-auto'>
              <Nav.Link href="#createBookClub">Create a Book Club</Nav.Link>
              <Nav.Link href="#myBooks">My Books</Nav.Link>
              <Nav.Link href="#community">Community</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Nav.Link href="#contactUs">Contact Us</Nav.Link>

            </Nav>
            
        </Container>
      </Navbar>
    </>
  )
}