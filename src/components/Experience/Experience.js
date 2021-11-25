import classes from "./Experience.module.css";
import {Accordion, useAccordionButton, Card} from 'react-bootstrap';
import experiences from "../../data/experiences";
import Arrow from "../../widgets/Arrow/Arrow";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>{
    }
      
    );
  
    return (
      <div  onClick={decoratedOnClick}>
         <Arrow direction="uparrow"></Arrow>
      </div>
    );
  }
  
 
  
 
function Experience(){
    return(
        <div className={classes.experience}>
            <h1>experience</h1>
            <hr/>
             <Accordion defaultActiveKey="0">
      {experiences.map(experience => {
          return(
            <Card key={experience.id} className={classes.card}>
            <Card.Header className={classes.card_header}>
              <div className={classes.experience_header}>
                <h1> {experience.role}</h1>
                <p>{experience.company}</p>
                <hr />
                 <p>{experience.date}</p>
              </div>
              <CustomToggle eventKey={experience.id}>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={experience.id}>
              <Card.Body>{experience.description}</Card.Body>
            </Accordion.Collapse>
            <hr />
          </Card>
          )
      })}
       
      </Accordion>
        </div>
    )
}

export default Experience;