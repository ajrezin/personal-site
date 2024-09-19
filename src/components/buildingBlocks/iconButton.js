/** @jsx jsx */
import { jsx } from "theme-ui"
import { IconButton as ThemedIconButton } from 'theme-ui'

export default function IconButton(props) {
    return (
        <ThemedIconButton
            {...props}
            sx={{
                '&:focus-visible': {
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


