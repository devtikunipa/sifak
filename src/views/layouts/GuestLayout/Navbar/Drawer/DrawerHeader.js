import * as React from 'react';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Logo from '../../../../../assets/images/logo.png';

const DrawerHeader = () => {
    return (
        <ListItemButton href='/'>
            <ListItemAvatar>
                <Avatar src={Logo} />
            </ListItemAvatar>
            <ListItemText primary={<Typography variant='h5'>{process.env.REACT_APP_NAME}</Typography>} secondary={process.env.REACT_APP_DESCRIPTION} />
        </ListItemButton>
    )
};
export default DrawerHeader