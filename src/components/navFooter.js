import React from 'react'
import { Styled } from 'theme-ui'

const Footer = () => (
    <Navbar
        fixed='bottom'
        sticky="bottom"
        style={{
            padding: '15px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        }}
        sx={{

        }}>
        <ColorModeToggle />
        <Link to='/' sx={{ variant: 'styles.navLink' }}>Home</Link>
        <Link to='/resources' sx={{ variant: 'styles.navLink' }}>Resources</Link>
        <Link to='/accessibility' sx={{ variant: 'styles.navLink' }}>Accessibility</Link>
        <a href="https://resume.arielrezin.com" sx={{ variant: 'styles.navLink' }}>Resume</a>
        <span style={{ fontSize: '12px', marginTop: 'auto' }}>&copy; {new Date().getFullYear()}, built with &hearts; by Ariel Rezin</span>
    </Navbar>
)

export default Footer