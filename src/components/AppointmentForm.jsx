import React from 'react';

const AppointmentForm = () => {
    return (
        <>
            <form>
                <div className="mb-2">
                    <div id="emailHelp" className="form-text">We'll never share your contact details with anyone else.!</div>
                </div>
                <div className="mb-1">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" />
                </div>
                <div className="mb-1">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" />
                </div>
                <div className="row mb-1">
                    <div className="col">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control"  />
                    </div>
                    <div className="col">
                        <label htmlFor="contact" className="form-label">Contact</label>
                        <input type="text" className="form-control" id="appointmentTime" />
                    </div>
                </div>
                <div className="mb-1">
                    <label htmlFor="department" className="form-label">Department</label>
                    <select className="form-select form-select-md" aria-label=".form-select-sm example" id="department">
                        <option value="1">Eye Department</option>
                        <option value="2">Dental Department</option>
                        <option value="3">Clinical Department</option>
                    </select>
                </div>
                <div className="mb-1">
                    <label htmlFor="disease" className="form-label">Disease</label>
                    <input type="text" className="form-control" id="disease" />
                </div>
                <div className="mb-1">
                    <label htmlFor="doctor" className="form-label">Doctor</label>
                    <input type="text" className="form-control" id="doctor" />
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
                        <input type="date" className="form-control" id="appointmentDate" />
                    </div>
                    <div className="col">
                        <label htmlFor="appointmentTime" className="form-label">Appointment Time</label>
                        <input type="time" className="form-control" id="appointmentTime" />
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input bg-success" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-success text-black">Submit</button>
            </form>
        </>
    );
}

export default AppointmentForm;
