import React from 'react'
import Resume from '../Components/Resume'
import Socials from '../Components/Socials'
import ContactInfo from '../Components/ContactInfo'

const Contacts = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" id="contacts">
        <div className="row gy-5 align-items-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
            <h2 className='fw-bold mb-4'>My Resume</h2>
            <Resume />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
            <h2 className='fw-bold mb-3'>Socials</h2>
            <Socials />
            <h2 className='fw-bold mb-3 mt-5'>Contact Info</h2>
            <ContactInfo />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contacts