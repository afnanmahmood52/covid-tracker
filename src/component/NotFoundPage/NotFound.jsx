import React from 'react'
import './NotFound.css'
import "../../../node_modules/aos/dist/aos.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function NotFound() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="not-found-heading">
                    <p>Page Not Found!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
