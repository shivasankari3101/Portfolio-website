import classes from "./Contact.module.css";
import Title from "../../widgets/Title/Title";
import github from "../../assets/github.svg";
import behance from "../../assets/behance.svg"
function Contact(){
    return(
        <div className={classes.contact}>
          <Title title="let's connect"></Title>

          <div className={classes.contact_detail}>
            <p>
            Email me at           
            </p>
            <a href="mailto:shivasankari3101@gmail.com">shivasankari3101@gmail.com</a> 
          </div>

          <div className={classes.contact_detail}>
            <p>
            Connect me via
            </p>
            <a href="https://www.linkedin.com/in/shiva-sankari-c-339b441b2/">Linkedin</a> 
          </div>

          <div className={classes.profiles}>
             <a href="https://github.com/shivasankari3101">
                 <img src={github} alt="github" />
             </a>

             <a href="https://www.behance.net/shivasankari">
                 <img src={behance} alt="github" />
             </a>
          </div>


        </div>
    )
}

export default Contact;