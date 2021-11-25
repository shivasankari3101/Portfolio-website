import classes from "./Experience.module.css";
import {Accordion, useAccordionButton, Card} from 'react-bootstrap';
import experiences from "../../data/experiences";
import arrow from "../../assets/Button_arrow.svg";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>{
    }
      
    );
  
    return (
      <button
        className={classes.arrowbutton}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
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
              <div>
              <CustomToggle eventKey={experience.id}>
                  <img src={arrow} alt="arrow" />
              </CustomToggle>
              </div>
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