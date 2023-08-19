import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./NavDropdown.css";


const Navdropdown = () => {

    return (
          <NavDropdown title="Kelechi Udenna" style={{backgroundColor:"white", borderRadius:"20px",
           height: "30px", border: "1px solid blue",fontSize: "8pt"}} id="nav-dropdown">
            <NavDropdown.Item style={{backgroundColor:"white", borderRadius:"20px",fontSize: "8pt" }} className="my_navbar">Objectives</NavDropdown.Item>
            <NavDropdown.Item style={{backgroundColor:"white", borderRadius:"20px", fontSize: "8pt"}} className="my_navbar">Experience</NavDropdown.Item>
          </NavDropdown>
    );
}

export default Navdropdown;