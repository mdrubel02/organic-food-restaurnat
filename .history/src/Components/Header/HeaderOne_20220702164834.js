import React from 'react';
import './HeaderOne.css'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../Accets/restaurant logo.png'
import { Link } from 'react-router-dom';

const HeaderOne = () => {
    return (
        <Navbar className='one'>
            <Container fluid>
                <Link to='/'>
                    <img className='logo img' src={logo} alt="" />
                </Link>
                <Nav className="mx-auto">
                    <Nav.Link  as={Link} to="/">Home</Nav.Link>
                    <Nav.Link  as={Link} to="/shop">Shop</Nav.Link>
                    <Nav.Link  as={Link} to="/about">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default HeaderOne;