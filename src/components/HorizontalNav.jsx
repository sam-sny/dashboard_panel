import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Navdropdown from "./NavDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import "./HorizontalNav.css";

const HorizontalNav = () => {
    return( 
        <Navbar style={{height:"40px", width:"100%", backgroundColor:"#ffffff",
         position: "fixed", borderBottom:"2px solid #f5f6f6"}} color="bg-blue" collapse="sm">
        <Nav className="ms-auto m-3">
        <Nav.Link as={Link} style={{color:"white", fontsize:"10px"}} to="/dklkak"><FontAwesomeIcon className="mt-2" icon={faBell} style={{color: "black"}} /></Nav.Link>
        <Nav.Item>
        <Nav.Link as={Link} to="/dfgg">
        <Navdropdown />
        </Nav.Link>
        </Nav.Item>
        </Nav>
        </Navbar>
    
    );
}

export default HorizontalNav;