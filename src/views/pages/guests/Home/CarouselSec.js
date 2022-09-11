import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box } from '@mui/material';
import { DataCarousel } from '../../../../configs/localdata/home-data';

function CarouselSec() {
    return (
        <Carousel indicators={false} >
            {
                DataCarousel.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper sx={{
            height: '500px',
            backgroundColor: 'transparent',
            backgroundImage: `url(${props.item.path})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Box sx={{ color: 'white', textAlign: 'center' }}>
                <Typography variant='h3' sx={{
                    fontSize: {
                        lg: 40,
                        sm: 30,
                        xs: 25
                    }
                }}>{props.item.title}</Typography>
                <Typography variant='subtitle1'>{props.item.subtitle}</Typography>
            </Box>
        </Paper >
    )
}

export default CarouselSec;