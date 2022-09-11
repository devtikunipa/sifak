import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';

const CountUpInfo = (props) => {
    const { item } = props;
    return (
        <Paper data-aos='flip-left' sx={{ height: '150px', mb: 5, p: 2, py: 3, border: '1px dashed grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }} square={false} elevation={0}>
            <Typography variant='h6' textTransform='uppercase' gutterBottom>{item.title}</Typography>
            <Typography variant='h1' sx={{ mt: 1 }}><CountUp end={item.count} delay={5} /></Typography>
        </Paper>
    )
}

export default CountUpInfo