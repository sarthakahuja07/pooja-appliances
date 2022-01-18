import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette: {
        primary: {
            main: '#0a1929',
        },
        secondary: {
            main: '#518fcd',
        },

    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    '&:hover': {
                        color: '#fff'
                    }
                }
            }
        }
    },

    typography: {
        h1: {
            fontFamily: 'Merriweather',
            fontSize: '3.8rem',
        },
        h2: {
            fontFamily: 'Merriweather',
            fontSize: '3rem',
        },
        h6: {
            fontFamily: 'Merriweather',
            fontWeight: 600
        },
        h5: {
            fontFamily: 'Merriweather',
            fontSize: '1.6rem',
            fontWeight: 600,
            color: '#fff',
        },
        h4: {
            fontSize: '2rem',
            fontFamily: 'Merriweather',
        },
        h3: {
            fontFamily: 'Merriweather',
            fontSize: '2.5rem',
        },
        subtitle1: {
            fontFamily: 'Inter',
        },
        subtitle2: {
            fontFamily: 'Inter',
        },
        body1: {
            fontFamily: 'Inter',
        },
        body2: {
            fontFamily: 'Inter',
            fontSize: '0.875rem',
        },
        button: {
            fontFamily: 'Inter',
        },
        caption: {
            fontFamily: 'Inter',
            color: '#575757'
        },
        overline: {
            fontFamily: 'Inter',
        },
        price:{
            fontSize: '2rem',
            lineHeight: '51px',
            fontWeight: 600,
            fontFamily: 'Jacques Francois'
        }
    },
    shape: {
        borderRadius: 8,
    },
})