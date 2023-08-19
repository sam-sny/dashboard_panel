import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import pic from "../assets/pic.jpg";
import "./DashboardDetails.css";

const DashboardDetails = () => {
    return (
    <Container className="" fluid>

        <Row className="mt-2">
        <Col>
          <Button className="" style={{backgroundColor:"#ffffff", fontSize:"8pt",
           color:"#28c390", height:"30px", border:"1px solid #28c390"}}>
          <FontAwesomeIcon icon={faCircleMinus}/> Go Back</Button>
        </Col>
        </Row>

        <Row className="mt-2">
        <Col>
         <div className="float-start mt-2"><b>Ekpo Sampson</b></div> <Button className="float-end" 
         style={{backgroundColor:"#28c390", fontSize:"8pt",
           color:"#ffffff", height:"30px", border:"none"}} >Deactivate Tutor</Button>
        </Col>
        </Row>


        <Row className="mt-2">
        <Col> 
        <Button className="active" style={{backgroundColor:"#ffffff", fontSize:"8pt",fontWeight:"lighter",
           color:"#28c390", height:"30px", borderBottom:"2px solid #28c390",
           borderRadius:"0px", borderTop:"none", borderLeft:"none",
           borderRight:"none"}}><b>Tutor Details</b></Button>

          <Button className="" style={{backgroundColor:"#ffffff", fontSize:"8pt",fontWeight:"lighter",
           color:"black", height:"30px", borderBottom:"1px solid #a4f5da",
           borderRadius:"0px", borderTop:"none", borderLeft:"none",
           borderRight:"none" }}><b>Activity Log</b></Button>
        </Col>
        </Row>

        <Row className="mt-4" >
        <Col>
        <div className="col-12 p-4" style={{maxWidth:"100%", backgroundColor:"#f5f6f6"}}>
        <div className="col-12 ms-3 mt-4" style={{ }}><b>Tutor Details</b></div>
        <div className="col-12 ms-3 mt-4" style={{fontSize:"10px"}}><b>PERSONAL BIO</b></div>
        <div className="col-11 ms-3 mt-1" style={{borderStyle:"1px solid grey", borderBottom:"1px solid grey", borderTop:"none", borderLeft:"none", borderRight:"none" }}></div>
        <img className="ms-3 mt-3" src={pic} alt="" style={{borderRadius:"50%", width:"100px", height:"100px"}}/>
        
        <div className="col-12 col-xs-12 parent-div mt-3 ms-3">

        <div className="col-2 col-xs-3 child-div">
        <span className="child-size">FIRST NAME</span>
        <br />
        <span className="next-child-size"> Oluyinka </span>
        </div>

        <div className="col-2 col-xs-3 child-div">
        <span className="child-size">LAST NAME</span>
        <br />
        <span className="next-child-size">Animashahun</span>
        </div>

        <div className="col-2 col-xs-3 child-div">
        <span className="child-size">PHONE NUMBER</span>
        <br />
        <span className="next-child-size">08162134657</span>
        </div>

        <div className="col-3 child-div">
         <span className="child-size">EMAIL ADDRESS</span>
         <br />
         <span className="next-child-size">annimashaun@gmail.com</span>
        </div>

        </div>

        <div className="col-12 parent-div mt-3 ms-3">
          <div className="col-2 child-div">
          <span className="child-size">GENDER</span>
          <br />
        <span className="next-child-size">Male</span>
        </div>

       <div className="col-2 child-div">
       <span className="child-size">COUNTRY</span>
        <br />
        <span className="next-child-size">Nigeria</span>
        </div>

       <div className="col-2 child-div">
       <span className="child-size">STATE</span>
        <br />
       <span className="next-child-size">Abuja</span>
       </div>

        <div className="col-2 child-div">
        <span className="child-size">CITY</span>
        <br />
         <span className="next-child-size">YanYan</span>
        </div>

       <div className="col-2 child-div">
       <span className="child-size">DATE ADDED</span>
       <br />
       <span className="next-child-size">Nov 3 2022</span>
       </div>
       </div>

        <div className="col-12 ms-3 mt-4" style={{fontSize:"10px"}}><b>TUTOR DETAILS</b></div>
        <div className="col-11 ms-3 mt-1" style={{borderStyle:"1px solid grey", borderBottom:"1px solid grey", borderTop:"none", borderLeft:"none", borderRight:"none" }}></div>
         
        <div className="col-12 parent-div mt-3 ms-3">
          <div className="col-3 child-div">
          <span className="child-size">SUBJECT</span>
          <br />
        <span className="next-child-size">Basic Technology, Futher-Mathematics, Mathematics, Physics</span>
        </div>

       <div className="col-2 child-div">
       <span className="child-size">CLASS</span>
        <br />
        <span className="next-child-size">SS 1, SS 2, SS 3</span>
        </div>

       <div className="col-3 child-div">
       <span className="child-size">EXAMS</span>
        <br />
       <span className="next-child-size">JAMB, JSSCE  WAEC, SAT, SSCE WAEC.</span>
       </div>

        <div className="col-3 child-div">
        <span className="child-size">EXPECTATIONS</span>
        <br />
         <span className="next-child-size">I wish to impact the learners assigned 
         to me using my knowledge adn experience</span>
        </div>
       </div>

        <div className="col-12 ms-3 mt-4" style={{fontSize:"10px"}}><b>OTHER DETAILS</b></div>
        <div className="col-11 ms-3 mt-1" style={{borderStyle:"1px solid grey", borderBottom:"1px solid grey", borderTop:"none", borderLeft:"none", borderRight:"none" }}></div>
        <div className="col-12 parent-div mt-3 ms-3">
          <div className="col-2 child-div">
          <span className="child-size">Facebook URL</span>
          <br />
        <span className="next-child-size">@Uwuoniobi_onome</span>
        </div>

       <div className="col-2 child-div">
       <span className="child-size">Instagram_Url</span>
        <br />
        <span className="next-child-size">@Uwuoniobi_onome</span>
        </div>

       <div className="col-1 child-div">
       <span className="child-size">Presently Employed</span>
        <br />
       <span className="next-child-size">yes</span>
       </div>

        <div className="col-2 child-div">
        <span className="child-size">Teaching Experience</span>
        <br />
         <span className="next-child-size">10 years and Above</span>
        </div>

        <div className="col-2 child-div">
        <span className="child-size">Home tutoring Experience</span>
        <br />
         <span className="next-child-size">yes</span>
        </div>

        <div className="col-2 child-div">
        <span className="child-size">Poccess Computer</span>
        <br />
         <span className="next-child-size">yes</span>
        </div>

</div>
        <div className="col-12 ms-3 mt-4" style={{fontSize:"10px"}}><b>REFEREE DETAILS</b></div>
        <div className="col-11 ms-3 mt-1" style={{borderStyle:"1px solid grey", borderBottom:"1px solid grey", borderTop:"none", borderLeft:"none", borderRight:"none" }}></div>
        <div className="col-12 parent-div mt-3 ms-3">
          <div className="col-3 child-div">
          <span className="child-size">Name</span>
          <br />
        <span className="next-child-size">Abdulareem Akeem</span>
        </div>

       <div className="col-3 child-div">
       <span className="child-size">Phone Number</span>
        <br />
        <span className="next-child-size">08012456780</span>
        </div>

       <div className="col-3 child-div">
       <span className="child-size">Email Address</span>
        <br />
       <span className="next-child-size">rasheed9503@yahoo.co.uk</span>
       </div>
       </div>
       <div className="col-12 parent-div mt-3 ms-3">
          <div className="col-3 child-div">
          <span className="child-size">Name</span>
          <br />
        <span className="next-child-size">Adewunmi oloubode</span>
        </div>

       <div className="col-3 child-div">
       <span className="child-size">Phone Number</span>
        <br />
        <span className="next-child-size">08011234670</span>
        </div>

       <div className="col-3 child-div">
       <span className="child-size">Email Address</span>
        <br />
       <span className="next-child-size">deyemi9503@yahoo.co.uk</span>
       </div>
       </div>



        </div>
        </Col>
        </Row>




        <Row className="mt-2">
        <Col> 
        
        </Col>
        </Row>
        
    </Container>
    );
}

export default DashboardDetails;