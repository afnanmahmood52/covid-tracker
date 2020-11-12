import React, {useEffect,useState} from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import AOS from "aos"
import "../../../node_modules/aos/dist/aos.css"

import "./FAQ.css";


export default function FAQ() {
  let headColor = '#545e57'

  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[]);

  const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 50){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 50){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
  window.addEventListener('scroll', checkScrollTop)

  return (
    <div>
      <div className="container col-10 mx-auto">

        <div className="info">
          <h1 data-aos="fade-right" data-aos-duration="1300">WE ARE HERE TO HELP YOU</h1>
          <h2 data-aos="fade-left" data-aos-duration="1300">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        
        <div className="faq">
          <div className="faq-part1" data-aos="fade-right" data-aos-duration="1300" data-aos-offset="5">
          <Accordion style={{background:headColor}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{color:'white', fontWeight:'bolder'}}>What is isolation?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'white'}}>
            <Typography style={{color:'black', fontWeight:'400'}}>
            Separation of the affected person or suspected of being infected from other healthy people for the duration of the disease infection in appropriate places and health conditions, in order to prevent the transmission of the infection.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{background:headColor}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{color:'white', fontWeight:'bolder'}}>What is difference between quarantine and isolation?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'white'}}>
            <Typography style={{color:'black', fontWeight:'400'}}>
            Isolation and quarantine are common public health strategies used to help prevent the spread of infectious diseases. Isolation and quarantine keep people who are sick or exposed to illness isolated for a deﬁned period of time to prevent the disease spread.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{background:headColor}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{color:'white', fontWeight:'bolder'}}>Does Isolation and quarantine prevent infection of others??</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'white'}}>
            <Typography style={{color:'black', fontWeight:'400'}}>
            Quarantine and isolation are effective measures that are taken to reduce the spread of the disease to all members of society.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{background:headColor}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{color:'white', fontWeight:'bolder'}}>What is Quarantine?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'white'}}>
            <Typography style={{color:'black', fontWeight:'400'}}>
            Restricting the activities of healthy people for a period of time as determined by the competent medical authorities.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{background:headColor}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{color:'white', fontWeight:'bolder'}}>What can happen if I am in quarantine?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'white'}}>
            <Typography style={{color:'black', fontWeight:'400'}}>
            You may be asked to:
              <li>Stay at home</li>
              <li>Stay away from others</li>
              <li>Ensure that there are no symptoms of the disease</li>
              <li>Contact the doctor if you develop symptoms</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{background:headColor}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{color:'white', fontWeight:'bolder'}}>What is surveillance?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'white'}}>
            <Typography style={{color:'black', fontWeight:'400'}}>
            It is a series of procedures used to determine the source of the disease and any other factors that help spread the disease. It is also used to identify infected persons, the conditions of disease spread and the method of its spread, and requires cooperation from all members of society to provide the information required by the relevant team.
            </Typography>
          </AccordionDetails>
        </Accordion>
          </div>

          

        <div className="home-remedy" data-aos="fade-right" data-aos-duration="1300" data-aos-offset="2">
          <h1>Home care recommendation for patients with suspected or confirmed 2019</h1>
        </div>


        <div className="faq-part2"  data-aos="fade-left" data-aos-duration="1300" data-aos-offset="5">
          <Accordion style={{background:headColor}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{color:'white', fontWeight:'bolder'}}>What precautions do I need to take at home?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{background:'white'}}>
              <Typography style={{color:'black', fontWeight:'400'}}>
              You may be asked to:
                <li>Stay in a well-ventilated single room.</li>
                <li>Limit the movement within the house.</li>
                <li>Avoid shared spaces.</li>
                <li>If the mask gets wet or dirty with secretions, it must be changed immediately. </li>
                <li>Cover your mouth with a tissue when coughing or Sneezing and immediately throw the tissue.</li>
                <li>Keep your hands clean by using soap and water or an alcohol disinfectant. </li>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{background:headColor}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{color:'white', fontWeight:'bolder'}}>What precautions do people taking care of me take?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{background:'white'}}>
              <Typography style={{color:'black', fontWeight:'400'}}>
                <li>Only healthy people with no other health issues should take care of you.</li>
                <li>The caregiver should wear a surgical mask when in the same room with you.</li>
                <li>The masks should not be touched or handled during use.</li>
                <li>Throw the mask away after use.</li>
                <li>Clean their hands using soap and water or an alcohol disinfectant after taking the mask off</li>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{background:headColor}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{color:'white', fontWeight:'bolder'}}>What precautions do people I live with need to take?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{background:'white'}}>
              <Typography style={{color:'black', fontWeight:'400'}}>
                <li>Avoid visitors while you have symptoms.</li>
                <li>Household members should stay in a different room or if that is not possible, maintain a distance of at least 1 meter.</li>
                <li>Hand must be cleaned before and after preparing food, before eating, after using the toilet, and whenever hands look dirty.</li>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{background:headColor}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{color:'white', fontWeight:'bolder'}}>What should I do if any person met develops symptoms?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{background:'white'}}>
              <Typography style={{color:'black', fontWeight:'400'}}>
              Have the persons contact your local doctor to be checked.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
        

        <ArrowUpwardIcon  className="scrollTop" fontSize="large" onClick={scrollTop} style={{height: 50, width: 50, display: showScroll ? 'block' : 'none'}}/>

        </div>
      



      



      </div>
      

    </div>
  )
}
