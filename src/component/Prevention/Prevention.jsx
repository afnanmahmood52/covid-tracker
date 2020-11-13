import React,{ useState} from 'react'
import "./Prevention.css"
import doctor from "../../images/doctor.png"
import cough from '../../images/symptom/cough.png'
import fever from '../../images/symptom/fever.png'
import shortBreath from '../../images/symptom/shortBreath.png'
import Symptom from './symptom/Symptom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Precaution/Precaution'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import "../../../node_modules/aos/dist/aos.css"
import precaution_item from './precaution_item'
import Precaution from './Precaution/Precaution'


export default function Prevention() {
  
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
    <div className="preventionMain">


      <div className="prevention">

        <div className="symptoms">
          <div className="left-col">
            <div className="text-content" data-aos="fade-right" data-aos-duration="1300">
              <h4>What are the symptoms of COVID-19?</h4>
              <h1>Corona Virus SYMPTOMS</h1>
              <h5>It can take up to 14 days for symptoms of coronavirus to appear. The main symptoms to look out for are:</h5>
            </div>
            
            <div className="indications">

              <Symptom
              key={'fever'}
              img={fever}
              title={'Fever'}
              desc={'This means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.'}/>

              <Symptom
              key={'cough'}
              img={cough}
              title={'Cough'}
              desc={'This means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).'}/>

              <Symptom
              key={'shortBreath'}
              img={shortBreath}
              title={'Shortness of Breath'}
              desc={'Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.'}/>

            </div>
          </div>

          <div className="right-col">
            <img src={doctor} alt="doctor-syringe" data-aos="zoom-in" data-aos-duration="1300"/>
          </div>
        </div>

        <div className="precautions">
            <div className="prec-text" data-aos="fade-right" data-aos-duration="1300">
              <h4>So how to prevent COVID-19?</h4>
              <h1>Corona Virus PRECAUTIONS</h1>
              <h5>You can takes some necessary steps to save yourself and your loved ones from this deadly virus.</h5>
            </div>
            <div className="cards-list">
              {
                precaution_item.map( (card, i) =>{
                  return <div className="card-item" data-aos="fade-right" data-aos-duration="1300" key={i}>< Precaution key={i} image ={card.img} title={card.title}/></div>
                })
              }
            </div>
            

        </div>

      </div>

      <ArrowUpwardIcon  className="scrollTop" fontSize="large" onClick={scrollTop} style={{height: 50, width: 50, display: showScroll ? 'block' : 'none'}}/>
      
    </div>
  )
}
