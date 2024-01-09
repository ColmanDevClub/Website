import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

// sx={{ minHeight: { xs: '180px', md: '200px' }, minWidth: { xs: '120px', md: '200px' } }}

export const StyledCard = styled(Card)(({ theme }) => ({
  flex: '1 1 ',
  padding: '1rem',
  display: 'flex',
  justifyItems: 'end',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',

  [theme.breakpoints.down('md')]: {
    padding: '1rem',
  },
}));
