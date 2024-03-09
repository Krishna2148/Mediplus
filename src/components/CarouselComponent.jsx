import React from 'react'

const CarouselComponent = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={`./images/slider.jpg`} className="d-block w-100" alt="..." />
                        <div class="carousel-caption" >
                            <h2>We provide medical services That you can trust</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quasi veniam ullam laborum dolores tempora id minus? Consectetur est beatae earum ea deleniti dolor nihil incidunt sit saepe perspiciatis alias accusantium eaque quia at eos voluptate temporibus atque autem sed ab, iusto minima enim pariatur. Facilis assumenda rerum commodi amet.</p>
                            <button className='btn carousel_button' data-bs-toggle="modal" data-bs-target="#exampleModal">Get Appointment</button>
                            <button className='btn carousel_button'>Learn More</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./images/slider2.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h2>We provide dental services that you can trust</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, accusamus at hic ipsa cumque, commodi incidunt debitis tempora, est laboriosam sit! Amet odio alias omnis consequatur officia at quod, eius esse hic fuga eligendi dolorem sed inventore ut asperiores et?</p>
                            <button className='btn carousel_button' data-bs-toggle="modal" data-bs-target="#exampleModal">Get Appointment</button>
                            <button className='btn carousel_button'>Learn More</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./images/slider3.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h2>We provide eye services that you can trust </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse possimus sint fugit molestiae nisi, cupiditate voluptatum, ex, in voluptas explicabo deserunt itaque! Culpa amet quam sit dicta reiciendis! Architecto, odit modi? Sint itaque illum pariatur.</p>
                            <button className='btn carousel_button' data-bs-toggle="modal" data-bs-target="#exampleModal">Get Appointment</button>
                            <button className='btn carousel_button'>Learn More</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default CarouselComponent


