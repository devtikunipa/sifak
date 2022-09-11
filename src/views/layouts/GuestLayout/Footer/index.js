import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { DataLink, DataContact, HeadlineFooter } from '../../../../configs/localdata/footer-data';
import About from '../../../../configs/localdata/NavItems/About';
import Logo from '../../../../assets/images/logo.png';
import { Divider } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ height: 'auto', bgcolor: 'primary.main', mt: 2 }}>
            <Container maxWidth='lg' sx={{ pt: 5 }}>
                <Grid container sx={{ pb: 3 }} rowSpacing={2}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Box sx={{ pt: 3, textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' } }}>
                            <img src={Logo} height={100} />
                            <Typography variant='h4' color='white' sx={{ mt: 2 }}>{HeadlineFooter.headline1}</Typography>
                            <Typography variant='h5' color='white' fontWeight={500}>{DataContact.address}</Typography>
                            <Typography variant='h5' color='white' fontWeight={500}>{DataContact.telp}</Typography>
                            <Typography variant='h5' color='white' fontWeight={500}>{DataContact.email}</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <Box sx={{ pt: 3, px: 2, textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' } }}>
                            <Typography variant='h5' color='warning.light' >{HeadlineFooter.headline2}</Typography>
                            <Divider sx={{ mt: 1, mb: 2 }} />
                            {
                                About.children.map((item) => (
                                    <Link key={item.id} target='_blank' rel="noopener" variant='h6' color='white' href={item.url} sx={{ '&:hover': { bgcolor: 'transparent', color: 'primary.200' }, display: 'block', py: 0.5 }}>{item.title}</Link>
                                ))
                            }
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <Box sx={{ pt: 3, px: 2, textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' } }}>
                            <Typography variant='h5' color='warning.light' >{HeadlineFooter.headline3}</Typography>
                            <Divider sx={{ mt: 1, mb: 2 }} />
                            {
                                DataLink.map((item) => (
                                    <Link key={item.id} target='_blank' rel="noopener" variant='h6' color='white' href={item.url} sx={{ '&:hover': { bgcolor: 'transparent', color: 'primary.200' }, display: 'block', py: 0.5 }}>{item.title}</Link>
                                ))
                            }
                        </Box>
                    </Grid>
                </Grid>
                <Divider />
                <Box sx={{ py: 2, pt: 3 }}>
                    <Typography variant='h5' color='white' fontWeight={500} align='center'>{HeadlineFooter.headline4}</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer