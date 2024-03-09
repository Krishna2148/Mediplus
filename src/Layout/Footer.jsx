import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer bg-primary text-white m-1">
        <div className="container">
          <div className="row">
            <div className="col-md-3 lg-2 col-12">
              <Link className='text-white m-5 fs-4 fw-bold text-decoration-none'>About Us</Link>
              <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt expedita ipsa enim dolores nulla recusandae
                voluptatem odit? Molestias alias veniam sint minus nulla.
                Excepturi, quis adipisci.</p>
              <div className='footer_icon'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-vimeo"></i>
              </div>
            </div>
            <div className="col-md-3 lg-2 col-12">
              <Link className='text-white m-5 fs-4 fw-bold text-decoration-none'>Quick Links</Link>
            </div>
            <div className="col-md-3 lg-2 col-12">
              <Link className='text-white m-5 fs-4 fw-bold text-decoration-none'>Open Hours</Link>
              <p className='mt-4'>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.
                <hr />
                Monday - Friday8.00-20.00
                <hr />
                Saturday - 9.00-18.30
                <hr />
              </p></div>
            <div className="col-md-3 lg-2 col-12">
              <Link className='text-white m-5 fs-4 fw-bold text-decoration-none'>Newsletter</Link>
              <p className='mt-4'>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
              <input className='btn btn-success' type="email" placeholder="Email address" /><button className="btn btn-primary"><i className="fa-sharp fa-solid fa-paper-plane m-2 "></i></button>
            </div>
          </div>
        </div>
        <div className='footer'>
          <p >© Copyright 2045 | All Rights Reserved by wpthemesgrid</p>
        </div>
      </div>

    </>
  )
}

export default Footer