import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Menu</div>
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/immunizations">Immunizations</Nav.Link>
                <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;
