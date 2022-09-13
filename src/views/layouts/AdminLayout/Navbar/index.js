import React, { useContext } from 'react';
import { ContextOpen } from '../../../../configs/context/AppBar';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerWidth } from '../LargeDrawer/DrawerWidth';


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open', // mengatasi props boolean yang dianggap string
})(({ theme, open }) => ({
    [theme.breakpoints.up('lg')]: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: DrawerWidth,
            width: `calc(100% - ${DrawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    },
}));

const IconButton = styled(MuiIconButton, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'openmini', // mengatasi props boolean yang dianggap string
})(({ theme, open, openmini }) => ({
    [theme.breakpoints.up('lg')]: {
        display: 'block',
        ...(open && {
            display: 'none',
        }),
    },
    [theme.breakpoints.down('lg')]: {
        display: 'block',
        ...(openmini && {
            display: 'none',
        }),
    },
}));


export default function Navbar() {
    const { open, openMini, setOpen, setOpenMini } = useContext(ContextOpen);
    const handleDrawerOpen = () => {
        setOpen(true);
        setOpenMini(true);
    };
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                    }}
                    open={open} openmini={openMini}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
