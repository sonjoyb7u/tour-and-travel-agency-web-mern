import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Header.css';
import Logo1 from './../../../images/logo/logo.png';
import Logo2 from './../../../images/logo/logo_2.png';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const {signOutUsingGoogle, user, setUser, setSuccessMsg, successMsg, setErrorMsg, errorMsg, setIsLoading} = useAuth()
    // Scroll to add navbar background active css class ...
    const [navbarBg, setNavbarBg] = useState(false)
    const changeNavbarBackground = () => {
        // console.log(window.scrollY);
        if(window.scrollY >= 60) {
            setNavbarBg(true)
        }
        else {
            setNavbarBg(false)
        }
    }
    window.addEventListener('scroll', changeNavbarBackground)


    const location = useLocation()
    // console.log(location.state?.from);
    // const redirect_url = location.state?.from || '/home'; 
    const history = useHistory()
    const redirect_url = '/';

    const handleLogoutProcess = (e) => {
        e.preventDefault();
        signOutUsingGoogle()
        .then(() => {
            setUser({})
            setErrorMsg('')
            setSuccessMsg('')
            // setSuccessMsg('You are successfully logged out...')
            alert('You are successfully logged out...')
            history.push(redirect_url)
        })
        .finally(() => {
            setIsLoading(false)
        })
        .catch((error) => {
            setSuccessMsg('')
            setErrorMsg("Something wrong with user logout!")
        })

    }


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
                            <Nav.Link as={HashLink} to="/home#tour-package">Tour Package</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact Us</Nav.Link>
                            {
                                user?.email 
                                ?
                                <>
                                    <Navbar.Toggle aria-controls="navbar-example" />
                                    <Navbar.Collapse id="navbar-example">
                                    <Nav>
                                        <NavDropdown
                                        id="nav-dropdown-example"
                                        title={
                                                user?.photoURL ?
                                                <Image style={{ width: "35px", height: "35px", borderRadius: '25px' }} src={user?.photoURL}></Image>
                                                : 
                                                user?.displayName
                                            }
                                        
                                        menuVariant="light"
                                        >
                                        <NavDropdown.Item as={HashLink} to="/user-profile"><FontAwesomeIcon icon={faUser} /> &nbsp;Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={HashLink} to="/dashboard"><FontAwesomeIcon icon={faUser} /> &nbsp;Dashboard</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleLogoutProcess}><FontAwesomeIcon icon={faSignOutAlt} /> &nbsp;Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    </Navbar.Collapse>
                                </> 
                                :
                                <Nav.Link as={HashLink} to="/login"><FontAwesomeIcon icon={faSignInAlt} />&nbsp;Login</Nav.Link>
                            }
                            
                            {
                                !user?.email 
                                ? 
                                <Nav.Link as={HashLink} to="/registration">Register</Nav.Link>
                                : 
                                ""
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;