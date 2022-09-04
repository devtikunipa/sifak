import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavItems from '../../../configs/localdata/NavItems';
import LogoUnipa from '../../../assets/images/logo.png';
import NavGroup from './NavGroup';
import ButtonCustom from '../../../components/Button';
import { DrawerCustom } from './DrawerCustom';


const Navbar = () => {

    return (
        <AppBar position="sticky" color="transparent" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ height: 70 }}>
                    <Box sx={{ display: 'flex' }}>
                        <img src={LogoUnipa} height={38} />
                    </Box>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: 1,
                            mr: 2,
                            display: 'flex',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            flexGrow: 1,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {process.env.REACT_APP_NAME}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        {NavItems.map((item) => (
                            item.type === 'item' ? <ButtonCustom key={item.id} text={item.title} color='inherit' component='a' href={item.url} custom={{ pr: 3 }} /> :
                                <NavGroup key={item.id} title={item.title} items={item.children} custom={{ pr: 3 }} />
                        )
                        )}
                    </Box>

                    <DrawerCustom />

                    {/* <Box sx={{ flexGrow: 0.5, textAlign: 'end' }}>
                        <Button variant='contained' color='primary' href='/login'>Sign In</Button>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Navbar;
