import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CarouselSec from './CarouselSec';
import { Headline, DataActivities, DataRisets, DataNotices, DataAcademics } from '../../../../configs/localdata/home-data';
import { Divider, Grid } from '@mui/material';
import CountUpInfo from './CountUpInfo';
import NewNotices from './NewNotices';
import NewAcademics from './NewAcademics';
import CardMediaCustom from '../../../../components/CardMediaCustom';

const Home = () => {
    return (
        <React.Fragment>
            <Box sx={{
                height: 'auto',
                background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,245,255,1) 100%)'
            }}>
                <Container maxWidth='lg'>
                    <CarouselSec />
                </Container>
            </Box>
            <Box sx={{ bgcolor: 'primary.lighter', height: 'auto', py: 5 }}>
                <Container maxWidth='lg' sx={{ pt: 4 }}>
                    <Typography data-aos='zoom-in' data-aos-duration='1000' align='center' variant='h4' textTransform='uppercase'>{Headline.headline1}</Typography>
                    <Box sx={{ bgcolor: 'secondary.light', height: '1px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 5 }}>
                        <Box sx={{ bgcolor: 'primary.dark', height: '3px', width: '120px' }} />
                    </Box>
                    <Grid container spacing={2}>
                        {
                            DataActivities.slice(0, 4).map((item) => (
                                <Grid key={item.slug} item lg={3} md={4} sm={6} xs={12}>
                                    <CardMediaCustom item={item} prefix="aktivitas/" />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
            <Box sx={{
                background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,245,255,1) 100%)',
                height: 'auto',
                py: 5
            }}>
                <Container maxWidth='lg' sx={{ pt: 4 }}>
                    <Typography data-aos='zoom-in' align='center' variant='h4' textTransform='uppercase'>{Headline.headline2}</Typography>
                    <Box sx={{ bgcolor: 'secondary.light', height: '1px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 5 }}>
                        <Box sx={{ bgcolor: 'primary.dark', height: '3px', width: '120px' }} />
                    </Box>
                    <Grid container spacing={2}>
                        {
                            DataRisets.slice(0, 4).map((item) => (
                                <Grid key={item.slug} item lg={3} md={4} sm={6} xs={12}>
                                    <CardMediaCustom item={item} prefix="penelitian/" />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ bgcolor: 'white', height: 'auto', py: 5 }}>
                <Container maxWidth='lg' sx={{ pt: 4 }}>
                    <Typography data-aos='zoom-in' align='center' variant='h4' textTransform='uppercase'>{Headline.headline3}</Typography>
                    <Box sx={{ bgcolor: 'secondary.light', height: '1px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 5 }}>
                        <Box sx={{ bgcolor: 'primary.dark', height: '3px', width: '120px' }} />
                    </Box>
                    <CountUpInfo />
                    <Grid container spacing={1} rowSpacing={2}>
                        <Grid item lg md xs={12}>
                            <Box sx={{
                                pr: {
                                    lg: 3
                                }, pt: 5
                            }}>
                                <Typography data-aos='zoom-in' variant='h4' textTransform='uppercase'>{Headline.headline4}</Typography>
                                <Box sx={{ bgcolor: 'secondary.light', height: '1px', width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', mt: 2, mb: 3 }}>
                                    <Box sx={{ bgcolor: 'warning.main', height: '3px', width: '120px' }} />
                                </Box>
                                <Grid container spacing={1.5}>
                                    {
                                        DataNotices.map((item) => (
                                            <Grid key={item.slug} item lg={12} md={12} xs={12}>
                                                <NewNotices item={item} />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                        <Divider orientation="vertical" flexItem sx={{ mt: 5 }} />
                        <Grid item lg md xs={12}>
                            <Box sx={{
                                pl: {
                                    lg: 2
                                }, pt: 5
                            }}>
                                <Typography data-aos='zoom-in' variant='h4' textTransform='uppercase'>{Headline.headline5}</Typography>
                                <Box sx={{ bgcolor: 'secondary.light', height: '1px', width: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', mt: 2, mb: 3 }}>
                                    <Box sx={{ bgcolor: 'warning.main', height: '3px', width: '120px' }} />
                                </Box>
                                <Grid container spacing={1.5}>
                                    {
                                        DataAcademics.map((item) => (
                                            <Grid key={item.path} item lg={12} md={12} xs={12}>
                                                <NewAcademics item={item} />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </React.Fragment >
    )
}

export default Home