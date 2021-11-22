import classes from "./Home.module.css";
import mouse_icon from "../../assets/mouse icon.png";
function Home(){
    return(
        <div className={classes.home}>
            <div className={classes.overlay}></div>
            <div className={classes.text_content}>
               <span className={classes.hyphen}></span>
               <div className={classes.content}>
               <h4>HI, I AM SHIVA !</h4>
                <h1>WEB DEVELOPER</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
               </div>
            </div>
            <div className={classes.mouse_icon}>
              <img src={mouse_icon} alt="Mouse icon"/>
            </div>
        </div>
    )
}

export default Home;