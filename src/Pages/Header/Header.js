import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logono.svg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)

    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/about">About US</Nav.Link>
                        <NavDropdown color="white" title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item as={HashLink} to="/shop">Shop</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#team">Our Team</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#clients">Our Clients</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={HashLink} to="/home#contact">Contact US</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} className="text-white" to="/register">Register</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} className="mx-5" variant="light">Logout</Button> :
                            <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <img style={{ height: "30px", width: "30px", borderRadius: "50%", backgroundColor: "black" }} src={user?.photoURL} alt="" />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};


export default Header;
















