import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-3 align-item-center justify-content-center ">
                <div className="col m-4">
                    <div className="card border-0">
                        <div className="card-body text-center">
                            <div>
                                <h4>Have you any queries?</h4>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Explain Your Query</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <button className='btn btn-danger'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col m-4">
                    <div className="card border-0">
                        <div className="card-body text-center">
                            <div className="rounded-circle d-flex align-items-center justify-content-center circle">
                                <i className="fa-solid fa-truck-medical icon_design"></i>
                            </div>
                            <h3>Emergency Cases</h3>
                            <hr />
                            <h4>Contact: +9770101010101</h4>
                            <h4>Toll free number: +9770101010101</h4>
                            <h5>Email:mediplusemergency@gmail.com</h5>
                        </div>
                    </div>
                </div>

                <div className="col m-4">
                    <div className="card border-0">
                        <div className="card-body text-center">
                            <h3 className="mb-3">Hospital Information</h3>
                            <h5>Location: Baluwatar Kathmandu </h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus natus aliquid inventore quae aliquam recusandae omnis harum unde quos ullam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sed ex distinctio facere explicabo v</p>
                            <button className='btn btn-primary'>More</button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21684.51468251756!2d85.33089387689166!3d27.706798062386852!2m3!1f0!2f0!3f0!3m2!1i1024!
                2i768!4f13.1!3m3!1m2!1s0x39eb19b163529399%3A0x522e7f4734ac0fb9!2sNorvic%20International%20Hospital!5e0!3m2!1sen!2snp!4v1709923059774!5m2!1sen!2snp"
                  height="600" style={{border:"0", width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </>
    )
}

export default ContactUs