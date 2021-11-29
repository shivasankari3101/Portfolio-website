import classes from "./Home.module.css";
import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Home(){
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  useEffect(()=>{
      gsap.from([line1.current,line2.current,line3.current],
        {
            yPercent:120,
            duration:0.8,
            stagger:{
                amount:0.8
            }
        })
  },[])
   
    return(
        <div className={classes.home} >
            <div className={classes.overlay} ></div>
            <div className={classes.text_content}>
               <div></div>
               <div className={classes.content}>
                <div className= {classes.line_container}>
                <h4 ref={line1} style={{overflow:"hidden"}}>HI, I AM SHIVA !</h4>
                </div>
                <div className= {classes.line_container}>
                <h1 ref={line2}>WEB DEVELOPER</h1>
                </div>
                <div className= {classes.line_container}>
                <p ref={line3}>I help clients express themselves through websites</p>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Home;