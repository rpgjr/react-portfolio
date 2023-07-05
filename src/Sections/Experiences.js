import React from 'react'
import Carousel from '../Components/Carousel'
import ojt_pic_1 from './../Images/ojt_pic_1.png'
import ojt_pic_2 from './../Images/ojt_pic_2.png'
import ojt_pic_3 from './../Images/ojt_pic_3.png'
import ojt_pic_4 from './../Images/ojt_pic_4.png'
import ojt_pic_5 from './../Images/ojt_pic_5.png'


const Experiences = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" id="experiences">
        <div className="row gx-5">
          <div className="col-12">
            <p className='experiences-headings mb-5'>My Experiences</p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Carousel 
              pic_1={ojt_pic_1} 
              pic_2={ojt_pic_2} 
              pic_3={ojt_pic_3} 
              pic_4={ojt_pic_4} 
              pic_5={ojt_pic_5} 
            />

            <div className='experiences-text'>
              <p className="experiences-headings mt-4 mb-1">Internship</p>
              <p className='experiences-subheadings mt-1 mb-4'>iPhiTech IT and Digital Solutions</p>
              <p className='experiences-p'>hello hello</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <iframe src="https://www.youtube.com/embed/QkkNq4QXTUY"></iframe>

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