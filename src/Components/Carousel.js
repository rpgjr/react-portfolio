import React from 'react'

const Carousel = ({pic_1, pic_2, pic_3, pic_4, pic_5}) => {
  return (
    <React.Fragment>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img src={pic_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={pic_2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={pic_3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={pic_4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={pic_5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
  )
}

export default Carousel