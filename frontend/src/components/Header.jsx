import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import "../styles/Header.css";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/login/');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
            <Navbar.Brand className="navbar-brand" href="/">MyApp</Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                    <NavDropdown title={<span><FaUser className="mr-1" />Profile</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile"><FaUser className="mr-1" />My Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/settings"><FaCog className="mr-1" />Settings</NavDropdown.Item>
                    </NavDropdown>
                    <Button className="btn-outline-light" variant="outline-light" onClick={handleLogout}><FaSignOutAlt className="mr-1" />Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
