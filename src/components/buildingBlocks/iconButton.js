/** @jsx jsx */
import { jsx } from "theme-ui"
import { MdOpenInNew } from 'react-icons/md'
import { IconButton as ThemedIconButton, Themed } from 'theme-ui'

export default function IconButton(props) {
    return (
        <ThemedIconButton
            {...props}
            sx={{
                '&:focus': {
                    outlineStyle: 'dotted',
                    outlineWidth: '4px',
                    outlineColor: 'secondary'
                },
                '&:hover': {
                    color: 'primary'
                },
            }}
        >
            {props.contents}
        </ThemedIconButton>
    );
}


