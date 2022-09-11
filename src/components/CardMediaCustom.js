import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MomenDate from './MomentDate';

export default function CardMediaCustom(props) {
    const { item, prefix } = props;
    return (
        <Card data-aos="fade-up" sx={{ height: 350, display: 'flex', flexDirection: 'column', backgroundColor: 'transparent' }} elevation={0}>
            <CardMedia
                height={160}
                component="img"
                image={item.path}
                alt={item.filename}
            />
            <CardContent sx={{ flexGrow: 1, px: 0.5, pb: 0 }}>
                <Typography gutterBottom variant="h5" component="div" textTransform='capitalize'>
                    {item.title.slice(0, 120) + (item.title.length > 120 ? '...' : '')}
                </Typography>
                <Typography variant='body1' color='text.secondary' fontStyle='italic'>{MomenDate(item.created_at)}</Typography>
            </CardContent>
            <CardActions sx={{ px: 0, pt: 0, pl: 0.7 }}>
                <Link href={prefix + item.slug} sx={{ fontSize: 14, color: 'inherit', '&:hover': { bgcolor: 'transparent', color: 'primary.light' } }}> Selengkapnya</Link>
            </CardActions>
        </Card>
    );
}