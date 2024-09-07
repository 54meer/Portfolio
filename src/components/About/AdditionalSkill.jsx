import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftazure,
  SiVultr,
  SiFigma 
} from "react-icons/si";

const AdditionalSkill = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVultr />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
    </Row>
  );
}

export default AdditionalSkill;
