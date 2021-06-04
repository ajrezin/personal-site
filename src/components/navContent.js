/** @jsx jsx */
import React from "react"
import { jsx } from 'theme-ui'
import ColorModeToggle from "./colorModeToggle"
import { Link } from "gatsby"

const NavContent = () => (
    <>
        <ColorModeToggle />
        <Link to='/' sx={{ variant: 'styles.navLink' }}>Home</Link>
        <Link to='/resources' sx={{ variant: 'styles.navLink' }}>Resources</Link>
        <Link to='/accessibility' sx={{ variant: 'styles.navLink' }}>Accessibility</Link>
        <a href="https://resume.arielrezin.com" sx={{ variant: 'styles.navLink' }}>Resume</a>
        <span sx={{ fontSize: 1 }}>&copy; {new Date().getFullYear()}, built with &hearts; by Ariel Rezin</span>
    </>
)

export default NavContent