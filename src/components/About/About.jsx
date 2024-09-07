import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

import './About.css';
import AdditionalSkill from "./AdditionalSkill";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", flexDirection: "row-reverse" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="primary">I'm</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="primary">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="primary">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          Additional <strong className="primary">Skills</strong>
        </h1>
        <AdditionalSkill/>
      </Container>
    </Container>
  );
}

export default About;
