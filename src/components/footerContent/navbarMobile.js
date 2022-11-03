/** @jsx jsx */
import { Box, Close, Flex, jsx, MenuButton, useThemeUI } from "theme-ui"
import { IoClose, IoMenu } from 'react-icons/io5'
import React, { useState } from "react"
import ReactModal from 'react-modal';
import { Link } from "gatsby"
import ColorModeToggle from "./colorModeToggle"
import IconButton from '../buildingBlocks/iconButton';



export default function NavbarMobile() {
    // const [menuStatus, setMenuStatus] = useColorMode()
    // const nextColorMode = colorMode === 'light' ? 'dark' : 'light'
    const [menuVisible, makeMenuVisible] = useState(false);
    const { theme } = useThemeUI()

    return (
        <>
            <Flex
                sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    // backgroundColor: '#dcd8cc',
                    padding: '20px 20px'
                }}>
                <ColorModeToggle />
                <IconButton
                    aria-label='open navigation menu'
                    onClick={() => makeMenuVisible(!menuVisible)}
                    contents={<IoMenu font-size='40' />}
                />
                <ReactModal
                    isOpen={menuVisible}
                    contentLabel={"navigation menu"}
                    style={{
                        content: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            border: 'none',
                            background: theme.colors.muted,
                            borderRadius: 'none',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'end',
                            alignItems: 'center',
                            gap: '20px',
                        }
                    }}
                >
                    <Link to='/' sx={{ variant: 'styles.navLink' }}>Home</Link>
                    <Link to='/resources' sx={{ variant: 'styles.navLink' }}>Resources</Link>
                    <Link to='/accessibility' sx={{ variant: 'styles.navLink' }}>Accessibility</Link>
                    <a href="https://resume.arielrezin.com" sx={{ variant: 'styles.navLink' }}>Resume</a>
                    <Flex sx={{ width: '100%', justifyContent: 'end', px: '15px', py: '5px' }}>
                        <IconButton
                            aria-label='close navigation menu'
                            onClick={() => makeMenuVisible(!menuVisible)}
                            contents={<IoClose font-size='40' />}
                        />
                    </Flex>
                </ReactModal>
            </Flex>
        </>
    );
}