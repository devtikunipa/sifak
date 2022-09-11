import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import MomenDate from '../../../../components/MomentDate';
import ButtonCustom from '../../../../components/ButtonCustom';

const NewAcademics = (props) => {
    const { item } = props;
    return (
        <Card data-aos="fade-up" sx={{ backgroundColor: 'transparent' }} elevation={1}>
            <CardContent sx={{ px: 2, pb: 0 }}>
                <Typography gutterBottom variant="h5" component="div" textTransform='capitalize' fontWeight={500}>
                    {item.title.slice(0, 120) + (item.title.length > 120 ? '...' : '')}
                </Typography>
                <Typography variant='body1' color='text.secondary' fontStyle='italic'>{MomenDate(item.updated_at)}</Typography>
            </CardContent>
            <CardActions sx={{ px: 2, pt: 1 }}>
                <ButtonCustom size="small" text='Download' sx={{ fontSize: 14 }} />
            </CardActions>
        </Card>
    )
}

export default NewAcademics