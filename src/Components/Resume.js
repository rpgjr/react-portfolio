import React from 'react'
import ResumeImg from './../Images/resume-rod.png';

const Resume = () => {
  return (
    <React.Fragment>
      <div className='resume-div'>
          <a href="https://drive.google.com/file/d/1Lvr5X4yAFlpJs10I73EG4_9cgcRyuF8S/view?usp=sharing" target='_blank'>
            <img src={ResumeImg} alt="" className='resume-img' />
          </a>
      </div>
    </React.Fragment>
  )
}

export default Resume