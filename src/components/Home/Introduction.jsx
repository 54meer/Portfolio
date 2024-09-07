import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Introduction = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="primary"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I  am deeply skilled in
              <i>
                <b className="primary"> JavaScript & PHP. </b>
              </i>
              <br />
              <br />
              My passion? It's building new&nbsp;
              <i>
                <b className="primary">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="primary">
                  AI.
                </b>
              </i>
              <br />
              <br />
              When I'm not dabbling in databases like MongoDB or wielding Docker containers like a wizard's spellbook, you’ll find me happily wrangling complex logic with 
               <b className="primary"> Node.js</b> and
              <i>
                <b className="primary">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="primary"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="primary">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/54meer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sameer-sayed-a98549203"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;
