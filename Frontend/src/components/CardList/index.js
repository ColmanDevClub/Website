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
          <Grid key={card} xs={12} md={4} lg={3}>
            <AnimationComponent animationDelay={index * 0.2}>
              <CardComponent {...card} />
            </AnimationComponent>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;
