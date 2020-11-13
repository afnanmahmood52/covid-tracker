import React from "react";
import classes from './Footer.module.css';
import '../../../node_modules/mdbreact/dist/css/mdb.css'
import covid from '../../images/corona-rotate.png';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';



export default function Footer() {

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <MDBFooter color="special-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <div className={classes.main_text}>
              <div className={classes.img_portion}>
                <img src={covid} alt="covid-rotate"/>
              </div>

              <div className={classes.text_area}>
                <h5 className={classes.title}>COVID-19 Tracker</h5>
                <p>
                  See the Realtime worldwide COVID-19 situation!!!
                </p>
              </div>


            </div>
          </MDBCol>
          <MDBCol className={classes.navigate} md="2">
            <h5 className="title">Navigate</h5>
            <ul>
              <li className="list-unstyled" onClick={scrollTop}>
                <Link to ='/'>Home</Link>
              </li>
              
              <li className="list-unstyled" onClick={scrollTop}>
                <Link to ='/about'>COVID-19</Link>
              </li>

              <li className="list-unstyled" onClick={scrollTop}>
                <Link to ='/prevention'>Preventition</Link>
              </li>

              <li className="list-unstyled" onClick={scrollTop}>
                <Link to ='/FAQ'>FAQ</Link>
              </li>

              <li className="list-unstyled" onClick={scrollTop}>
                <Link to ='/contact'>Contact</Link>
              </li>

              
            </ul>
          </MDBCol>

          <MDBCol className={classes.contact} md="4">
            <h5 className="title">Contact Us</h5>
            
            <ul className={classes.contact_list}>   
              <li className="list-unstyled">
                <div className="contact-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <LocationOnIcon />
                  <p style={{'margin':10}}>XYZ, The State Building, Lahore, PAK</p>  
                </div>
              </li>
                
              <li className="list-unstyled">
                <div className="contact-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <CallIcon />
                  <p style={{'margin':10}}>+92 333 3566678</p>  
                </div>
              </li>

              <li className="list-unstyled">
                <div className="contact-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <EmailIcon />
                  <p style={{'margin':10}}>corona.tracker@xyz.com</p>  
                </div>
              </li>


            </ul>
          </MDBCol>


        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Created by: <a href="https://www.linkedin.com/in/afnanmahmood52"> Afnan Mahmood </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}
