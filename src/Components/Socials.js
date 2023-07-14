import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Socials = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center gx-0">
          <div className="col-3">
              <a href="https://github.com/rpgjr" target='_blank' className='text-decoration-none text-white'>
                <FaGithub size={40} />
                <h6 className='mt-1'>Github</h6>
              </a>
          </div>
          <div className="col-3">
              <a href="https://www.linkedin.com/in/rpgjr/" target='_blank' className='text-decoration-none text-white'>
                <FaLinkedin size={40} />
                <h6 className='mt-1'>LinkedIn</h6>
              </a>
          </div>
          <div className="col-3">
              <a href="https://www.facebook.com/genetarodrigo/" target='_blank' className='text-decoration-none text-white'>
                <FaFacebook size={40} />
                <h6 className='mt-1'>Facebook</h6>
              </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Socials