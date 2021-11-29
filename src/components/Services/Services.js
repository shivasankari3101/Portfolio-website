import { useEffect, useState,useRef } from "react";
import classes from "./Services.module.css";
import Services_data from "../../data/services";
import Title from "../../widgets/Title/Title";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services(){
    const [IsMobile,setIsMobile]=useState(window.innerWidth < 768);

    const update = () =>{
          setIsMobile(window.innerWidth<768);
    }

    let serviceRefs = useRef([]);
    serviceRefs.current = [];

    const addToRefs = (el) =>{
        if(el && !serviceRefs.current.includes(el)){
            serviceRefs.current.push(el);
        }
    }

    useEffect(()=>{
       serviceRefs.current.forEach((el,index)=>{
           gsap.from(el,{
            yPercent:120,
            duration:0.4,
            scrollTrigger:{
                trigger:el,
                start:"top center",
                end:"30% top center"
            }
           })
       })
    },[])

    useEffect(()=>{
        window.addEventListener("resize",update);
    })
    return(
        <div className={classes.services_comp}>
            <Title title="what I do?"></Title>
            <div className={classes.services}>
            {Services_data.map(service=>{
                return <div key={service.id} className={classes.service}>
                  <div className={classes.content}>
                  <div className={classes.name_container}>
                   <h1 ref={addToRefs}>{service.name}</h1>
                  </div>
                  <img src={service.mobile_image && IsMobile ?  service.mobile_image : service.image } alt={service.name} className={service.image_resize ? classes.resize_image : null}/>
                  </div>
                  <div className={classes.line}>
                  <hr />
                  </div>
                 </div>
            })}
            </div>
        </div>
    )
}

export default Services;