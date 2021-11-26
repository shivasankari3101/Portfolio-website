import classes from "./About.module.css";
import Title from "../../widgets/Title/Title";
import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function About(){
    const aboutRef = useRef(null);
    useEffect(()=>{
       gsap.fromTo(aboutRef.current,
        {
            autoAlpha:0,
        },{
            autoAlpha:1,
            scrollTrigger:{
                trigger:aboutRef.current,
                start:"top center",
                end:"bottom center",
                scrub:true
            }
        })
    },[])
    return(
        <div ref={aboutRef} className={classes.about} id="about">
             <Title title="about me"></Title>
             <p>Hi! I am a  Frontend Web Developer who loves to create beautiful static web pages maintaining the responsiveness and good at replicating web designs. I am looking forward to work on real-time projects to make my excellence into service.</p>
        </div>
    )
}

export default About;