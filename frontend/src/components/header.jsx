import {Navbar, Nav, Container, NavbarCollapse} from 'react-bootstrap';
import { FaCar, FaBuilding, FaCreativeCommonsBy, FaRegFaceGrinWink } from "react-icons/fa6";

import React from 'react'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">CheapRides</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navnar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="/Home"><FaBuilding/>Home</Nav.Link>
                        <Nav.Link href='/Ride'><FaCar/>Ride</Nav.Link>
                        <Nav.Link href="/Services"><FaCreativeCommonsBy/>Services</Nav.Link>
                        <Nav.Link href="/Reviews"><FaRegFaceGrinWink/>Reviews</Nav.Link>

                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </header>
  )
}
export default Header