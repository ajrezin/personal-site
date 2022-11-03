/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import React from "react"
import ColorModeToggle from "./colorModeToggle"
import { Link } from "gatsby"

const NavLinks = () => (
    <>
        <Link to='/' sx={{ variant: 'styles.navLink' }}>Home</Link>
        <Link to='/resources' sx={{ variant: 'styles.navLink' }}>Resources</Link>
        <Link to='/accessibility' sx={{ variant: 'styles.navLink' }}>Accessibility</Link>
        <a href="https://resume.arielrezin.com" sx={{ variant: 'styles.navLink' }}>Resume</a>
    </>
)

export default NavLinks