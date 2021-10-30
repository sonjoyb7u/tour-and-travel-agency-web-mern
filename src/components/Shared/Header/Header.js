import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo1 from './../../../images/logo/logo.png';
import Logo2 from './../../../images/logo/logo_2.png';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    // Scroll to add navbar background active css class ...
    const [navbarBg, setNavbarBg] = useState(false)
    const changeNavbarBackground = () => {
        // console.log(window.scrollY);
        if(window.scrollY >= 10) {
            setNavbarBg(true)
        }
        else {
            setNavbarBg(false)
        }
    }
    window.addEventListener('scroll', changeNavbarBackground)


    return (
        <header className={navbarBg ? 'header active' : 'header'}>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/">
                        <Image
                            src={Logo2}
                            width="140"
                            height="55"
                            className="d-inline-block align-top logo"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home" className="active">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about-us">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#booking">Booking</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                            <Nav.Link as={HashLink} to="/registration">Register</Nav.Link>
                            <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;