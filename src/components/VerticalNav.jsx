import React from "react";
import "./VerticalNav.css";
import { Link } from "react-router-dom";
import nigenius from "../assets/nigenius.png";
import "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTabletAndroid, faBriefcase, faReceipt, faStore, faGraduationCap,
     faChalkboardTeacher, faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons';


const VerticalNav = () => {
    return( 
        <div className="box-position col-sm-6" style={{maxWidth:"20%", height:"80%"}}>
            <div className="content">
            <img className="image" src={nigenius} alt="" style={{width: "20px", height:"20px"}} />
            <hr className="image-border"/>
            <ul className="ul-ver">
                <li className="li-ver">
                <Link className="nav-line" style={{
    textDecoration: "none",
    fontSize: "8pt"}} to="/DashboardComp"><FontAwesomeIcon icon= {faTabletAndroid } className="item-margin"/> Dashboard</Link>
               </li>
               <li className="li-ver">
                <Link className="nav-line" style={{
    textDecoration: "none",
    fontSize: "8pt"}} to="/BoardComp"><FontAwesomeIcon icon= {faBriefcase } className="item-margin"/> Lesson Plans</Link>
               </li> 
               <li className="li-ver">
                <Link className="nav-line" style={{
    textDecoration: "none",
    fontSize: "8pt"}} to="/"><FontAwesomeIcon icon= { faReceipt } className="item-margin"/> Analytics & Reporting</Link>
               </li> 
               <li className="li-ver">
                <Link className="nav-line" style={{
    textDecoration: "none",
    fontSize: "8pt"}} to="/"><FontAwesomeIcon icon= { faStore } className="item-margin"/> Packages</Link>
               </li> 
               <li className="li-ver">
                <Link className="nav-line" style={{
    textDecoration: "none",
    fontSize: "8pt"}} to="/"><FontAwesomeIcon icon= { faGraduationCap } className="item-margin"/> Academics</Link>
               </li> 
               <li className="li-ver">
                <Link className="nav-line" style={{
    textDecoration: "none",
    fontSize: "8pt"}} to="/"><FontAwesomeIcon icon= { faChalkboardTeacher} className="item-margin"/> Tutor Area</Link>
               </li> 
               <li className="li-ver">
                <Link className="nav-line" style={{
    textDecoration: "none",
    fontSize: "8pt"}} to="/"><FontAwesomeIcon icon= { faMobileAndroidAlt} className="item-margin"/> Settings</Link>
               </li> 
            </ul>
            </div>
        </div>
    );
}

export default VerticalNav;