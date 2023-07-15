import React, { useEffect } from 'react'
import CardsFrontEnd, { CardsBackEnd, CardsOthers } from '../Components/Cards'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect (() => {
    AOS.init();
  }, [])

  return (
    <React.Fragment>
      <div className='container-fluid' id="skills">
        <div className="row g-3 justify-content-center">
          <div className="col-12 mb-4" data-aos="fade-down">
            <p className='section-headings'>My Skills</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 100-100" data-aos="flip-left" data-aos-duration="1000">
            <CardsFrontEnd />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 100-100" data-aos="flip-down" data-aos-duration="1000">
            <CardsBackEnd />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 100-100" data-aos="flip-right" data-aos-duration="1000">
            <CardsOthers />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Skills