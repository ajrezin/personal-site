/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

export default function NavLinks() {
    const { theme } = useThemeUI()

    return (
        <>
            <Link to='/' activeStyle={{ color: theme.colors.primary }} sx={{ variant: 'styles.navLink' }}>Home</Link>
            <Link to='/resources' activeStyle={{ color: theme.colors.primary }} sx={{ variant: 'styles.navLink' }}>Resources</Link>
            <Link to='/accessibility' activeStyle={{ color: theme.colors.primary }} sx={{ variant: 'styles.navLink' }}>Accessibility</Link>
            <a href="https://resume.arielrezin.com" sx={{ variant: 'styles.navLink' }}>Resume</a>
        </>
    );
}