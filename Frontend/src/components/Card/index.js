import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard({
  image_url,
  title,
  description,
  github_url,
  website_url,
}) {
  return (
      <Card sx={{ width: 345, direction: "rtl" }}>
        <CardMedia
          sx={{ height: 140 }}
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
          <Link to={github_url}>
            <Button size="small">Github</Button>
          </Link>
          <Link to={website_url}>
            <Button size="small">Website</Button>
          </Link>
        </CardActions>
      </Card>
  );
}
