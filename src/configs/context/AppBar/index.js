import React, { createContext, useState } from 'react';


export const ContextOpen = createContext(null);

export const ContextOpenProvider = ({ children }) => {
    const [open, setOpen] = useState(true);
    const [openMini, setOpenMini] = useState(false);
    const contextOpenValues = {
        open,
        openMini,
        setOpen,
        setOpenMini,
    };

    return (<ContextOpen.Provider value={contextOpenValues}>{children}</ContextOpen.Provider>)
}