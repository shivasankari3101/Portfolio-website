import classes from "./Project.module.css";
import {getProjectData} from "../../data/projects";
import Title from "../../widgets/Title/Title";
import {useParams} from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap/all";

function Project(){
    let params = useParams();
    let project = getProjectData(params.domain);

    let overlayRef = useRef(null);

    useEffect(()=>{
        window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'            
        });

        gsap.to(overlayRef.current,{
            width:"0%",
            duration:1
        })
    },[])
    return(
        <div className={classes.project_page}>
           <div className={classes.overlay} ref={overlayRef}></div>
           <Title title={`${project.domain} Projects`}></Title>

           <div className={classes.projects}>
             {project.projects.map(project =>{
                return(
                    <div className={classes.project} key={project.id}>
                    <div className={classes.text_content}>
                    <h1><a href={project.url}>{project.title}</a></h1>
                    <p><h2 style={{display:"inline-block",fontSize:"1.3rem",fontWeight:"bold"}}>Technologies used: </h2>{project.tech}</p>
                    <hr />
                    <p>{project.description}</p>
                    <p>Want to see the code? <a href={project.github_url}>Check it out here!</a></p>
                    </div>
                    <hr />
                 </div>
                )
             })}
           </div>
        </div>
    )
}

export default Project;