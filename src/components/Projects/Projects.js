import {Link} from 'react-router-dom';
import classes from "./Projects.module.css";
import {getprojects} from "../../data/projects";
import Arrow from "../../widgets/Arrow/Arrow";
import Title from "../../widgets/Title/Title";
function Projects(){
    let projects_data = getprojects();
    return(
        <div className={classes.projects}>
           <Title title="projects" color="white"></Title>
           {projects_data.map(project => {
               return(
                   <div key={project.id} className={classes.project}>
                       <div className={classes.container}>
                       <h1>0{project.id}</h1>
                       <div className={classes.domain_container}>
                           <h1>{project.domain} projects</h1>
                           <p>{project.description}</p>
                       </div>
                       <Link to={`/projects/${project.domain}`}>
                         <Arrow direction="sidearrow"></Arrow>
                       </Link>
                       </div>
                       <hr />                   
                   </div>
               )
           })}
        </div>
    )
}

export default Projects;