import classes from "./Slogan.module.css";
function Slogan(){
    return(
        <div className={classes.slogan}>
            <div className={classes.overlay}></div>
            <h1>LEARN, WORK AND EARN</h1>   
        </div>
    )
}

export default Slogan;