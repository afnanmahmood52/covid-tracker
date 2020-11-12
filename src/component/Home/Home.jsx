import React,{useEffect, useState} from 'react'
import CoronaSVG from './CoronaSVG/CoronaSVG'
import './Home.css'
import AOS from "aos"
import "../../../node_modules/aos/dist/aos.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cards from '../Home/Cards/Cards'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function Home() {
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
    <div className="home-body">
      <div className="corona-about" data-aos="fade-left" data-aos-duration="1200">
        <h5>See the Realtime Worldwide situation of</h5>
        <h1>COVID-19!</h1>
      </div>
      <div className="image-SVG" data-aos="fade-left" data-aos-duration="1200">
        <CoronaSVG/>
      </div>

      <div className="stats-portion">
        <h1>Select Country..</h1>

        <div className="form-group" id="country-select">
          <select className="form-control" id="exampleFormControlSelect1" style={{width:'60vw'}}>
            <option>Global</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>US</option>
            <option>United Kingdom</option>
          </select>
        </div>

        <div className="cards-portion">
          <Cards/>
        </div>
      </div>
      <ArrowUpwardIcon  className="scrollTop" fontSize="large" onClick={scrollTop} style={{height: 50, width: 50, display: showScroll ? 'block' : 'none'}}/>
    </div>
  )
}
