import React from 'react'
import { Link } from 'react-router-dom'

const Departments = () => {
    return (
        <>
            <div className="d-flex justify-content-center ms-auto">
                <nav className="navbar navbar-light btn btn-primary me-5 dep"> {/* Add margin to the right */}
                    <div className="container-fluid dep">
                        <Link className="navbar-brand" to="/dep1">Clinical Department</Link>
                    </div>
                </nav>

                <nav className="navbar navbar-light btn btn-primary me-5 dep"> {/* Add margin to the right */}
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/dep2">Dental Department</Link>
                    </div>
                </nav>

                <nav className="navbar navbar-light btn btn-primary dep"> {/* No margin added */}
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/dep3">Eye Department</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Departments
