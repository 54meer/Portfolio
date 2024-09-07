import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary">Sameer Sayed </span>
            from <span className="primary"> Mumbai, India.</span>
            <br />
            I am currently employed as a software engineer at Objectide.
            <br />
            I have completed Bachelor's.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />  Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />  Reading
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
