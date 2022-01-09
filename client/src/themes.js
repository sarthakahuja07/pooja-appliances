import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
	palette: {
		primary: {
		  main: '#181813',
		},
		secondary: {
		  main: '#4f78bd',
		},
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
		},
		h5: {
		  fontFamily: 'Merriweather',
		  fontSize: '1.6rem',
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
		},
		overline: {
		  fontFamily: 'Inter',
		},
	  },
	  shape: {
		borderRadius: 8,
	  },
})