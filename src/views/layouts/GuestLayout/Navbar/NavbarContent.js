import * as React from 'react';
import Box from '@mui/material/Box';
import NavItems from '../../../../configs/localdata/NavItems';
import NavGroup from './NavGroup';
import ButtonCustom from '../../../../components/ButtonCustom';


const NavbarContent = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
            {NavItems.map((item) => (
                item.type === 'item' ? <ButtonCustom key={item.id} text={item.title} color='inherit' component='a' href={item.url} custom={{ pr: 2 }} /> :
                    <NavGroup key={item.id} title={item.title} items={item.children} custom={{ pr: 2 }} />
            )
            )}
        </Box>
    );
};
export default NavbarContent;
