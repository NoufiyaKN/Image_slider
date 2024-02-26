import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Navbar() {
  return (
    <>
    <Navbar className="navbar bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Explore World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Places</Nav.Link>
            <Nav.Link href="#link">Culture</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbar