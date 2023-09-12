import * as React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
  IconButton
} from "@mui/material";

import {
  GitHub as GitHubIcon,
  Language as LanguageIcon,
} from "@mui/icons-material/";

export default function MediaCard({
  image_url,
  title,
  description,
  github_url,
  website_url,
}) {
  return (
    <Card sx={{ width: "100%", maxWidth: "600px", direction: "rtl" }}>
      <CardMedia
        sx={{ height: 225, objectFit: "cover" }}
        image={image_url}
        title={`${title} image`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <a href={github_url} target="_blank" rel="noreferrer">
          <Tooltip title="Check out the project on GitHub">
          {github_url ? (
            <IconButton sx={{color: 'black'}}>
              <GitHubIcon sx={{ fontSize: "1.75rem" }} />
            </IconButton>
          ) : undefined}
          </Tooltip>
        </a>
        <a href={website_url} target="_blank" rel="noreferrer">
          <Tooltip title="Check out the project on web">
          {website_url ? (
            <IconButton sx={{color: 'black'}}>
              <LanguageIcon sx={{ fontSize: "1.75rem"}} />
            </IconButton>
          ) : undefined}
          </Tooltip>
        </a>
      </CardActions>
    </Card>
  );
}
