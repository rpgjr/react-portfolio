import React from 'react'
import { SiBootstrap, SiC, SiCplusplus, SiCss3, SiLaravel, SiLivewire, SiMysql, SiPhp, SiReact, SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const CardsFrontEnd = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 card-body">
            <div className="row justify-content-center">
              <div className="col-3 card-icon-hover">
                <SiCss3 className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>CSS</p>
              </div>
              <div className="col-3 card-icon-hover">
                <SiReact className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>ReactJS</p>
              </div>
              <div className="col-3 card-icon-hover">
                <SiBootstrap className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>Bootstrap</p>
              </div>
              <div className="col-3 card-icon-hover">
                <SiTailwindcss className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>Tailwind</p>
              </div>
            </div>
          </div>
          <div className="col-12 card-title">
            <p className='section-subheadings'>Front-End Web Development</p>
            <p className='section-p mt-3'>I have a basic knowledge in ReactJS, Tailwind and intermediate knowledge in CSS and Bootstrap. These are the primary Libraries and Languages that I use in designing a project.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const CardsBackEnd = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 card-body-middle">
            <div className="row justify-content-center">
              <div className="col-3 card-icon-hover">
                <SiPhp className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>PHP</p>
              </div>
              <div className="col-3 card-icon-hover">
                <SiLaravel className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>Laravel</p>
              </div>
              <div className="col-3 card-icon-hover">
                <SiLivewire className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>Livewire</p>
              </div>
              <div className="col-3 card-icon-hover">
                <SiMysql className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>MySql</p>
              </div>
            </div>
          </div>
          <div className="col-12 card-title">
            <p className='section-subheadings'>Back-End Web Development</p>
            <p className='section-p mt-3'>I have a basic to intermediate knowledge in PHP, Laravel, Livewire and MySql. I have an experience using these Languages during the development of my Thesis/Capstone Project.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const CardsOthers = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 card-body">
            <div className="row justify-content-center">
              <div className="col-3 card-icon-hover">
                <SiCplusplus className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>C++</p>
              </div>
              <div className="col-3 card-icon-hover">
                <FaJava className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>Java</p>
              </div>
              <div className="col-3 card-icon-hover">
                <SiC className='card-icons' />
                <p className='fw-bold mt-1 fs-7'>Cobol</p>
              </div>
            </div>
          </div>
          <div className="col-12 card-title">
            <p className='section-subheadings'>Other Languages</p>
            <p className='section-p mt-3'>I have a basic knowledge in C++, Cobol and Java. These are the other languages that I studied and learned during college years and help me understand the basic principles of programming.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardsFrontEnd
export { CardsBackEnd, CardsOthers }