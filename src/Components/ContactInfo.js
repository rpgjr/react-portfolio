import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

const ContactInfo = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <FaEnvelope size={20} />
            <h6 className='ms-2 my-2'>rodrigo21geneta@gmail.com</h6>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <FaPhone size={20} />
            <h6 className='ms-2 my-2'>0961-197-3308</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactInfo