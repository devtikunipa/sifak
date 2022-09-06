import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MomenDate from '../../../../components/MomentDate';
import ButtonCustom from '../../../../components/ButtonCustom';

export default function News(props) {
    const { item } = props;
    return (
        <Card data-aos="fade-up" sx={{ height: 360, display: 'flex', flexDirection: 'column', backgroundColor: 'transparent' }} elevation={0}>
            <CardMedia
                height={160}
                component="img"
                image={item.img}
                alt="green iguana"
            />
            <CardContent sx={{ flexGrow: 1, px: 0.5, pb: 0 }}>
                <Typography gutterBottom variant="h5" component="div" textTransform='capitalize'>
                    {item.title.slice(0, 120) + (item.title.length > 120 ? '...' : '')}
                </Typography>
                <Typography variant='body1' color='text.secondary' fontStyle='italic'>{MomenDate(item.created_at)}</Typography>
            </CardContent>
            <CardActions sx={{ px: 0, pt: 0 }}>
                <ButtonCustom size="small" text='Selengkapnya >' sx={{ fontSize: 14 }} />
            </CardActions>
        </Card>
    );
}
