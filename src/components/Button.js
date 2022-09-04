import React from "react";
import Button from "@mui/material/Button";

const ButtonCustom = (props) => {
    const { text, variant, color, custom } = props;
    return (
        <Button variant={variant ? variant : 'text'} color={color && color} sx={{
            fontSize: '16px', '&:hover': {
                bgcolor: 'transparent',
                color: 'primary.dark',
            }, ...custom
        }} {...props}>
            {text}
        </Button>
    )
}

export default ButtonCustom