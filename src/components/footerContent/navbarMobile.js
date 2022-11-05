/** @jsx jsx */
import { Flex, jsx, useThemeUI } from "theme-ui"
import { IoClose, IoMenu } from 'react-icons/io5'
import React, { useState } from "react"
import ReactModal from 'react-modal';
import ColorModeToggle from "./colorModeToggle"
import IconButton from '../buildingBlocks/iconButton';



export default function NavbarMobile(props) {
    const [menuVisible, makeMenuVisible] = useState(false);
    const { theme } = useThemeUI()

    return (
        <>
            <Flex
                sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    display: ['null', 'none', 'none']
                }}>
                <ColorModeToggle />
                <IconButton
                    aria-label='open navigation menu'
                    onClick={() => makeMenuVisible(!menuVisible)}
                    contents={<IoMenu fontSize='40' />}
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
                    {props.links}
                    <Flex sx={{ width: '100%', justifyContent: 'end', px: '5px', py: '5px' }}>
                        <IconButton
                            aria-label='close navigation menu'
                            onClick={() => makeMenuVisible(!menuVisible)}
                            contents={<IoClose fontSize='40' />}
                        />
                    </Flex>
                </ReactModal>
            </Flex>
        </>
    );
}