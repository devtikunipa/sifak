// ==============================|| OVERRIDES - MENU ITEM ||============================== //
import {
    experimental_sx as sx,
} from '@mui/material/styles';
export default function MenuItem(theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: sx({
                    '&:hover': {
                        bgcolor: theme.palette.primary.lighter
                    },
                })
            }
        }
    };
}