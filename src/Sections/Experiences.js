import React, { useEffect } from 'react'
import Carousel from '../Components/Carousel'
import ojt_pic_1 from './../Images/ojt_pic_1.png'
import ojt_pic_2 from './../Images/ojt_pic_2.png'
import ojt_pic_3 from './../Images/ojt_pic_3.png'
import ojt_pic_4 from './../Images/ojt_pic_4.png'
import ojt_pic_5 from './../Images/ojt_pic_5.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Experiences = () => {
  useEffect (() => {
    AOS.init();
  }, [])

  return (
    <React.Fragment>
      <div className="container-fluid" id="experiences">
        <div className="row g-5 justify-content-center">
          <div className="col-12 mb-5" data-aos="fade-down">
            <p className='section-headings'>My Experiences</p>
            <p className='text-center'>Other projects can be seen on my <a href="https://github.com/rpgjr" className='text-white fw-bold text-decoration-none' target='_blank'>Github</a> Profile</p>
          </div>
          <div className="col-12 row experiences-rows align-items-center" data-aos="fade-right">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Carousel 
                pic_1={ojt_pic_1} 
                pic_2={ojt_pic_2} 
                pic_3={ojt_pic_3} 
                pic_4={ojt_pic_4} 
                pic_5={ojt_pic_5} 
              />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-left">
              <div>
                <p className="section-headings mt-4 mb-1">Internship</p>
                <p className='section-subheadings mt-1 mb-4'>Web Developer</p>
                <p className='section-p'>I took my Internship at <a href="https://iphitech.com/" target='_blank' className='text-white fw-bold'>iPhiTech IT and Digital Solutions.</a> I learned new web development technologies during my internship such as the basics of creating a website using <span className='fw-bold'>WordPress and Shopify.</span> Also, there are task that make us practice the basics of Web Development such as creating a project with basic <span className='fw-bold'>HTML and CSS</span>, studying <span className='fw-bold'>JavaScript</span> and creating <span className='fw-bold'>CRUD using PHP Laravel.</span></p>
              </div>
            </div>

          </div>

          <div className="col-12 row align-items-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 order-sm-first order-lg-last" data-aos="fade-left">
              <iframe src="https://www.youtube.com/embed/QkkNq4QXTUY" className='experiences-video'></iframe>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 order-sm-last order-lg-first" data-aos="fade-right">
              <div>
                <p className="section-headings mt-4 mb-1" >Capstone Project</p>
                <p className='section-subheadings mt-1 mb-4'>Full Stack Web Developer</p>
                <p className='section-p'><a href="https://puptcapstone.net/puptaps/public_html/" className='text-white fw-bold' target='_blank'>The Alumni Portal System</a> was the system that I created for my Thesis/Capstone Project. I was the <span className='fw-bold'>Full Stack Developer and Project Manager</span> of our group. The technologies that I used in this project was <span className='fw-bold'>PHP Laravel, JavaScript, Bootstrap and Laravel Livewire.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Experiences