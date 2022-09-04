import React from 'react';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => (
    <>
        <Typography variant='h4'>Hello Guest</Typography>
        <Outlet />
    </>
);

export default GuestLayout