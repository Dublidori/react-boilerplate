import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material'

const Layout = () => {
    return (
        <React.Fragment>
            {/* Header */}
            {/* <Header /> */}
            {/* Router Target */}
            <Box
                sx={{
                    px: 2
                }}
            >
                <Outlet />
            </Box>
        </React.Fragment>
    )
}

export default Layout
