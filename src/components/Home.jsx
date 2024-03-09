import React from 'react';
import { Link } from 'react-router-dom';
import CarouselComponent from './CarouselComponent';
import { Container, Row, Col } from 'react-bootstrap';
import Services from './Services';


const CardComponent = () => {

    return (
        <>
            <CarouselComponent />
            {/* first division */}

            <div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-3  card_home">
                    <div className="col m-4 ">
                        <div className="card bg-primary text-white ">
                            <div className="card-body">
                                <h5 className="card-title">Doctor services</h5>
                                <h3>Emergency Cases</h3>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed ex distinctio facere explicabo voluptatibus saepe ratione, vero fugiat omnis. Enim quisquam obcaecati molestiae harum quam deleniti eius numquam dolor?</p>
                                <Link to="/" className="btn btn-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col m-4">
                        <div className="card bg-primary text-white ">
                            <div className="card-body">
                                <h5 className="card-title">Hospital Services</h5>
                                <h3>Doctor Timetable</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae velit ut reprehenderit tempore cumque nam, doloribus, deleniti laboriosam neque id perspiciatis pariatur adipisci saepe esse illo fugiat ipsam hic ipsa!</p>
                                <Link to="/" className="btn btn-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col m-4">
                        <div className="card card bg-primary text-white ">
                            <div className="card-body">
                                <h5 className="card-title">Time management</h5>
                                <h3>Opening hour</h3>
                                <p className="card-text"> Lorem ipsum dolor sit amet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum magnam laboriosam suscipit nisi veniam cumque culpa dicta eius? Iste quae rem nesciunt pariatur explicabo porro consectetur nihil unde fugiat temporibus?</p>
                                <Link to="/" className="btn btn-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second division */}

                <div>
                    <div className="mt-5 text-bold text-center">
                        <h2>We Are Always Ready To Help You & <br />  Your Family</h2>
                        <i class="fa-solid fa-heart-pulse mt-4"></i>
                        <p className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
                            Assumenda sint illo voluptas sed pariatur soluta eaque cum quas voluptates error?</p>
                    </div>

                    <Services />
                    {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-3  card_home ">
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

                        </div> */}
                </div>
            </div>

            {/* third divion */}
            <div>
                <div className="third_div ">
                    <img src="./images/bread-bg.jpg" alt="" />

                </div>
            </div>


        </>
    );
};


export default CardComponent;
