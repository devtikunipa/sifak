import React from 'react';
import Navbar from './Navbar';
import LargeDrawer from './LargeDrawer';
import MiniDrawer from './MiniDrawer';
import DrawerHeader from './LargeDrawer/DrawerHeader';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import { ContextOpenProvider } from '../../../configs/context/AppBar';

const MainLayout = () => {
    return (
        <ContextOpenProvider>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Navbar />
                <LargeDrawer />
                <MiniDrawer />
                <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: 'warning.main', mt: 5 }}>
                    <Outlet />
                </Box>
            </Box>
        </ContextOpenProvider>
    );
};

export default MainLayout