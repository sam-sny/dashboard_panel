import React from "react";
import "./SideNav.css";
import "react-bootstrap";
import { Link } from "react-router-dom";


const SideNav = () => {
    return(
        <div className="side-nav">
          <ul className="ul-side">
          <li className="li-side">
                <Link className="link-side" to="/DashboardComp"> Dashboard</Link>
               </li>
               <li className="li-side">
                <Link className="link-side" to="/BoardComp"> Lesson Plans</Link>
               </li> 
               <li className="li-side">
                <Link className="link-side" to="/BoardComp"> Analytics & Reporting</Link>
               </li> 
               <li className="li-side">
                <Link className="link-side" to="/BoardComp"> Packages</Link>
               </li> 
               <li className="li-side">
                <Link className="link-side" to="/BoardComp"> Academics</Link>
               </li> 
               <li className="li-side">
                <Link className="link-side" to="/BoardComp"> Tutor Area</Link>
               </li> 
               <li className="li-side">
                <Link className="link-side" to="/BoardComp"> Settings</Link>
               </li> 
          </ul>
        </div>
    );
}

export default SideNav;