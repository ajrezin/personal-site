/** @jsx jsx */
import { jsx } from "theme-ui"
import { MdOpenInNew } from 'react-icons/md'
import { Themed } from '@theme-ui/mdx'

export default function LinkOpensInNewTab(props) {
    return (
        <Themed.a target="_blank" href={props.link}>
            {props.text}<MdOpenInNew aria-label="Opens in a new tab" size={12} />
        </Themed.a>
    );
}


