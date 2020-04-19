import React from 'react';

import { Nav, Navbar } from 'react-bootstrap'


export const NavBar = () => (
    
    <Navbar  variant="dark" expand="lg" className="navbar">
            <Navbar.Brand href="/">Chris Cohen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/seen">Seen</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/unseen">Unseen</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/audio">Audio</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
)