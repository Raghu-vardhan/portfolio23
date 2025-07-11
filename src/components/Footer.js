import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from '../assets/img/github.png';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h2 className="head-logo">R</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon margin">
              <a href="https://www.linkedin.com/in/raghu-vardhan14/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Raghu-vardhan" ><img src={github} alt="" /></a>
              <a href="mailto:rvraghu14@gmail.com"><img src={navIcon3}  alt="Icon" /></a>
            </div>
            <p>Email:rvraghu14gmail.com
              <br/>
              +91-9573904790, Hyderabad.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}