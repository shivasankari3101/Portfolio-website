import classes from "./Slogan.module.css";
import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Slogan(){
      const containerRef = useRef(null);
      const overlayRef = useRef(null);
      const sloganRef = useRef(null);
    useEffect(()=>{
       const t1 = gsap.timeline(
          {
              scrollTrigger:{
                  trigger:containerRef.current,
                  start:"top center",
                  end:"bottom center",
                  scrub:true
              }
          }
       )
       t1.fromTo(overlayRef.current,
        {
            backgroundColor: "rgba(0, 0, 0)",
        },{
            backgroundColor: "rgba(0, 0, 0,0.9)",
        },"label1")
        .fromTo(sloganRef.current,
            {
                autoAlpha:0.8
            },{
                autoAlpha:1
            },"label1")
    },[])
    return(
        <div ref={containerRef} className={classes.slogan}>
            <div ref={overlayRef} className={classes.overlay}></div>
            <h1 ref={sloganRef}>LEARN, WORK AND EARN</h1>   
        </div>
    )
}

export default Slogan;