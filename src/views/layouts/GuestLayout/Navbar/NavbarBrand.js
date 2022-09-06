import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LogoUnipa from '../../../../assets/images/logo.png';

const NavbarBrand = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={LogoUnipa} height={40} />
                <Box sx={{ ml: 1 }}>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontWeight: 700,
                            flexGrow: 1,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {process.env.REACT_APP_NAME}
                    </Typography>
                    <Typography variant='body2'>{process.env.REACT_APP_DESCRIPTION}</Typography>
                </Box>
            </Box>

        </>
    )
}

export default NavbarBrand