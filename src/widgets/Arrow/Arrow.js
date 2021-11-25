import classes from "./Arrow.module.css";
import arrow from "../../assets/Button_arrow.svg";
function Arrow(){
    return(
        <div className={classes.arrowbutton}>
           <img src={arrow} alt="arrow" />
        </div>
    )
}

export default Arrow;