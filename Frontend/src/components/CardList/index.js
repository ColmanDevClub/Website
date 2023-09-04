import React from "react";
import Card from "../../components/Card";
import { Grid } from "@mui/material";

const CardList = ({ cards }) => {
  return (
    <Grid container>
      {cards.map((card) => {
        return (
          <Grid
            key={card.title}
            xs={12}
            md={6}
            lg={4}
            style={{
              padding: "1rem",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Card {...card} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;
