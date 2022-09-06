import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NavbarContent from './NavbarContent';
import NavbarBrand from './NavbarBrand';
import Drawer from './Drawer';


const Navbar = () => {
    return (
        <AppBar position="sticky" color="inherit" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ height: 80 }}>
                    <NavbarBrand />
                    <NavbarContent />
                    <Drawer />
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Navbar;
