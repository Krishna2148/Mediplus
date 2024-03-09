import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';


const Header = () => {
    
        const setDarkMode = () => {
            document.querySelector("body").setAttribute('data-theme', 'dark')
        }

        const setLightMode = () => {
            document.querySelector("body").setAttribute('data-theme', 'light')
        }
  
const toggleTheme = (e)=>{
    if(e.target.checked) {
        setDarkMode();
    }
    else{
        setLightMode();
    }
}
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light App-header">
                <div className="container py-2">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src={`./images/logo.png`} alt="Mediplus Logo" className="me-2" />
                        Mediplus
                    </Link>

                    {/* Toggler button for mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/doctors">Doctors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Departments
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/dep1">Dental Deparments</Link></li>
                                    <li><Link className="dropdown-item" to="/dep2">Clinical Department</Link></li>
                                    <li><Link className="dropdown-item" to="/dep3">Eye Department</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blogs
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>
                        </ul>

                        {/* Button and switch */}
                        <div className="d-flex">
                            <button className="btn btn-primary ms-lg-4" data-bs-toggle="modal" data-bs-target="#exampleModal" >Book Appointment</button>
                            <div className="form-check form-switch ms-lg-4">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onChange={toggleTheme}>Dark Mode</label>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            <div className="modal fade bg-secondary" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content appointmentform">
                        <div className="modal-header ">
                            <h5 className="modal-title " id="exampleModalLabel">Appointment Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <AppointmentForm />
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
}

export default Header;
