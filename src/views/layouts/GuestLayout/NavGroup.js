import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from '@mui/material/Link';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        borderTop: '3px solid #3f51b5',
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function NavGroup(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { custom, title, items } = props;
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} >
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="text"
                sx={{
                    '&:hover': {
                        bgcolor: 'transparent',
                        color: 'primary.dark'
                    },
                    fontSize: '16px',
                    ...custom
                }}
                color={open ? 'primary' : 'inherit'}
                disableElevation
                onClick={handleClick}
                endIcon={open ? <KeyboardArrowUpIcon sx={{ ml: '-5px' }} /> : <KeyboardArrowDownIcon sx={{ ml: '-5px' }} />}
            >
                {title}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {
                    items.map((page) => (
                        <MenuItem key={page.id} disableRipple sx={{ p: 0 }}>
                            <Link href={page.url} color='inherit' sx={{
                                width: '100%', height: '100%',
                                '&:hover': {
                                    bgcolor: 'primary.lighter'
                                },
                                py: 1.7, px: 2, m: 0
                            }}>{page.title}</Link>
                        </MenuItem>
                    ))
                }
            </StyledMenu>
        </Box >
    );
}
