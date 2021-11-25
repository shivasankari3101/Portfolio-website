import classes from "./Projects.module.css";
import projects_data from "../../data/projects";
import Arrow from "../../widgets/Arrow/Arrow"
function Projects(){
    return(
        <div className={classes.projects}>
           <h1>projects</h1>
           <hr />

           {projects_data.map(project => {
               return(
                   <div className={classes.project}>
                       <h1>{project.id}</h1>
                       <div className={classes.domain_container}>
                           <h1>{project.domain}</h1>
                           <p>{project.description}</p>
                       </div>
                       <Arrow></Arrow>                     

                   </div>
               )
           })}
        </div>
    )
}

export default Projects;