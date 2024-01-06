import * as React from 'react';

import { Card, CardActions, CardContent, CardMedia, Typography, Tooltip, IconButton, Chip } from '@mui/material';

import { GitHub as GitHubIcon, Language as LanguageIcon } from '@mui/icons-material/';

export default function MediaCard({ image_url, title, description, github_url, website_url, language }) {
  return (
    <Card sx={{ width: '100%', maxWidth: '600px', direction: 'rtl' }}>
      <CardMedia
        sx={{ borderRadius: '8px', height: 225, objectFit: 'cover' }}
        image={image_url}
        title={`${title} image`}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color={'primary'} fontWeight={900}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography sx={{ fontSize: '0.7rem' }} gutterBottom variant="p" component="div">
          {language &&
            language.map((lang) => (
              <Chip
                sx={{ marginRight: '0.3rem', marginTop: '0.3rem', border: '1px solid #1f1f53' }}
                color="secondary"
                label={lang}
              />
            ))}
        </Typography>
        <div>
          <a href={github_url} target="_blank" rel="noreferrer">
            <Tooltip title="Check out the project on GitHub">
              {github_url && (
                <IconButton>
                  <GitHubIcon sx={{ fontSize: '1.75rem' }} color="primary" />
                </IconButton>
              )}
            </Tooltip>
          </a>
          <a href={website_url} target="_blank" rel="noreferrer">
            <Tooltip title="Check out the project on web">
              {website_url && (
                <IconButton>
                  <LanguageIcon sx={{ fontSize: '1.75rem' }} color="primary" />
                </IconButton>
              )}
            </Tooltip>
          </a>
        </div>
      </CardActions>
    </Card>
  );
}
