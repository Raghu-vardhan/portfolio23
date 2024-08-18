import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,stack,demo,git}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}  alt=''/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}<br/>{stack}<br/>
          </span>
          <div className="links-btn">
          <a href={demo}>Demo</a> | <a href={git}>code</a> </div>
          
        </div>
      </div>
    </Col>
  )
}