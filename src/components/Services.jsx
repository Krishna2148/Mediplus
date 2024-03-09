import React from 'react'
import CarouselServices from './CarouselServices'

const Services = () => {
    return (
        <>
            <CarouselServices />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-3  card_home ">
                <div className="col m-4">
                    <div className="card border-0">
                        <div className="card-body text-center">
                            <div class="rounded-circle d-flex align-items-center justify-content-center circle">
                                <i className="fa-solid fa-truck-medical icon_design"></i>
                            </div>
                            <h3>Emergency Cases</h3>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed ex distinctio facere explicabo v</p>
                        </div>
                    </div>
                </div>


                <div className="col m-4">
                    <div className="card border-0">
                        <div className="card-body text-center">
                            <div class="rounded-circle d-flex align-items-center justify-content-center circle">
                                <i class="fa-solid fa-house-chimney-medical icon_design"></i>
                            </div>
                            <h3>Enriched Pharmecy</h3>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed ex distinctio facere explicabo v</p>
                        </div>
                    </div>
                </div>


                <div className="col m-4">
                    <div className="card border-0">
                        <div className="card-body text-center">
                            <div class="rounded-circle d-flex align-items-center justify-content-center circle">
                                <i class="fa-solid fa-stethoscope icon_design"></i>
                            </div>
                            <h3>Medical Treatment</h3>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed ex distinctio facere explicabo v</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Services