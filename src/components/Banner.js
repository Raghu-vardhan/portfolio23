import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import rvimg from "../assets/img/rvimg.JPG";
import Raghu from "../assets/img/Raghu.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // ✅ Memoize the rotating text array
  const toRotate = useMemo(() => ["Shopify Developer"], []);

  // ✅ Memoized function to handle typing animation
  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Raghu `}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Shopify Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                   I'm a Shopify Developer with 1.5+ years of experience building responsive, user-friendly, and conversion-focused eCommerce stores. I enjoy combining logic and design—customizing themes, setting up campaigns, free gifts, checkout flows, and handling CRO changes. I work closely with marketing and design teams to deliver clean, high-performing Shopify experiences.
                  </p>
                  <span className="rs-btn">
                    <a
                      href={Raghu}
                      download={true}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download Resume
                    </a>
                  </span>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={rvimg} alt="Profile" style={{ borderRadius: '80%' }} />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
