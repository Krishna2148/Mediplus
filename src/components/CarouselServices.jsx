import React from 'react';

const CarouselServices = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/blog1.jpg" className="d-block w-100" style={{ width: '200px', height: '500px' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/blog2.jpg" className="d-block w-100" style={{ width: '300px', height: '500px' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./images/blog3.jpg" className="d-block w-100" style={{ width: '300px', height: '500px' }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default CarouselServices;
