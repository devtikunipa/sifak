import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';
import { InfoAcademic } from '../../../../configs/localdata/home-data';

const CountUpInfo = () => {
    const item = InfoAcademic;
    return (
        <Grid container spacing={2} rowSpacing={1}>
            <Grid item lg={3} md={3} sm={6} xs={6}>
                <Paper data-aos='flip-left' sx={{ height: '150px', mb: 5, p: 2, py: 3, border: '1px dashed grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }} square={false} elevation={0}>
                    <Typography variant='h6' textTransform='uppercase' gutterBottom>Program Studi</Typography>
                    <Typography variant='h1' sx={{ mt: 1 }}><CountUp end={item.prodi} delay={5} /></Typography>
                </Paper>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
                <Paper data-aos='flip-left' sx={{ height: '150px', mb: 5, p: 2, py: 3, border: '1px dashed grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }} square={false} elevation={0}>
                    <Typography variant='h6' textTransform='uppercase' gutterBottom>Dosen</Typography>
                    <Typography variant='h1' sx={{ mt: 1 }}><CountUp end={item.dosen} delay={5} /></Typography>
                </Paper>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
                <Paper data-aos='flip-left' sx={{ height: '150px', mb: 5, p: 2, py: 3, border: '1px dashed grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }} square={false} elevation={0}>
                    <Typography variant='h6' textTransform='uppercase' gutterBottom>Mahasiswa</Typography>
                    <Typography variant='h1' sx={{ mt: 1 }}><CountUp end={item.mahasiswa} delay={5} /></Typography>
                </Paper>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
                <Paper data-aos='flip-left' sx={{ height: '150px', mb: 5, p: 2, py: 3, border: '1px dashed grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }} square={false} elevation={0}>
                    <Typography variant='h6' textTransform='uppercase' gutterBottom>Tenaga Pendidik</Typography>
                    <Typography variant='h1' sx={{ mt: 1 }}><CountUp end={item.tendik} delay={5} /></Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default CountUpInfo