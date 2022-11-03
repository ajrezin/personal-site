/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import React from "react"

const Copywrite = () => (
    <>
        <Box
            sx={{
                width: '100%',
                justifyContent: 'end',
                padding: '10px 0px 0px',
                // display: { md: 'none' },
                display: ['none', 'none', 'Flex'],
            }}>
            <span sx={{ fontSize: '11px' }}>&copy; {new Date().getFullYear()}, built with &hearts; by Ariel Rezin</span>
        </Box>
    </>
)

export default Copywrite