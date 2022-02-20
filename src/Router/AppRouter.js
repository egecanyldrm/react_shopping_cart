import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Cart from '../Pages/Cart';
import HomePage from '../Pages/HomePage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter