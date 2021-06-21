/** @jsx jsx */
import { jsx } from "theme-ui"
import { MdOpenInNew } from 'react-icons/md'
import { Themed } from 'theme-ui'

export default function OpenLinkInNewTab(props) {
    return (
        <Themed.a target="_blank" href={props.link}>
            {props.text}<MdOpenInNew aria-label="Opens in a new window" size={12} />
        </Themed.a>
    );
}


