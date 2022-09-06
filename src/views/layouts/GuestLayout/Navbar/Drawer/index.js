import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';

export default function Drawer() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
            <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
            >
                <MenuOpenIcon sx={{ fontSize: 33 }} color={!state ? 'primary' : 'inherit'} />
            </IconButton>
            <SwipeableDrawer
                anchor='left'
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box
                    sx={{ width: 250, px: 1 }}
                    role="presentation"
                    onKeyDown={toggleDrawer(false)}
                >
                    <DrawerHeader />
                    <DrawerContent />
                </Box>
            </SwipeableDrawer>
        </Box>
    );
}
