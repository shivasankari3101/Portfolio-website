import classes from "./Arrow.module.css";
import arrow from "../../assets/Button_arrow.svg";
import black_arrow from "../../assets/Black_button_arrow.svg"
function Arrow(props){
    return(
       <div className={props.direction === "uparrow" ? classes.uparrow : classes.sidearrow}>
            <div className={classes.arrowbutton}>
              <img src={props.direction === "uparrow" ? arrow : black_arrow} alt="arrow" />
            </div>
       </div>
    )
}

export default Arrow;