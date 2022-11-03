/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import React from "react"
import ColorModeToggle from "./colorModeToggle"
import { Link } from "gatsby"

const NavbarWeb = () => (
    <>
        <Flex
            sx={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: ['100%', '100%', '80%', '60%', '50%'],
                // backgroundColor: '#dcd8cc',
                padding: '10px 0px'
            }}>
            <ColorModeToggle />
            <Link to='/' sx={{ variant: 'styles.navLink' }}>Home</Link>
            <Link to='/resources' sx={{ variant: 'styles.navLink' }}>Resources</Link>
            <Link to='/accessibility' sx={{ variant: 'styles.navLink' }}>Accessibility</Link>
            <a href="https://resume.arielrezin.com" sx={{ variant: 'styles.navLink' }}>Resume</a>
        </Flex>
    </>
)

export default NavbarWeb