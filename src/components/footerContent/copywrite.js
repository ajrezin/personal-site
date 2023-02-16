/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

const Copywrite = () => (
    <>
        <div
            sx={{
                width: '100%',
                justifyContent: 'end',
                display: ['none', 'none', 'Flex'],
            }}>
            <span sx={{ fontSize: '11px' }}>
                <span>&copy; {new Date().getFullYear()}, built by Ariel Rezin and licensed under&nbsp;</span>
                <a sx={{ color: 'text', '&:visited': { color: 'text' } }} href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a>
            </span>
        </div>
    </>
)

export default Copywrite