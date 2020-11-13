import React, {  useState } from 'react'
import "./Contact.css"
import "../../../node_modules/aos/dist/aos.css"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function Contact() {
  
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
    <div className="container">
      <div className="col-8 mx-auto">
        <div className="contact" data-aos="fade-left" data-aos-duration="1000">
          <h1>Get in Touch!</h1>
        </div>
          <form className="contact-form" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1700" data-aos-offset="20">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" id="Name" placeholder="Enter Your Name..." required/>
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" id="Email" placeholder="Enter Your Email..." required/>
            </div>

            <div className="form-group">
              <label>Mobile No</label>
              <input type="text" className="form-control" id="MobileNo" placeholder="Enter Your Mobile Number..." required/>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" id="Message" placeholder="Enter Your Message..." required/>
            </div>

            
            <button type="submit" className="btn btn-danger" >Submit</button>
            
          </form>     
      </div>
      <ArrowUpwardIcon  className="scrollTop" fontSize="large" onClick={scrollTop} style={{height: 50, width: 50, display: showScroll ? 'block' : 'none'}}/>
    </div>
  )
}
