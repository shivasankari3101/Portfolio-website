import classes from "./Footer.module.css";
function Footer(){
    return(
        <div className={classes.footer}>
          <hr />
          <div className={classes.content}>
             <p>&copy; 2021 shivasankari3101</p>
             <p>All rights reserved</p>
          </div>
        </div>
    )
}

export default Footer;