import React from 'react';
import './HeaderOne.css'
import Container from 'react-bootstrap/Container';
import { Navbar,Nav } from 'react-bootstrap';
import logo from '../../Accets/restaurant logo.png'

const HeaderOne = () => {
    return (
        <Navbar className='one'>
            <Container>
          <Navbar.Brand href="#home">
            <img className='logo img' src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
      </Navbar>
    );
};

export default HeaderOne;