import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimForm";
import logo from "../assets/img/logo1.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Facebook" />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Twitter" />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="LinkedIn" />
              </a>
            </div>
            <p>© 2025. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
