import './ProjectCard.scss'

const ProjectCard = ({src, title, children, link}) => (
  <a className="card-container" href={link} target="_blank">
    <img className="card-container-image" src={src} alt=""/>
    <h4>{title}</h4>
    {children}
  </a>
);

export default ProjectCard;