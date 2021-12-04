import classes from "./Slogan.module.css";
import {useEffect,useRef} from "react";
import {gsap, Power3} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import image from "../../assets/slogan.png";

gsap.registerPlugin(ScrollTrigger);
function Slogan(){
      const imageRef = useRef(null);
      const containerRef = useRef(null);
    useEffect(()=>{
       gsap.to(imageRef.current,{
           scale:1.2,
           ease:Power3.easeIn,
           scrollTrigger:{
            trigger:imageRef.current,
            start:"top center",
            end:"30% top center",
            scrub:true
        }
       })
    },[])
    return(
        <div className={classes.slogan} ref={containerRef}>
            <img src={image} ref={imageRef} alt="slogan_image" className={classes.image} />
            <div className={classes.overlay}></div>
            <h1>LEARN, WORK AND EARN</h1>   
        </div>
    )
}

export default Slogan;