import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NavItems from '../../../../../configs/localdata/NavItems';

const DrawerContent = () => {
    const [open, setOpen] = React.useState({});

    const handleClick = (iditem) => () => {
        setOpen({ ...open, [iditem]: !open[iditem] });
    };
    return NavItems.map((item) => (
        item.type === 'item' ?
            <ListItemButton key={item.id} href={item.url}>
                <ListItemText primary={<Typography variant='h5'>{item.title}</Typography>} />
            </ListItemButton> :
            <div key={item.id}>
                <ListItemButton onClick={handleClick(item.id)}>
                    <ListItemText primary={<Typography variant='h5'>{item.title}</Typography>} />
                    {open[item.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {
                    item.children.map((child) => (
                        <Collapse key={child.id} in={open[item.id]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} href={child.url}>
                                    <ListItemText primary={<Typography variant='h5'>{child.title}</Typography>} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    ))
                }
            </div>
    ))
};

export default DrawerContent
