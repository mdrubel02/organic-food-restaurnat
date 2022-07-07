import React from 'react';
import './HeaderOne.css'
import { Navbar,Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const HeaderOne = () => {
    return (
        <Navbar className='one'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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