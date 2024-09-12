import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#F6C927' },
    secondary: { main: '#0E0E27' },
    common: { border: '#1F1F53', background: '#0A0A1B' },
    text: { primary: '#fff' },
    divider: '#1F1F53',
    background: {
      default: '#0A0A1B',
      paper: '#0A0A1B',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#0A0A1B',
          borderRadius: '10px',
          border: '1px solid #1F1F53',
          padding: '.5rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: '900',
          fontSize: '1.25rem',
          padding: '0.25rem ',
        },
        disabled: {},
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          borderColor: '#1F1F53',
          background: '#0A0A1B',
          color: '#fff',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          border: '1px solid #1f1f53',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '90%',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          background: '#0A0A1B',
          color: '#fff',
        },
        iconOutlined: {
          color: '#fff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
        notchedOutline: {
          borderColor: '#1F1F53',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 2,
          border: '1px solid #1F1F53',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        divider: {},
        root: {
          '&:hover': {
            background: '#1f1f5360',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: 'solid #fff',
        },
      },
    },
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       background: '#0A0A1B',
    //       border: '1px solid #1F1F53',
    //     },
    //   },
    // },
  },
});
