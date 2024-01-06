import EastIcon from '@mui/icons-material/East';
import { Button, Stack } from '@mui/material';
import { themeVariables } from '../../../constants/theme.variables';
import css from './Button.module.css';

const ButtonWrapper = ({ children, onClick, ...rest }) => {
  return (
    <Button
      variant="contained"
      className={css['cta-btn']}
      sx={{
        marginTop: '1rem',
      }}
      onClick={onClick}
      {...rest}
    >
      {!rest.disabled && (
        <Stack display={'grid'} gridTemplateColumns={'1fr 5fr 1fr'} alignItems={'center'}>
          <span></span>
          {children}
          <Stack sx={{ background: '#040413', borderRadius: themeVariables.borderRadius, paddingX: 3, paddingY: 1.5 }}>
            <EastIcon color="primary" />
          </Stack>
        </Stack>
      )}
    </Button>
  );
};

export default ButtonWrapper;
