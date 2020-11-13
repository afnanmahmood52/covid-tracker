import React, { useState} from 'react'
import AboutSection from './AboutSection/AboutSection'
import about_data from './about_data'
import './About.css'
import "../../../node_modules/aos/dist/aos.css"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function About() {
  
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
    <div className="covid-about">

      <AboutSection image={about_data[0].img} title={about_data[0].title} desc={about_data[0].desc} img_pos={'right'}/>
      <AboutSection image={about_data[1].img} title={about_data[1].title} desc={about_data[1].desc} img_pos={'left'}/>
      <AboutSection image={about_data[2].img} title={about_data[2].title} desc={about_data[2].desc} img_pos={'right'}/>
      <ArrowUpwardIcon  className="scrollTop" fontSize="large" onClick={scrollTop} style={{height: 50, width: 50, display: showScroll ? 'block' : 'none'}}/>
    </div>
  )
}
