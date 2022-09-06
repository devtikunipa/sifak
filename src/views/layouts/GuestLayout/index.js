import React from 'react';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const GuestLayout = () => (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
);

export default GuestLayout