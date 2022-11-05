export default {
    useColorSchemeMediaQuery: true,
    initialColorModeName: 'light',
    colors: {
        text: '#455300',
        background: '#f5f2e4',
        primary: '#a25c01',
        secondary: '#7a6ac0',
        muted: '#faf3d3',
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
        body: '"Atkinson Hyperlegible", system-ui',
        heading: '"Atkinson Hyperlegible", system-ui',
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
        96,
    ],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    link: {
        '&:focus-visible': {
            outlineStyle: 'dotted',
            outlineWidth: '4px',
            outlineColor: 'secondary',
            // the below lines invert the background and text color, I am still deciding if I want to switch my focus style to that
            // backgroundColor: 'text',
            // color: 'background'
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
            lineHeight: 'body',
            // fontSize: 4 // TODO figure out how to increase default <p> size... I want it larger
        },
        a: {
            color: 'primary',
            variant: "link",

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
            textDecoration: 'none',
            '&:focus-visible': {
                outlineStyle: 'dotted',
                outlineWidth: '4px',
                outlineColor: 'secondary',
            },
            '&:hover, &:focus-visible': {
                color: 'primary',
            },
        },
    }
}