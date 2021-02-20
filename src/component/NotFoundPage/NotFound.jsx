import React from 'react'
import './NotFound.css'
import "../../../node_modules/aos/dist/aos.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ErrorImage from '../../images/404_Error.png'


export default function NotFound() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                {/* <div className="not-found-heading">
                    <p>Page Not Found!</p>
                </div> */}
                <div className="error-image">
                    <img src={ErrorImage} alt={'error image'}/>
                </div>
            </div>
        </div>
    </div>
  )
}
