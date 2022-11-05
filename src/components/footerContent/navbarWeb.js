/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import React from "react"
import ColorModeToggle from "./colorModeToggle"

export default function NavbarWeb(props) {
    return (
        <>
            <Box
                sx={{
                    display: ['none', 'Flex', 'Flex'],
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: ['100%', '100%', '80%', '60%', '50%'],
                }}>
                <ColorModeToggle />
                {props.links}
            </Box>
        </>
    );
}