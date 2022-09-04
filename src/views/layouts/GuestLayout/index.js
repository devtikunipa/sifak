import React from 'react';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const GuestLayout = () => (
    <>
        <Navbar />
        <Typography variant='h4'>Hello Guest</Typography>
        <Outlet />
    </>
);

export default GuestLayout