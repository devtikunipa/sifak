import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NavbarContent from './NavbarContent';
import NavbarBrand from './NavbarBrand';
import Drawer from './Drawer';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const Navbar = () => {
    const trigger = useScrollTrigger();
    return (
        <ElevationScroll>
            <AppBar position="sticky" color="inherit" elevation={!trigger ? 0 : 2}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ height: 80 }}>
                        <NavbarBrand />
                        <NavbarContent />
                        <Drawer />
                    </Toolbar>
                </Container>
            </AppBar >
        </ElevationScroll>
    );
};
export default Navbar;
