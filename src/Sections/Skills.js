import React from 'react'
import CardsFrontEnd, { CardsBackEnd, CardsOthers } from '../Components/Cards'

const Skills = () => {
  return (
    <React.Fragment>
      <div className='container-fluid' id="skills">
        <div className="row g-3 justify-content-center">
          <div className="col-12 mb-4">
            <p className='section-headings'>My Skills</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 100-100">
            <CardsFrontEnd />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 100-100">
            <CardsBackEnd />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 100-100">
            <CardsOthers />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Skills