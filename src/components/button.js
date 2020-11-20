/** @jsx jsx */
import { jsx } from "theme-ui"

export default props => (
    <button
        {...props}
        sx={{
            appearance: "none",
            fontFamily: "inherit",
            fontWeight: "medium",
            m: 0,
            px: 2,
            py: 2,
            color: "background",
            backgroundColor: "primary",
            borderStyle: "solid",
            borderColor: "primary",
            borderWidth: "4px",
            borderRadius: 6,
            "&:hover": {
                color: "primary",
                backgroundColor: "background",
                borderColor: "primary",
                borderWidth: "4px",
            },
            "&:focus": {
                border: "transparent",
                color: "background",
                outlineWidth: "4px",
                outlineStyle: "dashed",
                outlineColor: "secondary",
            },
        }}
    />
)