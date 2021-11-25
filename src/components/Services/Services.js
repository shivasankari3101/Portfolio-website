import { useEffect, useState } from "react";
import classes from "./Services.module.css";
import Services_data from "../../data/services";

function Services(){
    const [IsMobile,setIsMobile]=useState(window.innerWidth < 768);

    const update = () =>{
          setIsMobile(window.innerWidth<768);
    }

    useEffect(()=>{
        window.addEventListener("resize",update);
    })
    return(
        <div className={classes.services}>
            <h1>what I do?</h1>
            <hr />
            {Services_data.map(service=>{
                return <div key={service.id} className={classes.service}>
                  <div className={classes.content}>
                  <h1>{service.name}</h1>
                  <img src={service.mobile_image && IsMobile ?  service.mobile_image : service.image } alt={service.name} className={service.image_resize && classes.resize_image }/>
                  </div>
                  <div className={classes.line}>
                  <hr />
                  </div>
                 </div>
            })}
        </div>
    )
}

export default Services;