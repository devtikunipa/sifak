// ==============================|| OVERRIDES - LIST ITEM BUTTON||============================== //
import {
    experimental_sx as sx,
} from '@mui/material/styles';
export default function ListItemButton(theme) {
    return {
        MuiListItemButton: {
            styleOverrides: {
                root: sx({
                    fontWeight: 600,
                    '&:hover': {
                        bgcolor: theme.palette.primary.lighter
                    },
                })
            }
        }
    };
}