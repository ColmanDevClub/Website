import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Stack, Typography } from '@mui/material';
import { StyledCard } from './LangCard.style';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const LangCard = ({ link, icon, color, title, description }) => {
  return (
    <StyledCard >
      <Stack direction={{ xs: 'row-reverse', md: 'column' }} alignItems={'center'} gap={{ xs: 2, md: 0 }}>
        <IconButton
          onClick={() => window.open(link, '_blank')}
          sx={{
            background: '#1F1F53',
            width: '3.5rem',
            height: '3.5rem',
            marginBottom: '1rem',
          }}
        >
          <FontAwesomeIcon icon={icon} color={color} />
        </IconButton>
        <Typography variant="h5" color={'primary'} fontWeight={900} sx={{ direction: 'rtl', marginBottom: '.5rem' }}>
          {title}
        </Typography>
      </Stack>
      <Typography variant="body1" sx={{ direction: 'rtl' }}>
        {description}
      </Typography>
      <div style={{ width: '100%' }}>
        <IconButton>
          <KeyboardBackspaceIcon color="primary" />
        </IconButton>
      </div>
    </StyledCard>
  );
};

export default LangCard;
