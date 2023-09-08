import React from "react";

import { Grid } from "@mui/material";

import Card from "../../components/MemberCard";

const MemberCardList = ({ cards }) => {
  return (
    <Grid container>
      {cards.map((card) => {
        return (
          <Grid
            key={card.name}
            xs={12}
            md={4}
            lg={4}
            style={{
              padding: "1rem",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Card card={card} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MemberCardList;
