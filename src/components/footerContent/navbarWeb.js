/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import React from "react"
import ColorModeToggle from "./colorModeToggle"

export default function NavbarWeb(props) {
    return (
        <>
            <Box
                role="banner"
                sx={{
                    display: ['none', 'Flex', 'Flex'],
                    flexDirection: 'column',
                    minWidth: 'min-content',
                    padding: '20px 20px 20px',
                    gap: '10px',
                    justifyContent: 'space-between',
                    backgroundColor: 'muted'
                }}>
                <nav
                    sx={{
                        display: 'Flex',
                        flexDirection: 'column',
                        minWidth: 'min-content',
                        gap: '10px',
                    }}>
                    {props.links}
                </nav>
                <ColorModeToggle />
            </Box>
        </>
    );
}