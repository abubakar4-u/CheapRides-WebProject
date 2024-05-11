import {Navbar, Nav, Container, NavbarCollapse} from 'react-bootstrap';
import { FaCar, FaBuilding, FaCreativeCommonsBy, FaRegFaceGrinWink } from "react-icons/fa6";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Cheap<span>Rides</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navnar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="/Home"><FaBuilding/>Home</Nav.Link>
                        <Nav.Link href='/Ride'><FaCar/>Ride</Nav.Link>
                        <Nav.Link href="/Services"><FaCreativeCommonsBy/>Services</Nav.Link>
                        <Nav.Link href="/Reviews"><FaRegFaceGrinWink/>Reviews</Nav.Link>
                        <Link to="/login"><Button variant="outline-primary">Login</Button></Link>{' '}
                        <Link to="/login"><Button variant="outline-success">SignUp</Button></Link>{' '}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>  
    </header>
  )
}
export default Header