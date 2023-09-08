import React from "react";

import { Grid } from "@mui/material";

import DefaultCard from "../../components/Card";

const CardList = ({ cards, CardComponent = DefaultCard }) => {
  return (
    <Grid container>
      {cards.map((card) => {
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
            <CardComponent {...card} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;
