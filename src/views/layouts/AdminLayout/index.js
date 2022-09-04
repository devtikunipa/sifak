import React from 'react';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
    <>
        <Typography variant='h4'>Hello Main</Typography>
        <Outlet />
    </>
);

export default MainLayout