import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bhavaearth from "../assets/img/bhavaearth.png";
import fitclub from "../assets/img/fitclub.jpg";
import ecomm from "../assets/img/ecomm.JPG";
import blogs from "../assets/img/blogs.JPG";
import holoman from "../assets/img/holoman.png";
import rithyam from "../assets/img/rithyam.png";
import lumora from "../assets/img/lumora.png";
import libuna from "../assets/img/libuna.png";
import kyndskin from "../assets/img/kyndskin.png";
import mingo from "../assets/img/mingo.png";
import gonutriline from "../assets/img/gonutriline.png";
import colorsharp2 from "../assets/img/color-sharp2.png";
import cals from "../assets/img/cals.JPG";
import clock from  "../assets/img/clock.JPG"
import game from "../assets/img/game.JPG";
import colorgenrate from "../assets/img/color-genrate.JPG";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BhavaEarth",
      description: "BhavaEarth Offers healthy, organic, and natural products for your daily needs.",
      imgUrl: bhavaearth,
      demo:'https://www.bhavaearth.com/',
    },
     {
      title: "Holoman",
      description: "Holoman clothing brand offers a wide range of stylish and comfortable clothing options",
      imgUrl: holoman,
      demo:'https://www.holoman.in/',
    },
    {
      title: "Rithyam",
      description: "Rithyam jewellery brand offers classic gold and diamond jewellery",
      imgUrl: rithyam,
      demo:'https://www.rityamjewels.com/',
    },
     {
      title: "Lumora",
      description: "Lumora is a soluation for all your beauty needs",
      imgUrl: lumora,
      demo:'https://lumoracare.com/',
    },
    {
      title: "Libunahygiene",
      description: "libunahygiene is a hygiene brnad  offering period pads and other hygiene products",
      imgUrl: libuna,
      demo:'https://libunahygiene.com/',
    },
    {
      title: "Gonutriline",
      description: "gonutriline is a nutrition brand offering health supplements with suplement medicine",
      imgUrl: gonutriline,
      demo:'https://libunahygiene.com/',
    },
     {
      title: "Mingo",
      description: "mingo is a nutrition brand offering health supplements with suplement medicine",
      imgUrl: mingo,
      demo:'https://heymingo.com/',
    },
    {
      title: "Kyndskin",
      description: "Skincare brand offering a wide range of skincare products with natural ingredients",
      imgUrl: kyndskin,
      demo:'https://kyndskinn.com/',
    },
    {
      title: "fitclub bussiness-web",
      description: "fitclub website with fully responsive for small bussiness websites",
      imgUrl: fitclub,
      demo:'https://fitclubweb1.netlify.app/',
      git:'https://github.com/Raghu-vardhan/Fit-Club_responive-web.git'
    },
    {
      title: "blogging-website",
      description: "Blogging website features with registor/ login and write blog",
      imgUrl: blogs,
      stack:' Stack : Html| Css | Javascript | React',
      demo:'https://reactblog22.netlify.app/',
      git:'https://github.com/Raghu-vardhan/React-BlogSite.git'
    },
    {
      title: "Ecommerence website",
      description: "An ecommerence website can filter and add to cart also remove from cart",
      imgUrl: ecomm,
      stack:' Stack : Html| Css | Javascript | React',
      demo:'https://ecommernce-rvv.netlify.app/',
      git:'https://github.com/Raghu-vardhan/Ecommerance-app.git'
    },
    {
      title: "Simple Calculator",
      description: "Basic calculator with fully responsive",
      imgUrl: cals ,
      stack:' Stack : Html| Css | Javascript | ',
      demo:'https://newcalculator03.netlify.app',
      git:'https://github.com/Raghu-vardhan/simple-calculator.git'

    },
    {
      title: "Alarm clock",
      description: "Using this application we can set clock ",
      imgUrl: clock,
      stack:' Stack : Html| Css | Javascript | ',
      demo:'https://alarmclock00.netlify.app',
      git:'https://github.com/Raghu-vardhan/alaram-clock.git'
    },
    {
    title: "Color-Generater",
    description: "click it and its starts color changes ",
    imgUrl: colorgenrate,
    stack:' Stack : Html| Css | Javascript ',
    git:'https://github.com/Raghu-vardhan/Click-to-change-backgrond-color.git',
    demo:''
    },
    {
      title: "WaterGunSnake Game",
      description: "this is an a game Having features with sound effects",
      imgUrl: game,
      stack:' Stack : Html| Css | Javascript ',
      demo:'https://snakegungame.netlify.app',
      git:'https://github.com/Raghu-vardhan/snakewatergun.git'
    },
  ];

  const React = [
    
   {
      title: "BhavaEarth",
      description: "BhavaEarth Offers healthy, organic, and natural products for your daily needs.",
      imgUrl: bhavaearth,
      demo:'https://www.bhavaearth.com/',
    },
     {
      title: "Holoman",
      description: "Holoman clothing brand offers a wide range of stylish and comfortable clothing options",
      imgUrl: holoman,
      demo:'https://www.holoman.in/',
    },
    {
      title: "Rithyam",
      description: "Rithyam jewellery brand offers classic gold and diamond jewellery",
      imgUrl: rithyam,
      demo:'https://www.rityamjewels.com/',
    },
     {
      title: "Lumora",
      description: "Lumora is a soluation for all your beauty needs",
      imgUrl: lumora,
      demo:'https://lumoracare.com/',
    },
    {
      title: "Libunahygiene",
      description: "libunahygiene is a hygiene brnad  offering period pads and other hygiene products",
      imgUrl: libuna,
      demo:'https://libunahygiene.com/',
    },
    {
      title: "Gonutriline",
      description: "gonutriline is a nutrition brand offering health supplements with suplement medicine",
      imgUrl: gonutriline,
      demo:'https://libunahygiene.com/',
    },
     {
      title: "Mingo",
      description: "mingo is a nutrition brand offering health supplements with suplement medicine",
      imgUrl: mingo,
      demo:'https://heymingo.com/',
    },
    {
      title: "Kyndskin",
      description: "Skincare brand offering a wide range of skincare products with natural ingredients",
      imgUrl: kyndskin,
      demo:'https://kyndskinn.com/',
    },
  ]

  const Javascript = [
     {
      title: "fitclub bussiness-web",
      description: "fitclub website with fully responsive for small bussiness websites",
      imgUrl: fitclub,
      stack:' Stack : Html| Css | Javascript | React',
      demo:'https://fitclubweb1.netlify.app/',
      git:'https://github.com/Raghu-vardhan/Fit-Club_responive-web.git'
    },
    {
      title: "blogging-website",
      description: "Blogging website features with registor/ login and write blog",
      imgUrl: blogs,
      stack:' Stack : Html| Css | Javascript | React',
      demo:'https://reactblog22.netlify.app/',
      git:'https://github.com/Raghu-vardhan/React-BlogSite.git'
    },
    {
      title: "Ecommerence website",
      description: "An ecommerence website can filter and add to cart also remove from cart",
      imgUrl: ecomm,
      stack:' Stack : Html| Css | Javascript | React',
      demo:'https://ecommernce-rvv.netlify.app/',
      git:'https://github.com/Raghu-vardhan/Ecommerance-app.git'
    },
    {
      title: "Simple Calculator",
      description: "Basic calculator with fully responsive",
      imgUrl: cals ,
      stack:' Stack : Html| Css | Javascript | ',
      demo:'https://newcalculator03.netlify.app',
      git:'https://github.com/Raghu-vardhan/simple-calculator.git'

    },
    {
      title: "Alarm clock",
      description: "Using this application we can set clock ",
      imgUrl: clock,
      stack:' Stack : Html| Css | Javascript | ',
      demo:'https://alarmclock00.netlify.app',
      git:'https://github.com/Raghu-vardhan/alaram-clock.git'
    },
    {
    title: "Color-Generater",
    description: "click it and its starts color changes ",
    imgUrl: colorgenrate,
    stack:' Stack : Html| Css | Javascript ',
    git:'https://github.com/Raghu-vardhan/Click-to-change-backgrond-color.git',
    demo:'https://newcalculator03.netlify.app/'
    },
    {
      title: "WaterGunSnake Game",
      description: "this is an a game Having features with sound effects",
      imgUrl: game,
      stack:' Stack : Html| Css | Javascript ',
      demo:'https://snakegungame.netlify.app',
      git:'https://github.com/Raghu-vardhan/snakewatergun.git'
    },

  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> Shopify Brands</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">personal</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                target="_blank" rel="noopener noreferrer"
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          React.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Javascript.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp2} alt="no"></img>
    </section>
  )
}