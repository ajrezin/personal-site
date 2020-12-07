/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode, IconButton, useThemeUI } from 'theme-ui'
import { DarkModeSwitch } from 'react-toggle-dark-mode';


export default function ColorModeToggle() {
    const { theme } = useThemeUI()
    const [colorMode, setColorMode] = useColorMode()
    const nextColorMode = colorMode === 'light' ? 'dark' : 'light'

    return (
        <IconButton
            aria-label='toggle color mode'
            onClick={() => { setColorMode(nextColorMode); }}
            sx={{
                '&:focus': {
                    outlineStyle: 'dotted',
                    outlineWidth: '4px',
                    outlineColor: 'secondary'
                },
            }}
        >
            <DarkModeSwitch
                moonColor={theme.colors.text}
                sunColor={theme.colors.text}
                onClick={() => { setColorMode(nextColorMode); }}
                checked={colorMode === 'light' ? false : true}
            />
        </IconButton>
    );
}


