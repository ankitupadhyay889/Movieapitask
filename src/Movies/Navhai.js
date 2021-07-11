import React from 'react';
import {Navbar , Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navhai = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavLink className="navbar-brand" to="/">Ankit Upadhyay</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/watch">Watchlist</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default Navhai;