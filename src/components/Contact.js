import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form action="https://api.web3forms.com/submit"  method="POST">
                   
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input type="hidden" name="access_key" value="163c8bf4-57e7-4f90-9da3-8d0af9ad1f28"></input>
                      <input type="text" name='First Name' placeholder="First Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  name='Last Name' placeholder="Last Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='email' placeholder="Email Address" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name='Phnoe No' placeholder="Phone No." required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name='Message' placeholder="Message"   required></textarea>
                      <button type="submit"><span>submit</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}