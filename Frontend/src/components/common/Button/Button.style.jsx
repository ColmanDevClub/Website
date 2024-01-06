import { createTheme } from '@mui/material/styles';
import { themeVariables } from '../../../constants/theme.variables';

export const btnTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: themeVariables.borderRadius,
          fontWeight: '900',
          fontSize: '1.25rem',
          padding: '0.25rem ',
        },
        disabled: {},
      },
    },
  },
});

const btnStyle = {
  // fontSize: '1.25rem;',
  // background: 'radial-gradient(circle, rgba(0,223,129,1) 0%, rgba(0,136,79,1) 100%);',
  // color: 'black;',
  // fontWeight: '700;',
  // padding: '0.25rem 0rem;',
  // transition: 'filter 200ms ease-in-out;',
  // margin: '0 auto;',
  // textTransform: 'none',
  // width: '100%',
};

export { btnStyle };
