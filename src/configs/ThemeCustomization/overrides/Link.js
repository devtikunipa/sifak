// ==============================|| OVERRIDES - LINK ||============================== //
import {
    experimental_sx as sx,
} from '@mui/material/styles';
export default function Link(theme) {
    return {
        MuiLink: {
            defaultProps: {
                underline: 'none'
            },
            styleOverrides: {
                root: sx({
                    '&:hover': {
                        bgcolor: theme.palette.primary.lighter,
                        color: 'inherit'
                    },
                })
            }
        }
    };
}
