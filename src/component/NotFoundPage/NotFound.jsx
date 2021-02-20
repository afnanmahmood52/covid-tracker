import React from 'react'
import './NotFound.css'
import "../../../node_modules/aos/dist/aos.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ErrorImage from '../../images/404_Error.png'

// Not Found module
export default function NotFound() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-2 col-md-1 col-lg-2"></div>
            <div className="col-sm-8 col-md-10 col-lg-8">
                {/* <div className="not-found-heading">
                    <p>Page Not Found!</p>
                </div> */}
                <div className="error-image">
                    <img src={ErrorImage} alt={'error'}/>
                </div>
            </div>
            <div className="col-sm-2 col-md-1 col-lg-2"></div>
        </div>
    </div>
  )
}
