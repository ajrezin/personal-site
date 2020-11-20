/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from 'theme-ui'
import Toggle from 'react-toggle'
import { FiSun, FiMoon } from 'react-icons/fi'
import "./darkmodetoggle.css"


export default function ColorModeToggle() {
    const [colorMode, setColorMode] = useColorMode()
    const nextColorMode = colorMode === 'light' ? 'dark' : 'light'
    return (
        <Toggle
            checked={colorMode === 'light' ? false : true}
            onChange={e => { setColorMode(nextColorMode) }}
            aria-label='toggle color mode'
            icons={{
                checked: <FiMoon />,
                unchecked: <FiSun />,
            }}
            sx={{
                '.react-toggle-track':
                    { backgroundColor: 'muted' },
            }}
        />
    );
}


