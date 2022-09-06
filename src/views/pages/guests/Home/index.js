import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CarouselSec from './CarouselSec';
import { Headline, NewActivities } from '../../../../configs/localdata/home-data';
import { Grid } from '@mui/material';
import News from './News';

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
                <Container maxWidth='lg'>
                    <Typography data-aos='zoom-in' data-aos-duration='1000' align='center' variant='h4' textTransform='uppercase'>{Headline.headline1}</Typography>
                    <Box sx={{ bgcolor: 'secondary.light', height: '1px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 3 }}>
                        <Box sx={{ bgcolor: 'primary.dark', height: '3px', width: '120px' }} />
                    </Box>
                    <Grid container spacing={2}>
                        {
                            NewActivities.map((item) => (
                                <Grid key={item.slug} item lg={3} md={4} sm={6} xs={12}>
                                    <News item={item} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ bgcolor: 'primary.lighter', height: 'auto', py: 5 }}>
                <Container maxWidth='lg'>
                    <Typography data-aos='zoom-in' align='center' variant='h4' textTransform='uppercase'>{Headline.headline2}</Typography>
                    <Box sx={{ bgcolor: 'secondary.light', height: '1px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 3 }}>
                        <Box sx={{ bgcolor: 'primary.dark', height: '3px', width: '120px' }} />
                    </Box>
                    <Grid container spacing={2}>
                        {
                            NewActivities.map((item) => (
                                <Grid key={item.slug} item lg={3} md={4} sm={6} xs={12}>
                                    <News item={item} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ bgcolor: 'primary.lighter', height: 'auto', py: 5 }}>
                <Container maxWidth='lg'>
                    <Typography data-aos='zoom-in' align='center' variant='h4' textTransform='uppercase'>{Headline.headline3}</Typography>
                    <Box sx={{ bgcolor: 'secondary.light', height: '1px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 3 }}>
                        <Box sx={{ bgcolor: 'primary.dark', height: '3px', width: '120px' }} />
                    </Box>
                    <Grid container spacing={2}>
                        {
                            NewActivities.map((item) => (
                                <Grid key={item.slug} item lg={3} md={4} sm={6} xs={12}>
                                    <News item={item} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
        </React.Fragment >
    )
}

export default Home