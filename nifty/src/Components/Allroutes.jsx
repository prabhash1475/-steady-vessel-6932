import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from '../pages/Home'
// import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/signup' element={<Signup />} ></Route>
            </Routes>
        </div>
    )
}

export default Allroutes