import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './components/Home'
import Doctors from './components/Doctors'
import Services from './components/Services'
import Dep1 from './components/Departments/Dep1'
import Dep2 from './components/Departments/Dep2'
import Dep3 from './components/Departments/Dep3'
import ContactUs from './components/ContactUs'

const Myroutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path='/doctors' element={<Doctors />}></Route>
                        <Route path='/services' element={<Services />}></Route>
                        <Route path='/dep1' element={<Dep1 />}></Route>
                        <Route path='/dep2' element={<Dep2 />}></Route>
                        <Route path='/dep3' element={<Dep3 />}></Route>
                        <Route path='/contactus' element={<ContactUs />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Myroutes