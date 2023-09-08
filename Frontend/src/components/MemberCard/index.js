import * as React from "react";

import { Link } from "react-router-dom";

import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function MemberCard({ profileImage, name, about, linkedin }) {
  return (
    <Card
      sx={{
        maxWidth: 230,
        maxHeight: 700,
        borderRadius: "50px",
        boxShadow: "0px 5px 5px 1px white",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={profileImage}
          alt="green iguana"
          sx={{
            borderRadius: "50px",
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Link to={linkedin} target="_blank">
          <Button
            size="small"
            color="primary"
            sx={{ textTransform: "capitalize" }}
          >
            LinkedIn
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
