import classes from "./Title.module.css";
function Title(props){
    return(
        <div className={props.color ? classes.white : classes.title}>
            <h1>{props.title}</h1>
            <hr/>
        </div>
    )
}

export default Title;