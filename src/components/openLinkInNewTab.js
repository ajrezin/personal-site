/** @jsx jsx */
import { jsx } from "theme-ui"
import { MdOpenInNew } from 'react-icons/md'
import { Styled } from 'theme-ui'

export default function OpenLinkInNewTab(props) {
    return (
        <Styled.a target="_blank" href={props.link}>
            {props.text}<MdOpenInNew aria-label="Opens in a new window" size={12} />
        </Styled.a>
    );
}


