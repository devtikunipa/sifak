// ==============================|| OVERRIDES - BUTTON ||============================== //
import {
    experimental_sx as sx,
} from '@mui/material/styles';
export default function Button(theme) {
    const disabledStyle = {
        '&.Mui-disabled': {
            backgroundColor: theme.palette.grey[200]
        },
    };

    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: sx({
                    fontWeight: 500,
                    '&:hover': {
                        bgcolor: 'transparent',
                        color: 'primary.dark'
                    },
                }),
                contained: {
                    ...disabledStyle
                },
                outlined: {
                    ...disabledStyle
                },
            }
        }
    };
}
