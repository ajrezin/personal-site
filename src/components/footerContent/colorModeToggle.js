/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode, useThemeUI } from 'theme-ui'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import IconButton from '../buildingBlocks/iconButton';


export default function ColorModeToggle() {
    const { theme } = useThemeUI()
    const [colorMode, setColorMode] = useColorMode()
    const nextColorMode = colorMode === 'light' ? 'dark' : 'light'

    return (
        <IconButton
            aria-label='toggle color mode'
            onClick={() => { setColorMode(nextColorMode); }}
            contents={
                <DarkModeSwitch
                    moonColor={theme.colors.text}
                    sunColor={theme.colors.text}
                    onClick={() => { setColorMode(nextColorMode); }}
                    checked={colorMode === 'light' ? false : true}
                />
            }
        />
    );
}


