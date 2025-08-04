import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#fffafc',
    },
    primary: {
      main: '#c1b2d7',
    },
    secondary: {
      main: '#f5c7b8',
    },
  },
  typography: {
    fontFamily: `'Segoe UI', 'Roboto', 'Arial', sans-serif`,
  },
  components: {
    // Global Button styles
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          padding: '8px 20px',
          fontWeight: 500,
        },
      },
    },
    // Global Card styles
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        },
      },
    },
    // TextField and Input styles
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    // ToggleButton customization
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          borderColor: '#c1b2d7',
          '&.Mui-selected': {
            backgroundColor: '#c1b2d7',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#aa97c4',
            },
          },
        },
      },
    },
  },
});

export default theme;
