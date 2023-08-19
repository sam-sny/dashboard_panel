import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardDetails from "../components/BoardDetails";

const BoardComp = () => {
    return( 
        <Container className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" fluid>
            <Row> 
              <Col className="col-2">  
            </Col>
            <Col className="col-9 mt-5 ms-5" style={{overflowWrap:"break-word"}} >  
            {/* Screen-View_Portal */}
             <BoardDetails />
             </Col>
            </Row>
        </Container>
    );
}

export default BoardComp;