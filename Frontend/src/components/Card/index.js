import * as React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import {GitHub} from '@mui/icons-material/';

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
          {github_url ? <Button size="small" sx={{color: 'black'}}><GitHub sx={{fontSize: '2rem'}}/></Button> : undefined}
        </a>
        <a href={website_url} target="_blank" rel="noreferrer">
          {website_url ? <Button size="small">Website</Button> : undefined}
        </a>
      </CardActions>
    </Card>
  );
}
