import React from 'react'
import MyPicture from './../Images/MyPicture.jpg'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6"; 

const Banner = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" id='banner'>
        <div className="row align-items-center g-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-6 order-last order-lg-first">
            <div className="banner-text text-center text-md-center text-lg-start">
              <p id='banner-headings' className='animate__animated animate__shakeY animate__delay-1s'>Hi! I'm Rodrigo</p>
              <p id='banner-subheadings'>Web Developer</p>
              <p id='banner-smalltext'>I'm an aspiring Full Stack Web Developer who's eager to learn and to grow in the field of Web Development. I'm passionate and enthusiastic in becoming a Developer and willing to explore more in the field of IT.</p>
              <div className="socials d-flex gap-4 justify-content-center justify-content-md-center justify-content-lg-start">
                <a href="https://github.com/rpgjr" target='_blank' className='text-decoration-none text-white'>
                  <FaGithub size={40} />
                </a>
                <a href="https://www.linkedin.com/in/rpgjr/" target='_blank' className='text-decoration-none text-white'>
                  <FaLinkedin size={40} />
                </a>
                <a href="https://www.facebook.com/genetarodrigo/" target='_blank' className='text-decoration-none text-white'>
                  <FaFacebook size={40} />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 order-first order-lg-last text-center text-md-center text-lg-end">
            <img src={MyPicture} alt="" id='banner-img' />
          </div> */}
          <div id='banner-profile-box' className='col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 order-first order-lg-last text-center text-md-center text-lg-end d-flex justify-content-center align-items-center'>
            <div className='banner-profile'></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner