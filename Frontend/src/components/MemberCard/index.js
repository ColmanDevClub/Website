import * as React from 'react';

import { LinkedIn as LinkedInIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { Avatar, Card, IconButton, Stack, Typography } from '@mui/material';

export default function MemberCard({ profileImage, name, about, linkedin }) {
  const [isImgLoaded, setIsImgLoaded] = React.useState(false);

  return (
    <Card
      sx={{
        border: '1px solid #F6C927',
        borderRadius: '10px',
        boxShadow: '0px 0px 2px 0px #F6C927',
        margin: '1rem',
        ':hover': {
          boxShadow: '0px 0px 10px 0px #F6C927',
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease-in-out',
        },
      }}
    >
      <Stack
        display={isImgLoaded ? 'flex' : 'none'}
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        padding={2}
        height={{ xs: '350px', lg: '400px', xl: '500px' }}
      >
        <Avatar
          src={profileImage}
          alt={name}
          onLoad={() => setIsImgLoaded(true)}
          sx={{
            width: { xs: '150px', lg: '150px' },
            height: { xs: '150px', lg: '150px' },
            borderWidth: { xs: '3px', lg: '5px' },
          }}
        />
        <Typography variant="h5" fontWeight={900} color="primary">
          {name}
        </Typography>
        <Typography
          variant="subtitle1"
          // fontSize={{ xs: '.6rem', lg: '0.8rem', xl: '1.5rem' }}
          textAlign={'center'}
          sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {about}
        </Typography>
        <Link to={linkedin} target="_blank">
          <IconButton>
            <LinkedInIcon fontSize="large" color="primary" />
          </IconButton>
        </Link>
      </Stack>
    </Card>
  );
}
