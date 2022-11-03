export default {
    useColorSchemeMediaQuery: true,
    initialColorModeName: 'light',
    colors: {
        text: '#455300',
        background: '#f5f2e4',
        primary: '#ba7d04',
        secondary: '#7a6ac0',
        muted: '#e9e1c9',
        modes: {
            dark: {
                text: '#FCFCDC',
                background: '#41473A',
                primary: '#ecb64b',
                secondary: '#a499fe',
                muted: '#525c4a',
            }
        },
    },
    breakpoints: [40, 52, 64].map((n) => n + 'em'),
    space: [
        0,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ],
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace'
    },
    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        48,
        64,
        96
    ],
    fontWeights: {
        body: 500,
        heading: 700,
        medium: 600,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    link: {
        '&:focus': {
            outlineStyle: 'dotted',
            outlineWidth: '4px',
            outlineColor: 'secondary'
        },
        '&:hover': {
            color: 'text',
        },
    },
    skipLink: {
        '&:focus': {
            outlineStyle: 'dotted',
            outlineWidth: '6px',
            outlineColor: 'secondary',
            backgroundColor: 'text',
            color: 'background'
        },
    },
    buttons: {
        icon: {
            '&:focus': {
                outlineStyle: 'dotted',
                outlineWidth: '4px',
                outlineColor: 'secondary'
            },
            '&:hover': {
                color: 'primary'
            },
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 5

        },
        h2: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 4
        },
        h3: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 3
        },
        h4: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 2
        },
        h5: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 1
        },
        h6: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 0
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body'
        },
        a: {
            color: 'primary',
            variant: "link"
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit'
        },
        img: {
            maxWidth: '100%'
        },
        navLink: {
            color: 'text',
            fontWeight: 'bold',
            fontSize: '20px',
            '&:focus': {
                outlineStyle: 'dotted',
                outlineWidth: '4px',
                outlineColor: 'secondary'
            },
            '&:hover': {
                color: 'primary',
            },
        },
    }
}