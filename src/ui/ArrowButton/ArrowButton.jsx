import EastIcon from '@mui/icons-material/East';
import { Button, Stack } from '@mui/material';

const ArrowButton = ({ children, rtl = true, ...rest }) => {
  return (
    <Button variant="contained" {...rest}>
      <Stack
        flexDirection={rtl ? 'row-reverse' : 'row'}
        alignItems={'center'}
        gap={2}
        {...(rtl ? { pr: 2 } : { pl: 2 })}
      >
        {children}
        <Stack borderRadius={2} px={2} py={1} sx={{ background: '#040413' }}>
          <EastIcon
            color="primary"
            sx={{
              transform: rtl ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
            }}
          />
        </Stack>
      </Stack>
    </Button>
  );
};

export default ArrowButton;
