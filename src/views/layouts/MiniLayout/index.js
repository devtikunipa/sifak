import React from 'react';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MiniLayout = () => (
    <>
        <Typography variant='h4'>Hello Mini</Typography>
        <Outlet />
    </>
);

export default MiniLayout