import classes from "./Home.module.css";
// import mouse_icon from "../../assets/mouse_icon.png";
import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Home(){
    const containerRef = useRef(null);
    const overlayRef = useRef(null);
    const textRef = useRef(null);
  useEffect(()=>{
     const t1 = gsap.timeline({
         defaults:{
             duration:2
         }
     }
     );
     t1.fromTo(overlayRef.current,
      {
          background: "linear-gradient(to right, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0.8))",
      },{
          background: "linear-gradient(to right, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0.8))",
      },"label1")
      .fromTo(textRef.current,
          {
              autoAlpha:0
          },{
              autoAlpha:1
          },"label1")
  },[])
   
    return(
        <div ref={containerRef} className={classes.home} >
            <div ref={overlayRef} className={classes.overlay} ></div>
            <div ref={textRef} className={classes.text_content}>
               <div></div>
               <div className={classes.content}>
               <h4>HI, I AM SHIVA !</h4>
                <h1>WEB DEVELOPER</h1>
                <p>I help clients express themselves through websites</p>
               </div>
            </div>
        </div>
    )
}

export default Home;