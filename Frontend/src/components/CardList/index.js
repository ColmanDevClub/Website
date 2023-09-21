import React from "react";

import { Grid } from "@mui/material";

import DefaultCard from "../../components/Card";
import DefaultAnimation from "../EntranceAnimation";

const CardList = ({
  cards,
  CardComponent = DefaultCard,
  AnimationComponent = DefaultAnimation,
}) => {
  return (
    <Grid container>
      {cards.map((card, index) => {
        return (
          <Grid
            key={card}
            xs={12}
            md={6}
            lg={4}
            style={{
              padding: "1rem",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <AnimationComponent
              animationDelay={index * 0.1}
              sx={{ justifyContent: "center", display: "flex", width: "100%" }}
            >
              <CardComponent {...card} />
            </AnimationComponent>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;
