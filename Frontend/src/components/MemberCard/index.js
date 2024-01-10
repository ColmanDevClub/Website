import * as React from 'react';

import { LinkedIn as LinkedInIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { Button, Card, Stack, Typography } from '@mui/material';

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
        height={{ xs: '350px', lg: '350px', xl: '400px' }}
      >
        <img
          src={profileImage}
          alt={name}
          onLoad={() => setIsImgLoaded(true)}
          style={{
            borderRadius: '50%',
            border: '0.75rem solid white',
            width: '100%',
            height: '100%',
            maxHeight: '12rem',
            maxWidth: '12rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Typography
            component="h3"
            sx={{
              marginTop: '1.25rem',
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#F6C927',
            }}
          >
            {name}
          </Typography>
          <Typography
            component="p"
            sx={{
              marginTop: '0.25rem',
              fontSize: '1.1rem',
              flex: '1',
              color: '#999999',
            }}
          >
            {about}
          </Typography>
          <Link to={linkedin} target="_blank" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: '#F6C927', marginTop: '1rem' }}>
              <LinkedInIcon fontSize="large" />
            </Button>
          </Link>
        </div>
      </Stack>
    </Card>
  );
}
