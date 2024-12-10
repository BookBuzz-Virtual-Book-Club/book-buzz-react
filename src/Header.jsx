import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import logo from './/images/bookBuzzLogo.png'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { LoginModal } from './LoginModal'
import { RegisterModal } from './RegisterModal'

export function Header() {
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

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

            <Nav className="justify-content-end">
              <Nav.Link href="#createBookClub">Create a Book Club</Nav.Link>
              <Nav.Link href="#myBooks">My Books</Nav.Link>
              <Nav.Link href="#community">Community</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Nav.Link href="#contactUs">Contact Us</Nav.Link>
              <Button variant='warning' onClick={handleShowLogin}>
                Login
              </Button>
              <Button variant='outline-warning' onClick={handleShowRegister}>
                Register
              </Button>
            </Nav>
        </Container>
      </Navbar>

      <LoginModal showLogin={showLogin} handleCloseLogin={handleCloseLogin} />
      <RegisterModal showRegister={showRegister} handleCloseRegister={handleCloseRegister} />
    </>
  )
}