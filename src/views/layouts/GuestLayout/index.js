import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const GuestLayout = () => (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);

export default GuestLayout