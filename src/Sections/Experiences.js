import React from 'react'
import Carousel from '../Components/Carousel'
import ojt_1 from './../Images/ojt_1.png'
import ojt_2 from './../Images/ojt_2.png'
import ojt_3 from './../Images/ojt_3.png'
import ojt_4 from './../Images/ojt_4.png'


const Experiences = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" id="experiences">
        <div className="row gx-5">
          <div className="col-12">
            <p className='experiences-headings mb-5'>My Experiences</p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Carousel ojt_1={ojt_1} ojt_2={ojt_2} ojt_3={ojt_3} />

            <div className='experiences-text'>
              <p className="experiences-headings mt-4 mb-1">Internship</p>
              <p className='experiences-subheadings mt-1 mb-4'>iPhiTech IT and Digital Solutions</p>
              <p className='experiences-p'>hello hello</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Carousel ojt_1={ojt_1} ojt_2={ojt_2} ojt_3={ojt_3} />

            <div className='experiences-text'>
              <p className="experiences-headings mt-4 mb-1">Capstone Project</p>
              <p className='experiences-subheadings mt-1 mb-4'>Polytechnic University of the Philippines - Taguig Brach</p>
              <p className='experiences-p'>hello hello</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Experiences